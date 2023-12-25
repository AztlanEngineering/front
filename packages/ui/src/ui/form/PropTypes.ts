import PropTypes from 'prop-types'

export const FormInputPropTypes = {
  /** A function shaped as `(formValues) => boolean`
   * that returns whether the input should be rendered.
   * Useful for conditional input rendering.
   * Without this prop, the input will always be rendered.
   */
  condition:PropTypes.func,
}

export const WrapperPropTypes = {
  /** Name attribute for the input */
  name:PropTypes.string.isRequired,

  /** Label content for the input, defaults to component name */
  label:PropTypes.string,

  /** Description or additional information below the input */
  description:PropTypes.string,

  /** Whether the input is optional or not */
  optional:PropTypes.bool,

  /** Whether the text input should be disabled */
  disabled:PropTypes.bool,

  /** Validation function for the input, passed to formik `useField` */
  validate:PropTypes.func,

  /** Column span for the label */
  spanLabel:PropTypes.number,

  /** Desktop column span for the label */
  spanLabelDesktop:PropTypes.number,

  /** Column span for the content */
  spanContent:PropTypes.number,

  /** Desktop column span for the content */
  spanContentDesktop:PropTypes.number,

  /**
   * The autoComplete value that the browser should watch for the input <br>
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
   */
  autoComplete:PropTypes.string.isRequired,
}

export const sharedPropTypes = {
  ...FormInputPropTypes,
  ...WrapperPropTypes,
}
