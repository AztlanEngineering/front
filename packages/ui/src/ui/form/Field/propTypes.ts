import * as PropTypes from 'prop-types'

export const Field = {
  /** An array of HOC to transform the input */
  extensions:PropTypes.arrayOf(PropTypes.func),

  /** A tuple of [dependencies, conditionFunction] to decide whether to render the input */

  condition:PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.func,
  ])),
}

/** These are props that are can be safely shared between several fields in the same form */
export const wrapperShared = {
  /** Whether the input is optional or not */
  optional:PropTypes.bool,

  /** Whether the text input should be disabled */
  disabled:PropTypes.bool,

  /** Column span for the label */
  spanLabel:PropTypes.number,

  /** Desktop column span for the label */
  spanLabelDesktop:PropTypes.number,

  /** Column span for the content */
  spanContent:PropTypes.number,

  /** Desktop column span for the content */
  spanContentDesktop:PropTypes.number,
}

export const Wrapper = {
  /** Name attribute for the input */
  name:PropTypes.string.isRequired,

  /** Label content for the input, defaults to component name */
  label:PropTypes.string,

  /** Description or additional information below the input */
  description:PropTypes.string,

  /** An object of shape [`RegisterOptions`](https://www.react-hook-form.com/ts/#RegisterOptions) that will be passed to the registration function of the input */
  registerProps:PropTypes.object,

  ...wrapperShared,
}

export const baseShared = {
  ...Field,
  ...Wrapper,
}

export const inputShared = {
  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** Whether some loading state is in progress */
  loading:PropTypes.bool,
}

export const optionsShared = {
  /** The options for the input */
  options:PropTypes.arrayOf(PropTypes.shape({
    value   :PropTypes.string,
    label   :PropTypes.string,
    disabled:PropTypes.bool,
  }).isRequired).isRequired,

  /** Whether the component is in a loading state */
  loading:PropTypes.bool,
}

export const comboboxShared = {
  /** Whether to open the menu when the input is reset */
  openOnReset:PropTypes.bool,

  /** The key to use for the value of each option */
  valueKey:PropTypes.string,

  /** A function that takes an option and returns its string value for display purposes */
  convertItemToString:PropTypes.func,

  /** A function that takes a value and returns the matching option */
  convertValueToItem:PropTypes.func,
}
