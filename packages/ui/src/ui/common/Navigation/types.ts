import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

export const htmlShared = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),
}

export const asShared = {
  /* The HTML tag to render */
  as:PropTypes.elementType,
}

export const fixedShared = {
  /* Whether this element should display in a fixed position */
  fixed:PropTypes.bool,
}

export const rightShared = {
  /* A React element to represent the next navigation element */
  right:PropTypes.node,

  /* The span of this element on desktop */
  desktopRightSpan:PropTypes.number,
}

export const leftShared = {
  /* A React element to represent the previous navigation element */
  left:PropTypes.node,

  /* The span of this element on desktop */
  desktopLeftSpan:PropTypes.number,
}

export const desktopOnlyShared = {
  /** Whether to show this menu only on desktop */
  desktopOnly:PropTypes.bool,
}

export const barsShared = {
  ...htmlShared,
  ...asShared,
  ...fixedShared,
  ...rightShared,
  ...leftShared,

  /* A React element to represent the current navigation location */
  children:PropTypes.node.isRequired,

  /* Whether to hide this navigation element on desktop */
  desktop:PropTypes.bool,

  /* Whether to display borders */
  UNSTABLE_borders:PropTypes.bool,

  /* Whether the element is padded */
  UNSTABLE_padded:PropTypes.bool,
}

export const SequentialNavigationPropTypes = {
  ...fixedShared,
  /* The children to render */
  children:PropTypes.node.isRequired,

  /* The array of navigation elements to be passed to the navigation context */
  items:PropTypes.arrayOf(PropTypes.shape({
    label        :PropTypes.string.isRequired,
    url          :PropTypes.string.isRequired,
    footerContent:PropTypes.string,
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

  /* A component to display on the last page instead of the next button.
   * This can for instance be a submit button, or a link to a different place */
  submit:PropTypes.element,

  /* The current footer content */
  currentFooterContent:PropTypes.string,
}

export type SequentialNavigationProps = InferProps<
  typeof SequentialNavigationPropTypes
>
