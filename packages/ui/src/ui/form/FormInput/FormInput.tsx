/* @aztlan/generator-front 0.5.0 */
import * as React from 'react'

import { useInsertionEffect } from 'react'

import PropTypes from 'prop-types'

import styleNames from '@aztlan/bem/exports.scss'
import { TextInput, Textarea, Select } from '../fields/index.ts'

// @ts-ignore

// Local Definitions

const baseClassName = styleNames.base

const componentClassName = 'input'

const allTypes = [
  'text',
  'email',
  'password',
  'number',
  'date',
  'datetime',
  'month',
  'tel',
  'hidden',
  'select',
  // 'choices',
  'textarea',
  // 'query-combobox',
  // 'query-select',
]

/**
 * This is the component description.
 */
function FormInput({
  className, type: inputType, children, ...otherProps
}) {
  useInsertionEffect(() => {
    // @ts-ignore
    import('./styles.scss')
  }, [])

  const newClassName = [className, componentClassName]
    .filter(Boolean)
    .join(' ')

  switch (inputType) {
    case 'textarea':
      return (
        <Textarea
          className={newClassName}
          {...otherProps}
          //
        />
      )
    case 'select':
      return (
        <Select
          className={newClassName}
          {...otherProps}
          //
        />
      )
    default:
      return (
        <TextInput
          type={inputType}
          className={newClassName}
          {...otherProps}
          //
        />
      )
  }
}

FormInput.propTypes = {
  /**
   * The HTML id for this element
   */
  id: PropTypes.string,

  /**
   * The HTML class names for this element
   */
  className: PropTypes.string,

  /**
   * The React-written, css properties for this element.
   */
  style: PropTypes.objectOf(PropTypes.string),

  /**
   *  The children JSX
   */
  children: PropTypes.node,

  /**
   * The label of the input
   */
  label: PropTypes.string,

  /**
   * The name of the input
   */
  name: PropTypes.string,

  /**
   * The type of the input
   */
  type: PropTypes.oneOf(allTypes),
}

FormInput.defaultProps = {
  // someProp:false
}

FormInput.allTypes = allTypes

export default FormInput
