/* @aztlan/generator-front 0.5.0 */
import * as React from 'react'

import { useInsertionEffect, useMemo } from 'react'

import PropTypes from 'prop-types'

// @ts-ignore
import styleNames from '@aztlan/bem/exports.scss'

// Local Definitions

const baseClassName = styleNames.base

const componentClassName = 'description'

/**
 * This is the component description.
 */
function Description({
  className: userClassName,
  style,
  meta,
  name,
  children,
  // ...otherProps
}) {
  useInsertionEffect(() => {
    // @ts-ignore
    import('./styles.scss')
  }, [])

  const isError = !!meta?.error

  return (
    <div
      className={[
        baseClassName,

        componentClassName,
        userClassName,
        isError && styleNames.modifierError,
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      {meta?.error || children}
    </div>
  )
}

Description.propTypes = {
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

Description.defaultProps = {
  // someProp:false
}

export default Description
