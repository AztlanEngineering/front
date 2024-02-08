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

const nextPropTypes = {
  /* A React element to represent the next navigation element */
  next:PropTypes.node,
}

const prevPropTypes = {
  /* A React element to represent the previous navigation element */
  previous:PropTypes.node,
}

const desktopOnlyPropTypes = {
  /** Whether to show this menu only on desktop */
  desktopOnly:PropTypes.bool,
}

export const FooterPropTypes = {
  ...htmlPropTypes,
  ...asPropTypes,
  ...fixedPropTypes,
  ...nextPropTypes,

  /* A React element to represent the current navigation location */
  content:PropTypes.node.isRequired,

  /* Whether to hide this navigation element on desktop */
  hideOnDesktop:PropTypes.bool,
}

export const HeaderPropTypes = {
  ...FooterPropTypes,
  ...prevPropTypes,
}

export const PaginatorPropTypes = {
  ...htmlPropTypes,
  ...prevPropTypes,
  ...nextPropTypes,
  ...desktopOnlyPropTypes,
  ...asPropTypes,

  /* The column span of the buttons */
  span:PropTypes.number,

  /* The desktop column span of the buttons */
  spanDesktop:PropTypes.number,
}

export const VerticalMenuPropTypes = {
  ...htmlPropTypes,
  ...asPropTypes,
  ...desktopOnlyPropTypes,

  /** The name of the menu */
  label:PropTypes.string,

  /** The items for the menu. Array of { name, url, disabled } */
  items:PropTypes.arrayOf(PropTypes.shape({
    label   :PropTypes.string.isRequired,
    url     :PropTypes.string,
    disabled:PropTypes.bool.isRequired,
  })),
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

  /** The label of the menu */
  menuLabel:PropTypes.string,

  /** Override showing then previous button */
  hidePreviousButton:PropTypes.bool,

  /** Override showing then next button */
  hideNextButton:PropTypes.bool,

  /** handler handler for the previous button. This overrides fully the default navigation function,
   * so it is crucial that a navigation action is provided on that handler,
   * for instance to the previous section. */
  handlerPrevious:PropTypes.func,

  /* handler handler for the next button. This overrides fully the default navigation function,
   * so it is crucial that a navigation action is provided on that handler,
   * for instance to the next section. */
  handlerNext:PropTypes.func,
}

export type HeaderProps = InferProps<typeof HeaderPropTypes>
export type FooterProps = InferProps<typeof FooterPropTypes>
export type PaginatorProps = InferProps<typeof PaginatorPropTypes>
export type VerticalMenuProps = InferProps<typeof VerticalMenuPropTypes>
export type SequentialNavigationProps = InferProps<
  typeof SequentialNavigationPropTypes
>
