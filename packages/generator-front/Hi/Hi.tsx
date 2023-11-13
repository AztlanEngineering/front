/* @aztlan/generator-front 0.0.0 */
import * as React from 'react'

import { useInsertionEffect } from 'react'

import PropTypes from 'prop-types'

import styleNames from '@pareto-engineering/bem/exports'


// Local Definitions

const baseClassName = styleNames.base

const componentClassName = 'hi'

/**
 * This is the component description.
 */
const Hi = ({
  id,
  className:userClassName,
  style,
  children,
  //...otherProps
}) => {

  useInsertionEffect(() => {
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


Hi.propTypes = {
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


Hi.defaultProps = { 
  //someProp:false 
}

export default Hi

