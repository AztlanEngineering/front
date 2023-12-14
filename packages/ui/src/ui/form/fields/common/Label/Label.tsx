/* @aztlan/generator-front 0.5.0 */
import * as React from 'react'

import { useInsertionEffect } from 'react'

import PropTypes from 'prop-types'

// @ts-ignore
import styleNames from '@aztlan/bem/exports.scss'

// Local Definitions

const baseClassName = styleNames.base

const componentClassName = 'label'

/**
 * This is the component description.
 */
function Label({
  id,
  className: userClassName,
  style,
  children,
  name,
  optional,
  as: Wrapper,
  // ...otherProps
}) {
  useInsertionEffect(() => {
    // @ts-ignore
    import('./styles.scss')
  }, [])

  return (
    <Wrapper
      htmlFor={Wrapper === 'label' ? `form.${name}` : undefined}
      id={id}
      className={[baseClassName, componentClassName, userClassName]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      {children || name}
      {optional && <span> (Optional)</span>}
    </Wrapper>
  )
}

Label.propTypes = {
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
   *  The html tag that acts as an input label
   */
  as: PropTypes.node,

  /**
   *  The name of the input label
   */
  name: PropTypes.string,

  /**
   * Whether the input should have an optional tag
   */
  optional: PropTypes.bool,
}

Label.defaultProps = {
  as: 'label',
  optional: false,
}

export default Label
