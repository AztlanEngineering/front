/* @aztlan/generator-front 0.7.2 */
import * as React from 'react'

import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'

import styleNames from '@aztlan/bem'
import { withFieldWrapper } from '../common/index.ts'

// Local Definitions

const baseClassName = styleNames.base

const componentClassName = 'choices'

/**
 * This is the component description.
 */
function Choices({
  className: userClassName,
  style,
  multiple,
  options,
  getOptionInputId,
  getOptionLabelId,
  ...otherProps
}) {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const type = multiple ? 'checkbox' : 'radio'

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
      {options.map((option) => (
        <React.Fragment key={option.value}>
          <input
            {...otherProps}
            type={type}
            value={option.value}
            disabled={option?.disabled || false}
            aria-labelledby={getOptionLabelId(option)}
            id={getOptionInputId(option)}
          />
          <label
            htmlFor={getOptionInputId(option)}
            id={getOptionLabelId(option)}
          >
            {option.label}
          </label>
        </React.Fragment>
      ))}
    </div>
  )
}

Choices.propTypes = {
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
}

Choices.defaultProps = {
  // someProp:false
}

export default withFieldWrapper(
  Choices, {
    mockLabel:true,
  },
)
