/* @aztlan/generator-front 0.9.1 */
import * as React from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import styleNames from '@aztlan/bem'
// import * as formPropTypes from '../../propTypes.ts'

const baseClassName = styleNames.base
const componentClassName = styleNames.elementList

/**
 * description
 * @param {InferProps<typeof List.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Textarea
 */
function List({
  className: userClassName,
  style,
  items,
  getMenuProps,
  getItemProps,
  highlightedIndex,
  convertItemToString,
  fieldValue,
  valueKey,
  isOpen,
}: InferProps<typeof List.propTypes>): React.ReactElement {
  console.log(
    styleNames, isOpen,
  )
  return (
    <ul
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        isOpen && styleNames.modifierOpen,
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      {...getMenuProps()}
    >
      {items.map((
        item, index,
      ) => (
        <li
          {...getItemProps({
            item,
            index,
            key  :item?.[valueKey],
            style:{
              backgroundColor:highlightedIndex === index ? 'yellow' : 'white',
              fontWeight     :fieldValue === item[valueKey] ? 'bold' : 'normal',
            },
          })}
        >
          {convertItemToString(item)}
        </li>
      ))}
    </ul>
  )
}

List.propTypes = {
  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The options for the input */
  items:PropTypes.arrayOf(PropTypes.shape({
    value   :PropTypes.string,
    label   :PropTypes.string,
    disabled:PropTypes.bool,
  }).isRequired).isRequired,

  /** The downship props getter for the menu */
  getMenuProps:PropTypes.func.isRequired,

  /** The downshift props getter for each menu item */
  getItemProps:PropTypes.func.isRequired,

  /** The index of the highlighted item */
  highlightedIndex:PropTypes.number,

  /** A function that takes an option and returns its string value for display purposes */
  convertItemToString:PropTypes.func.isRequired,

  /** The value of the field */
  fieldValue:PropTypes.string,

  /** The key to use for the value of each option */
  valueKey:PropTypes.string.isRequired,

  /** Whether the menu is open */
  isOpen:PropTypes.bool.isRequired,
}

export default List
