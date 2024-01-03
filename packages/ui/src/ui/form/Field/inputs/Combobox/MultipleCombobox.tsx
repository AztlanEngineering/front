/* @aztlan/generator-front 0.9.1 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import styleNames from '@aztlan/bem'



const baseClassName = styleNames.base
const componentClassName = 'combobox'

/**
 * description
 * @param {InferProps<typeof Combobox.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Textarea
 */
function Combobox({
  id,
  className:userClassName,
  style,
  children,
  //...otherProps

}: InferProps<typeof Textarea.propTypes>): React.ReactElement {
  


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


Combobox.propTypes = {
  /** The HTML id for this element */
  id: PropTypes.string,
  
  /** The HTML class names for this element */
  className: PropTypes.string,
  
  /** The React-written, css properties for this element. */
  style: PropTypes.objectOf(PropTypes.string),
  
  /** The children JSX */
  children: PropTypes.node,
}


export default Combobox

