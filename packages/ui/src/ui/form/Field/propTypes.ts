import * as PropTypes from 'prop-types'

export const FieldPropTypes = {}

/** These are props that are can be safely shared between several fields in the same form */
export const sharedWrapperPropTypes = {
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

export const WrapperPropTypes = {
  /** Name attribute for the input */
  name:PropTypes.string.isRequired,

  /** Label content for the input, defaults to component name */
  label:PropTypes.string,

  /** Description or additional information below the input */
  description:PropTypes.string,

  ...sharedWrapperPropTypes,
}

export const sharedPropTypes = {
  ...FieldPropTypes,
  ...WrapperPropTypes,
}
