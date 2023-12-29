/* @aztlan/generator-front 0.5.0 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import { useFormContext } from 'react-hook-form'

// @ts-ignore
import styleNames from '@aztlan/bem'
import withWrapper from '../../wrapper/withWrapper.tsx'
import { sharedPropTypes } from '../../propTypes.ts'

const baseClassName = styleNames.base

const componentClassName = 'select'

/**
 *
 * @param {InferProps<typeof Select.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Textarea
 */
function Select({
  className: userClassName,
  style,
  options,
  ...otherProps
}: InferProps<typeof Select.propTypes>): React.ReactElement {
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
    >
      <select {...otherProps}>
        {options?.map((option) => (
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
  ...sharedPropTypes,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The options for the input */
  options:PropTypes.arrayOf(PropTypes.shape({
    value   :PropTypes.string,
    label   :PropTypes.string,
    disabled:PropTypes.bool,
  }).isRequired),
}

export { Select }

export default withWrapper(Select)
