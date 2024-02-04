/* @aztlan/generator-front 0.8.0 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import { useFormContext } from 'react-hook-form'

import styleNames from '@aztlan/bem'
import { propTypes } from './types.js'
import type { TProps } from './types.js'

import withWrapper from '../../wrapper/withWrapper.js'

const baseClassName = styleNames.base
const componentClassName = 'text'

/**
 * D
 * @param {InferProps<typeof Text.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Textarea
 */
function Text({
  className: userClassName,
  style,
  type: inputType,
  name,
  registerProps,
  loading = false,
  ...otherProps
}: TProps): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const { register } = useFormContext()
  console.log(
    'TI', name, registerProps,
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
      <input
        type={inputType}
        {...register(
          name, registerProps,
        )}
        {...otherProps}
      />
      {loading && 'Loading...'}
    </div>
  )
}

Text.propTypes = propTypes

export default withWrapper(Text)
