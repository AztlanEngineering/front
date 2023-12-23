/* @aztlan/generator-front 0.7.2 */
import * as React from 'react'
import {
  useReducer, useInsertionEffect,
} from 'react'

import * as PropTypes from 'prop-types'

import styleNames from '@aztlan/bem'
import { Formik } from 'formik'

import {
  Menu, Inputs,
} from './common/index.ts'
import useHandler from './useHandler.ts'
import Context from './Context.ts'

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

  const handlerProps = useHandler(items)
  console.log(
    'F', handlerProps,
  )

  return (
    <Formik {...formikProps}>
      <Context.Provider
        value={{
          ...handlerProps,
          type:formType,
        }}
      >
        {children}
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
}

Form.defaultProps = {
  type:'default',
}

Form.Menu = Menu
Form.Inputs = Inputs

export default Form
