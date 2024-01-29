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

export const FormPropTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The children JSX */
  children:PropTypes.node,

  ...typeShared,

  /** An object of field props that will be applied to all the fields */
  fieldProps:PropTypes.shape({
    ...formPropTypes.globalType,
    ...formPropTypes.wrapperShared,
    ...formPropTypes.inputShared, // Kinda
    ...formPropTypes.optional,
  }),

  /** The form sections to be rendered */
  items:sectionTypeValidator,
}

export type TFormProps = InferProps<typeof FormPropTypes>
