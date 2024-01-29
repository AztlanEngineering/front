/* @aztlan/generator-front 0.5.0 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import { useFormContext } from 'react-hook-form'
import styleNames from '@aztlan/bem'
import { propTypes } from './types.js'
import type { TProps } from './types.js'

// @ts-ignore
import withWrapper from '../../wrapper/withWrapper.js'

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
  name,
  options,
  registerProps,
  ...otherProps
}: TProps): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const { register } = useFormContext()

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
      <select
        {...register(
          name, registerProps,
        )}
        {...otherProps}
      >
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

Select.propTypes = propTypes

export default withWrapper(Select)
