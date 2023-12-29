/* @aztlan/generator-front 0.7.2 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'

import styleNames from '@aztlan/bem'
import { Formik } from 'formik'

import { useSections } from '@aztlan/react-helpers'
import {
  Menu, Inputs,
} from './common/index.ts'
import Context from './Context.ts'
import Debugger from '../Debugger.ts'

// Local Definitions

const baseClassName = styleNames.base

const componentClassName = 'form'

/**
 * In practice, it will be essential that all required inputs
 * have a validator
 */
function Form({
  id,
  className: userClassName,
  style,
  children,
  items,
  debug = false,
  inputProps = {},
  type: formType = 'default',

  ...formikProps
  // ...otherProps
}) {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const handlerProps = useSections(items)

  return (
    <Formik {...formikProps}>
      <Context.Provider
        value={{
          ...handlerProps,
          inputProps,
          type:formType,
        }}
      >
        {children}
        {debug && <Debugger />}
      </Context.Provider>
    </Formik>
  )
}

Form.propTypes = {
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
   * Whether the form is multipart or not
   */
  type:PropTypes.oneOf([
    'default',
    'multipart',
  ]),

  /**
   * Whether to debug form state in console
   */
  debug:PropTypes.bool,
}

Form.Menu = Menu
Form.Inputs = Inputs
export default Form
