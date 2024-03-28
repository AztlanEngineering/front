import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import {
  htmlShared, desktopOnlyShared, asShared,
} from '../../types.js'

const itemShape = {
  key           :PropTypes.string,
  label         :PropTypes.string,
  url           :PropTypes.string,
  disabled      :PropTypes.bool,
  className     :PropTypes.string,
  Component     :PropTypes.node,
  displayItemsAs:PropTypes.oneOf([
    'nested',
    'group',
  ]),
  items:PropTypes.array,
}

const itemsValidator = PropTypes.arrayOf((...args) => PropTypes.shape(itemShape).isRequired(...args))

itemShape.items = itemsValidator

export const rootItemPropType = PropTypes.shape(itemShape).isRequired

export const ComponentPropTypes = {
  ...htmlShared,
  ...asShared,
  ...desktopOnlyShared,
  /* the root item */
  rootItem:rootItemPropType,

  /** A function that takes the current item is executed on mouse enter */
  onItemMouseEnterHandler:PropTypes.func,

  /** A function that takes the current item is executed on mouse leave */
  onItemMouseLeaveHandler:PropTypes.func,

  /** Whether the last element displays at the end of the flexbox */
  spaced:PropTypes.bool,

  appendItems:itemsValidator,

  /** Whether to hide the root item */
  hideRootItem:PropTypes.bool,
}

export type ComponentProps = InferProps<typeof ComponentPropTypes>
