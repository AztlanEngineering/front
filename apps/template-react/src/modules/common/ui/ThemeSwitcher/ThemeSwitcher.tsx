/* @aztlan/generator-front 0.4.0 */
import * as React from 'react'

import { useInsertionEffect } from 'react'

import PropTypes from 'prop-types'

// @ts-ignore
import styleNames from '@aztlan/bem/exports.scss'


// Local Definitions

const baseClassName = styleNames.base

const componentClassName = 'theme-switcher'

/**
 * This is the component description.
 */
const ThemeSwitcher = ({
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


ThemeSwitcher.propTypes = {
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


ThemeSwitcher.defaultProps = { 
  //someProp:false 
}

export default ThemeSwitcher

