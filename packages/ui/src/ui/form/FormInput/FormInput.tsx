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
  className,
  type: inputType = 'text',
  condition,
  ...otherProps
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
    condition,
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
  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The type of the input */
  type:PropTypes.oneOf(allTypes),

  /** A function shaped as `(formValues) => boolean`
   * that returns whether the input should be rendered.
   * Useful for conditional input rendering.
   * Without this prop, the input will always be rendered.
   */
  condition:PropTypes.func,
}

export default FormInput
