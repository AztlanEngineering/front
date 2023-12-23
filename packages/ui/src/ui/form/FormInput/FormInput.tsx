/* @aztlan/generator-front 0.5.0 */
import * as React from 'react'

import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'

import styleNames from '@aztlan/bem'
import {
  Checkbox,
  TextInput,
  Textarea,
  Select,
  SimpleChoices,
  Choices,
} from '../fields/index.ts'
import { allTypes } from '../constants.ts'

// @ts-ignore

// Local Definitions

const baseClassName = styleNames.base

const componentClassName = 'input'

/**
 * This is the component description.
 */
function FormInput({
  className, type: inputType, children, ...otherProps
}) {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const newClassName = [
    className,
    componentClassName,
  ]
    .filter(Boolean)
    .join(' ')

  const fieldProps = {
    ...otherProps,
    className:newClassName,
  }

  switch (inputType) {
    case 'textarea':
      return <Textarea {...fieldProps} />
    case 'select':
      return <Select {...fieldProps} />
    case 'checkbox':
      return <Checkbox {...fieldProps} />
    case 'simple-choices':
      return <SimpleChoices {...fieldProps} />
    case 'choices':
      return <Choices {...fieldProps} />
    default:
      return (
        <TextInput
          type={inputType}
          {...fieldProps}
        />
      )
  }
}

FormInput.propTypes = {
  /**
   * The HTML id for this element
   */
  id:PropTypes.string,

  /**
   * The HTML class names for this element
   */
  className:PropTypes.string,

  /**
   * The React-written, css properties for this element.
   */
  style:PropTypes.objectOf(PropTypes.string),

  /**
   *  The children JSX
   */
  children:PropTypes.node,

  /**
   * The label of the input
   */
  label:PropTypes.string,

  /**
   * The name of the input
   */
  name:PropTypes.string.isRequired,

  /**
   * The type of the input
   */
  type:PropTypes.oneOf(allTypes),

  /**
   * Whether the text input should be disabled
   */

  disabled:PropTypes.bool,

  /**
   * Whether the input is optional or not
   */

  optional:PropTypes.bool,

  /**
   * The placeholder text for the input
   */

  placeholder:PropTypes.string,

  /**
   * The autoComplete value that the browser should watch for the input
   * `https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete`
   */
  autoComplete:PropTypes.string,
}

FormInput.defaultProps = {
  optional:false,
  disabled:false,
  // someProp:false
}

export default FormInput
