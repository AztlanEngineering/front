/* @aztlan/generator-front 1.5.0 */
import * as React from 'react'

import {
  useInsertionEffect,
} from 'react'

import * as PropTypes from 'prop-types'

// @ts-ignore
import styleNames from '@aztlan/bem'

import {
  withFieldWrapper,
} from '../common/index.ts'

// Local Definitions

const baseClassName = styleNames.base

const componentClassName = 'textarea'

/**
 * This is the component description.
 */
function Textarea({
  className: userClassName, style, rows, ...otherProps
}) {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  return (
    <div
      className={[
        baseClassName,
        componentClassName,
        userClassName,
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      <textarea
        rows={rows}
        {...otherProps}
        //
      />
    </div>
  )
}

Textarea.propTypes = {
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
}

Textarea.defaultProps = {
  rows:4,
}

export default withFieldWrapper(Textarea)