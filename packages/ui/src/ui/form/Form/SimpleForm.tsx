/* @aztlan/generator-front 0.7.2 */
import * as React from 'react'

import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'

import styleNames from '@aztlan/bem'
import { Formik } from 'formik'
import { FormInput } from '../FormInput/index.ts'

import Debugger from '../Debugger.ts'
// Local Definitions

const baseClassName = styleNames.base

const componentClassName = 'simple-form'

// TODO add button that touches inputs (to show errors)
/**
 * This is the component description.
 */
function SimpleForm({
  id,
  className: userClassName,
  style,
  children,
  inputs,
  inputProps,
  debug,
  ...formikProps
  // ...otherProps
}) {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  return (
    <Formik {...formikProps}>
      <div
        id={id}
        className={[
          baseClassName,
          componentClassName,
          userClassName,
          'grid',
        ]
          .filter((e) => e)
          .join(' ')}
        style={style}
        // {...otherProps}
      >
        {inputs.map((input) => (
          <FormInput
            {...input}
            {...inputProps}
            key={input.name}
          />
        ))}
        {debug && <Debugger />}
      </div>
    </Formik>
  )
}

SimpleForm.propTypes = {
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
}

SimpleForm.defaultProps = {
  debug:false,
  // someProp:false
}

export default SimpleForm
