import * as React from 'react'
import {
  useState, useEffect, useCallback, useRef,
} from 'react'
import PropTypes, { InferProps } from 'prop-types'
import {
  useController, useFormState,
} from 'react-hook-form'
import {
  useCombobox,
  UseComboboxStateChange,
  UseComboboxState,
  UseComboboxStateChangeOptions,
} from 'downshift'
import styleNames from '@aztlan/bem'
import * as formPropTypes from '../../propTypes.ts'

interface ComboboxOption {
  value    :string;
  label    :string;
  disabled?:boolean;
}

const baseClassName = styleNames.base
const componentClassName = 'text'

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
  className: userClassName,
  style,
  registerProps,
  options,
  name,
  disabled = false,
  openOnReset = false,
  placeholder,
  valueKey = 'value',
  convertItemToString = (item) => (item ? item.label : ''),
  convertValueToItem = (
    string, items,
  ) => items?.find((item) => item[valueKey] === string),
}: InferProps<typeof SingleCombobox.propTypes>): React.ReactElement {
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

  const {
    isOpen,
    inputValue,
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
    items               :options,
    // selectedItem        :RHFValue,
    onSelectedItemChange:handleSelectedItemChange,
    // stateReducer,
    // onInputValueChange  :({ inputValue }) => setLocalValue(inputValue || ''),
    initialSelectedItem :convertValueToItem(
      RHFValue, options,
    ),
    itemToString:convertItemToString,
  })

  console.log(
    'IV', inputValue,
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
      selectItem(undefined)
      onChange('')
      inputRef.current?.focus()
      if (openOnReset) {
        openMenu()
      }
    }, [inputRef.current],
  )

  return (
    <div
      className={[
        baseClassName,
        componentClassName,
        userClassName,
      ]
        .filter(Boolean)
        .join(' ')}
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
      <button
        type="button"
        onClick={resetAndFocusInput}
      >
        X
      </button>
      {/*
      <button
        type="button"
        {...getToggleButtonProps()}
        aria-label="toggle menu"
      >
        &#8595;
      </button> */}
      <ul {...getMenuProps()}>
        {isOpen
          && options
            .filter((item) => !inputValue
                || item.label.toLowerCase().includes(inputValue.toLowerCase()))
            .map((
              item, index,
            ) => (
              <li
                {...getItemProps({
                  item,
                  index,
                  key  :`${item.value}${index}`,
                  style:{
                    backgroundColor:highlightedIndex === index ? 'lightgray' : 'white',
                    fontWeight     :RHFValue === item ? 'bold' : 'normal',
                  },
                })}
              >
                {convertItemToString(item)}
              </li>
            ))}
      </ul>
    </div>
  )
}

SingleCombobox.propTypes = {
  ...formPropTypes.baseShared,
  ...formPropTypes.inputShared,
  ...formPropTypes.optionsShared,
  /** Whether to open the menu when the input is reset */
  openOnReset        :PropTypes.bool,
  /** The key to use for the value of each option */
  valueKey           :PropTypes.string,
  /** A function that takes an option and returns its string value for display purposes */
  convertItemToString:PropTypes.func,
  /** A function that takes a value and returns the matching option */
  convertValueToItem :PropTypes.func,
}

export default SingleCombobox
