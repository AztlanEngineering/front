/* @aztlan/generator-front 1.2.16 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import styleNames from '@aztlan/bem'



const baseClassName = styleNames.base
const componentClassName = 'test'

/**
 * description
 * @param {InferProps<typeof Test.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Test
 */
function Test({
  id,
  className:userClassName,
  style,
  children,
  //...otherProps

}: InferProps<typeof Test.propTypes>): React.ReactElement {
  


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


Test.propTypes = {
  /** The HTML id for this element */
  id: PropTypes.string,
  
  /** The HTML class names for this element */
  className: PropTypes.string,
  
  /** The React-written, css properties for this element. */
  style: PropTypes.objectOf(PropTypes.string),
  
  /** The children JSX */
  children: PropTypes.node,
}


export default Test

