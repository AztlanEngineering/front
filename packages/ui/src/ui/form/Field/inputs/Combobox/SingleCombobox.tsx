/* @aztlan/generator-front 0.9.1 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import { useController } from 'react-hook-form'
import { useCombobox } from 'downshift'

import styleNames from '@aztlan/bem'
import * as formPropTypes from '../../propTypes.ts'

const baseClassName = styleNames.base
const componentClassName = 'combobox'

/**
 * description
 * @param {InferProps<typeof SingleCombobox.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Textarea
 */
function SingleCombobox({
  className: userClassName,
  style,
  registerProps,
  options: items, // Exceptional renaming to make our interface with downshift more legible.
  name,
  disabled = false,
  placeholder,
}: // ...otherProps

InferProps<typeof SingleCombobox.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )
  // It is important to remember that useController hook
  // uses a slightly different API as the register function
  const { field } = useController({
    name,
    rules:registerProps,
    disabled,
  })

  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
    selectedItem,
  } = useCombobox({
    onSelectedItemChange:({ sItem }) => console.log(sItem),
    /*
      onInputValueChange({inputValue}) {
        setItems(books.filter(getBooksFilter(inputValue))) */
    // items,
    items               :items.map((item) => item.label),
    itemToString(item) {
      return item || ''
    },
  })

  return (
    <div
      className={[
        baseClassName,
        componentClassName,
        userClassName,
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      <input
        {...getInputProps({
          ...field,
          disabled,
          placeholder,
        })}
      />
      <button
        {...getToggleButtonProps()}
        aria-label="toggle menu"
      >
        &#8595;
      </button>
      {selectedItem}
      <ul {...getMenuProps()}>
        {isOpen
          && items
            .filter((item) => !field.value || item.value.includes(field.value))
            .map((
              item, index,
            ) => (
              <li
                {...getItemProps({
                  key  :`${item.value}${index}`,
                  item,
                  index,
                  style:{
                    backgroundColor:highlightedIndex === index ? 'lightgray' : 'white',
                    fontWeight     :selectedItem === item ? 'bold' : 'normal',
                  },
                })}
              >
                {item.value}
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

  /** placeholder */
  placeholder:PropTypes.string,
}

export default SingleCombobox
