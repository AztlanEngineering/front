import * as React from 'react'
import {
  useState, useEffect, useCallback, useRef,
} from 'react'
import { useController } from 'react-hook-form'
import {
  useCombobox,
  UseComboboxStateChange,
  // UseComboboxState,
  // UseComboboxStateChangeOptions,
} from 'downshift'
import styleNames from '@aztlan/bem'
import type { TSingleComboboxProps } from './types.js'
import { basePropTypes } from './types.js'
import ResetButton from './common/ResetButton.js'
import List from './common/List.js'

import {
  Item,
  defaultValueKey,
  defaultConvertItemToString,
  defaultConvertValueToItem,
  defaultFilterItems,
} from './defaults.js'

interface ComboboxOption extends Item {
  disabled?:boolean;
}

/*
const stateReducer = (
  state: UseComboboxState<ComboboxOption>,
  actionAndChanges: UseComboboxStateChangeOptions<ComboboxOption>,
) => {
  const {
    type, changes,
  } = actionAndChanges
  switch (type) {
    case useCombobox.stateChangeTypes.ItemClick:
    case useCombobox.stateChangeTypes.InputKeyDownEnter:
      return {
        ...changes, // default Downshift changes
        inputValue:changes.selectedItem,
      }
      // case useCombobox.stateChangeTypes.FunctionSelectItem:

    default:
      return changes // otherwise return unmodified changes
  }
} */

function SingleCombobox({
  className,
  style,
  registerProps,
  options,
  name,
  disabled = false,
  openOnReset = false,
  // stateReducer,// TODO not implemented. Just needs a default boilerplate, without it the hook will say stateReducer is not a fn
  onInputValueChangeFactory,
  placeholder,
  valueKey = defaultValueKey,
  convertItemToString = defaultConvertItemToString,
  convertValueToItem = defaultConvertValueToItem,
}: TSingleComboboxProps): React.ReactElement {
  const [
    items,
    setItems,
  ] = useState(options)

  const {
    field: {
      onChange, onBlur, ref: RHFRef, value: RHFValue,
    },
  } = useController({
    name,
    rules:registerProps,
  })

  const handleSelectedItemChange = useCallback(
    (changes: UseComboboxStateChange<ComboboxOption>) => {
      onChange(changes.selectedItem?.[valueKey] || undefined)
    },
    [onChange],
  )

  const defaultOnInputValueChangeFactory = useCallback(
    (stateUpdater) => ({ inputValue }) => stateUpdater((state) => defaultFilterItems(
      options, inputValue,
    )),
    [options],
  )

  const {
    isOpen,
    // inputValue,
    openMenu,
    // setInputValue,
    // getToggleButtonProps,
    selectItem,
    selectedItem,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items,
    // selectedItem        :RHFValue,
    onSelectedItemChange:handleSelectedItemChange,
    // stateReducer        :stateReducer || defaultStateReducer,
    onInputValueChange  :(onInputValueChangeFactory
      || defaultOnInputValueChangeFactory
    )(setItems),
    initialSelectedItem:convertValueToItem(
      RHFValue, options,
    ),
    itemToString:convertItemToString,
  })

  console.log(
    'COMBOBOX', isOpen, items,
  )

  const inputRef = useRef<HTMLInputElement>(null) // Create your own ref to manage focus

  const setCombinedRef = useCallback(
    (instance) => {
      RHFRef(instance)
      inputRef.current = instance
    },
    [RHFRef],
  )

  useEffect(
    () => {
      (async () => {
        if (RHFValue !== selectedItem?.[valueKey]) {
          const newItem = await convertValueToItem(
            RHFValue, options,
          )
          selectItem(newItem)
        }
      })()
    }, [
      RHFValue,
    // valueKey,
    // convertValueToItem,
    // options,
    ],
  )

  const resetAndFocusInput = useCallback(
    () => {
      onChange('')
      selectItem(undefined)
      inputRef.current?.focus()
      if (openOnReset) {
        openMenu()
      }
    }, [inputRef.current],
  )

  return (
    <div
      className={className}
      style={style}
    >
      <input
        {...getInputProps({
          disabled,
          placeholder,
          onBlur,
          ref:setCombinedRef,
        })}
      />
      <ResetButton onClick={resetAndFocusInput} />
      {/*
      <button
        type="button"
        {...getToggleButtonProps()}
        aria-label="toggle menu"
      >
        &#8595;
      </button> */}
      <List
        isOpen={isOpen}
        getMenuProps={getMenuProps}
        getItemProps={getItemProps}
        items={items}
        highlightedIndex={highlightedIndex}
        fieldValue={RHFValue}
        convertItemToString={convertItemToString}
        valueKey={valueKey}
      />
    </div>
  )
}

SingleCombobox.propTypes = basePropTypes

export default SingleCombobox
