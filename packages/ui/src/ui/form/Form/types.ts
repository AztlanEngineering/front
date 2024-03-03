import PropTypes, {
  Validator, InferProps,
} from 'prop-types'

import * as formPropTypes from '../Field/propTypes.js'

const sectionTypeValidator: Validator<any> = (
  props,
  propName,
  componentName,
) => {
  const sections = props[propName]

  if (!Array.isArray(sections)) {
    return new Error(`Invalid prop \`${propName}\` of type \`${typeof sections}\` supplied to \`${componentName}\`, expected an array.`)
  }

  sections.forEach((section) => {
    if (typeof section !== 'object' || section === null) {
      return new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`. Each item must be an object.`)
    }

    if (typeof section.label !== 'string') {
      return new Error(`Invalid prop \`${propName}.label\` supplied to \`${componentName}\`. Label must be a string.`)
    }
  })

  // Return null if no error
  return null
}

export const typeShared = {
  /** Whether the form is multipart or not */
  type:PropTypes.oneOf([
    'default',
    'multipart',
  ]),
}

const basePropTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The children JSX */
  children:PropTypes.node,

  /** An object of field props that will be applied to all the fields */
  fieldProps:PropTypes.shape({
    ...formPropTypes.globalType,
    ...formPropTypes.wrapperShared,
    ...formPropTypes.inputShared, // Kinda
    ...formPropTypes.optional,
  }),

  /** The default values for the form */
  defaultValues:PropTypes.objectOf(PropTypes.any),
}

export const FormPropTypes = {
  ...basePropTypes,
  ...typeShared,
  items         :sectionTypeValidator,
  loadInitialUrl:PropTypes.bool,
  onSubmit      :PropTypes.func,
}

export const SimpleFormPropTypes = {
  ...basePropTypes,

  /** The fields to be rendered */
  fields:PropTypes.arrayOf(PropTypes.shape({
    ...formPropTypes.globalType,
    ...formPropTypes.baseShared,
    ...formPropTypes.inputShared, // Kinda
    ...formPropTypes.optional,
  })),
  onSubmit  :PropTypes.func,
  isInFlight:PropTypes.bool,

  /** The component to be rendered after the form, defaults to a basic submit button */
  SubmitComponent:PropTypes.elementType,
}

export type TFormProps = InferProps<typeof FormPropTypes>

export type TSimpleFormProps = InferProps<typeof SimpleFormPropTypes>
