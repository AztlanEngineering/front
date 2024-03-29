/* @aztlan/generator-front 0.6.0 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import { useFormContext } from 'react-hook-form'
import styleNames from '@aztlan/bem'
import { propTypes } from './types.js'
import type { TProps } from './types.js'

import withWrapper from '../../wrapper/withWrapper.js'

// Local Definitions

const baseClassName = styleNames.base
const componentClassName = 'checkbox'

/**
 *
 * @param {InferProps<typeof Checkbox.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Checkbox
 */
function Checkbox({
  name,
  className: userClassName,
  style,
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
      <input
        type="checkbox"
        {...register(
          name, registerProps,
        )}
        {...otherProps}
      />
    </div>
  )
}

Checkbox.propTypes = propTypes

export default withWrapper(Checkbox)
