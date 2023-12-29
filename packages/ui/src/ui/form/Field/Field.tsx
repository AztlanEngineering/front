/* @aztlan/generator-front 0.8.0 */
import * as React from 'react'

import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'

import styleNames from '@aztlan/bem'


// Local Definitions

const baseClassName = styleNames.base

const componentClassName = 'input'

/**
 * This is the component description.
 */
const Input = ({
  id,
  className:userClassName,
  style,
  children,
  //...otherProps
}) => {

  useInsertionEffect(() => {
    // @ts-ignore
    import('./styles.scss')
  }, [])

  
  return(
    <div
      id={id}
      className={[
        
        baseClassName,
        
        componentClassName,
        userClassName,
      ]
        .filter((e) => e)
        .join(' ')}
      style={ style }
      //{...otherProps}
    >
      {children}
    </div>
  )
}


Input.propTypes = {
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
}


export default Input

