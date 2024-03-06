import * as PropTypes from 'prop-types'
import { Validator } from 'prop-types'
import { AVAILABLE_TYPES } from './constants.js'

export const globalType = {
  /** The type of the input */
  type:PropTypes.oneOf(AVAILABLE_TYPES),
}

function conditionPropType(
  props, propName, componentName,
) {
  const condition = props[propName]
  if (!Array.isArray(condition) || condition.length !== 2) {
    return new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`. Validation failed.`)
  }
  if (
    !Array.isArray(condition[0])
    || !condition[0].every((item) => typeof item === 'string')
  ) {
    return new Error(`First element of prop \`${propName}\` supplied to \`${componentName}\` must be an array of strings.`)
  }
  if (typeof condition[1] !== 'function') {
    return new Error(`Second element of prop \`${propName}\` supplied to \`${componentName}\` must be a function.`)
  }
  return null
}

export const Field = {
  /** An array of HOC to transform the input */
  extensions:PropTypes.arrayOf(PropTypes.func),

  /** A tuple of [dependencies, conditionFunction] to decide whether to render the input */
  condition:conditionPropType,

  /** A component to render the input */
  Component:PropTypes.elementType,

  /** What Wrapper to use for the Form, default is Wrapper */
  WrapperComponent:PropTypes.elementType,
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

export const baseWrapper = {
  /** Name attribute for the input */
  name:PropTypes.string.isRequired,

  /** An object of shape [`RegisterOptions`](https://www.react-hook-form.com/ts/#RegisterOptions) that will be passed to the registration function of the input */
  // TODO add validate, object of functions
  registerProps:PropTypes.any, // shape({ validate: PropTypes.objectOf(PropTypes.func) }),

  /** Register props to pass down the tree when the input displays nested inputs
   * For instance : (place.streetAddress, place.city)
   * This take the exact same API as registerProps, the only difference
   * being they will be overwritten by registerProps. This way the nested logic does not have
   * priority over the local one. */
  nestedRegisterProps:PropTypes.object,
}

export const Wrapper = {
  ...baseWrapper,

  /** Label content for the input, defaults to component name */
  label:PropTypes.string,

  /** Description or additional information below the input */
  description:PropTypes.string,

  /** Indicates if a mock label with `<legend>` is used,
   * This is useful when the field renders several `<inputs>`
   * and the "real" HTML labels are next to them.
   * Even if this prop can be passed on field instantiation, it is better to
   * "hard-code" it in the HOC call, passing options:{ mockLabel:true }
   */
  mockLabel:PropTypes.bool,

  /** Whether the input requires a nested grid */
  nested:PropTypes.bool,

  /** Whether to unregister the input on unmount */
  unregisterOnUnmount:PropTypes.bool,

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
  loading:PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
}

const optionType = PropTypes.shape({
  value   :PropTypes.string.isRequired,
  label   :PropTypes.string.isRequired,
  disabled:PropTypes.bool,
})

const optionsWithExtensionsValidator: Validator<any[]> = (
  props,
  propName,
  componentName,
) => {
  const options = props[propName]

  if (!Array.isArray(options)) {
    return new Error(`Invalid prop \`${propName}\` of type \`${typeof options}\` supplied to \`${componentName}\`, expected an array.`)
  }

  options.forEach((option) => {
    PropTypes.checkPropTypes(
      { option: optionType },
      { option },
      'option',
      componentName,
    )
  })

  return null
}

export const optionsShared = {
  /** The options for the input */
  options:optionsWithExtensionsValidator,

  /** Whether the component is in a loading state */
  loading:PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
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

/** These are props that can or can not be present when iterating over a map of inputs.
 * Specific inputs have specific requirements, for instance required autoComplete */
export const optional = {
  /** Whether the input is optional or not */
  autoComplete:PropTypes.string,
}
