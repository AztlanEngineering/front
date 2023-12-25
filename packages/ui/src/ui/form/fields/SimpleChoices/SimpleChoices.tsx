/* @aztlan/generator-front 0.7.2 */
import * as React from 'react'

import {
  useInsertionEffect, useCallback,
} from 'react'

import * as PropTypes from 'prop-types'

import styleNames from '@aztlan/bem'
import { withFieldWrapper } from '../common/index.ts'
import { sharedPropTypes } from '../../PropTypes.ts'

// Local Definitions

const baseClassName = styleNames.base

const componentClassName = 'simple-choices'

/**
 * This is the component description.
 */
function RawSimpleChoices({
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
        <div
          className="grid"
          key={option.value}
        >
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
        </div>
      ))}
    </div>
  )
}

RawSimpleChoices.propTypes = {
  ...sharedPropTypes,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** Whether the input can have multiple values */
  multiple:PropTypes.bool,

  /** The choice options */
  options:PropTypes.arrayOf(PropTypes.shape({
    value   :PropTypes.string,
    label   :PropTypes.string,
    disabled:PropTypes.bool,
  }).isRequired),

  /** The function to get the id for the option input */
  getOptionInputId:PropTypes.func.isRequired,

  /** The function to get the id for the option label */
  getOptionLabelId:PropTypes.func.isRequired,
}

export { RawSimpleChoices }

export default withFieldWrapper(
  RawSimpleChoices, { mockLabel: true },
)
