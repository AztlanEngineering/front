/* @aztlan/generator-front 0.9.1 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

// import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import { useController } from 'react-hook-form'
import { useCombobox } from 'downshift'

import styleNames from '@aztlan/bem'
import * as formPropTypes from '../../../propTypes.js'

const baseClassName = styleNames.base
const componentClassName = styleNames.elementItem

/**
 * description
 * @param {InferProps<typeof Item.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Textarea
 */
function Item({
  className: userClassName,
  style,
  registerProps,
  options: items, // Exceptional renaming to make our interface with downshift more legible.
  name,
}: // disabled = false,
// ...otherProps

InferProps<typeof Item.propTypes>): React.ReactElement {
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
      <div className="">
        <input
          placeholder="Best book ever"
          className=""
          {...getInputProps(field)}
        />
        <button
          aria-label="toggle menu"
          className=""
          type="button"
          {...getToggleButtonProps()}
        >
          {isOpen ? <>&#8593;</> : <>&#8595;</>}
        </button>
      </div>
      <ul
        className={!(isOpen && items.length) && 'hidden'}
        {...getMenuProps()}
      >
        {isOpen
          && items.map((
            item, index,
          ) => (
            <li
              className={[
                highlightedIndex === index && 'interactive',
                selectedItem === item && 'success',
              ]
                .filter(Boolean)
                .join(' ')}
              key={item.id}
              {...getItemProps({
                item,
                index,
              })}
            >
              <span>{item.title}</span>
              <span className="">{item.author}</span>
            </li>
          ))}
      </ul>
    </div>
  )
}

Item.propTypes = {
  ...formPropTypes.baseShared,
  ...formPropTypes.inputShared,
  ...formPropTypes.optionsShared,
}

export default Item
