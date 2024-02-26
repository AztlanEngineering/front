import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import {
  htmlShared, desktopOnlyShared, asShared,
} from '../../types.js'

export const ComponentPropTypes = {
  ...htmlShared,
  ...asShared,
  ...desktopOnlyShared,

  /** The name of the menu */
  label:PropTypes.string,

  /** The items for the menu. Array of { name, url, disabled } */
  groups:PropTypes.arrayOf(PropTypes.shape({
    key  :PropTypes.string,
    label:PropTypes.string,
    items:PropTypes.arrayOf(PropTypes.shape({
      key      :PropTypes.string,
      label    :PropTypes.string,
      url      :PropTypes.string,
      disabled :PropTypes.bool,
      className:PropTypes.string,
      Component:PropTypes.node,
    })).isRequired,
  })).isRequired,

  /** Extras items to append to the end of the menu */
  extras:PropTypes.arrayOf(PropTypes.shape({
    key      :PropTypes.string,
    Component:PropTypes.node.isRequired,
    disabled :PropTypes.bool,
    className:PropTypes.string,
  })),

  /** A function that takes the current item is executed on mouse enter */
  onItemMouseEnterHandler:PropTypes.func,

  /** A function that takes the current item is executed on mouse leave */
  onItemMouseLeaveHandler:PropTypes.func,
}

export type ComponentProps = InferProps<typeof ComponentPropTypes>
