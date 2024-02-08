import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

const htmlPropTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),
}

const asPropTypes = {
  /* The HTML tag to render */
  as:PropTypes.elementType,
}

const fixedPropTypes = {
  /* Whether this element should display in a fixed position */
  fixed:PropTypes.bool,
}

export const FooterPropTypes = {
  ...htmlPropTypes,
  ...asPropTypes,
  ...fixedPropTypes,
  /* A React element to represent the next navigation element */
  next:PropTypes.node,

  /* A React element to represent the current navigation location */
  content:PropTypes.node.isRequired,

  /* Whether to hide this navigation element on desktop */
  hideOnDesktop:PropTypes.bool,
}

export const HeaderPropTypes = {
  ...FooterPropTypes,
  /* A React element to represent the previous navigation element */
  previous:PropTypes.node,
}

export const VerticalMenuPropTypes = {
  ...htmlPropTypes,
  ...asPropTypes,

  /** The name of the menu */
  label:PropTypes.string,

  /** The items for the menu. Array of { name, url, disabled } */
  items:PropTypes.arrayOf(PropTypes.shape({
    label   :PropTypes.string.isRequired,
    url     :PropTypes.string,
    disabled:PropTypes.bool.isRequired,
  })),

  /** Whether to show this menu only on desktop */
  desktopOnly:PropTypes.bool,
}

export const SequentialNavigationPropTypes = {
  ...fixedPropTypes,
  /* The children to render */
  children:PropTypes.node.isRequired,

  /* The array of navigation elements to be passed to the navigation context */
  items:PropTypes.arrayOf(PropTypes.shape({
    label:PropTypes.string.isRequired,
    url  :PropTypes.string.isRequired,
  })),

  /* Whether the user can continue to the next step */
  canContinue:PropTypes.bool,

  /** The label of the menu */
  menuLabel:PropTypes.string,
}

export type HeaderProps = InferProps<typeof HeaderPropTypes>
export type FooterProps = InferProps<typeof FooterPropTypes>
export type VerticalMenuProps = InferProps<typeof VerticalMenuPropTypes>
export type SequentialNavigationProps = InferProps<
  typeof SequentialNavigationPropTypes
>
