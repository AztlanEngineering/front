import PropTypes from 'prop-types'

export const WrapperPropTypes = {
  /** The HTML id for this component */
  id:PropTypes.string,

  /** The HTML class names for this component */
  className:PropTypes.string,

  /** The inline styles for the component */
  style:PropTypes.instanceOf(Object),

  /** Name attribute for the input */
  name:PropTypes.string.isRequired,

  /** Whether the text input should be disabled */
  disabled:PropTypes.bool,

  /** Whether the input is optional or not */
  optional:PropTypes.bool,

  /** Label content for the input, defaults to component name */
  label:PropTypes.string,

  /** Description or additional information below the input */
  description:PropTypes.string,

  /** Validation function for the input */
  validate:PropTypes.func,

  /** Column span for the label */
  spanLabel:PropTypes.number,

  /** Desktop column span for the label */
  spanLabelDesktop:PropTypes.number,

  /** Column span for the content */
  spanContent:PropTypes.number,

  /** Desktop column span for the content */
  spanContentDesktop:PropTypes.number,

  /** Indicates if a mock label with `<p>` is used,
   * This is useful when the field renders several `<inputs>`
   * and the "real" HTML labels are next to them */
  mockLabel:PropTypes.bool,

  /** Options that will be passed to the `useField` hook in the wrapper */
  hookOptions:PropTypes.instanceOf(Object),

  /**
   * The autoComplete value that the browser should watch for the input
   * `https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete`
   */
  autoComplete:PropTypes.string.isRequired,
}

export const LabelPropTypes = {
  /** Label content for the input, defaults to component name */
  label:PropTypes.string,
}

/*
export const WrapperPropTypes = {
  Component:PropTypes.elementType.isRequired,
  ...LabelPropTypes,
}
*/
