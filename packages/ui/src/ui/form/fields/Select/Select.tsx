/* @aztlan/generator-front 0.5.0 */
import * as React from 'react'

import { useInsertionEffect } from 'react'

import PropTypes from 'prop-types'

// @ts-ignore
import styleNames from '@aztlan/bem/exports.scss'
import { withFieldWrapper } from '../common/index.ts'

// Local Definitions

const baseClassName = styleNames.base

const componentClassName = 'select'

/**
 * This is the component description.
 */
function Select({
  id,
  className: userClassName,
  style,
  options,
  ...otherProps
}) {
  useInsertionEffect(() => {
    // @ts-ignore
    import('./styles.scss')
  }, [])

  return (
    <div
      id={id}
      className={[baseClassName, componentClassName, userClassName]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      <select {...otherProps}>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option?.disabled || false}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

Select.propTypes = {
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
   * The options of the select input
   */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
      disabled: PropTypes.bool,
    }).isRequired,
  ),
}

Select.defaultProps = {
  // someProp:false
}

export default withFieldWrapper(Select)
