/* @aztlan/generator-front 0.7.2 */
import * as React from 'react'
import {
  useReducer, useInsertionEffect,
} from 'react'

import * as PropTypes from 'prop-types'

import styleNames from '@aztlan/bem'
import {
  Formik, useFormikContext,
} from 'formik'

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
 * This is the component description.
 */
function Form({
  id,
  className: userClassName,
  style,
  children,
  items,
  debug,
  inputProps,
  type: formType,

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

Form.defaultProps = {
  type      :'default',
  debug     :false,
  inputProps:{},
}

Form.Menu = Menu
Form.Inputs = Inputs
export default Form
