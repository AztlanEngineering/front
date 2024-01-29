/* @aztlan/generator-front 0.8.0 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import { useFormContext } from 'react-hook-form'
import styleNames from '@aztlan/bem'
import { propTypes } from './types.js'
import type { TProps } from './types.js'

import withWrapper from '../../wrapper/withWrapper.js'

// Local Definitions

const baseClassName = styleNames.base
const componentClassName = 'textarea'

/**
 *
 * @param {InferProps<typeof Textarea.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Textarea
 */
function Textarea({
  className: userClassName,
  style,
  rows = 4,
  name,
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
      <textarea
        rows={rows}
        {...register(
          name, registerProps,
        )}
        {...otherProps}
      />
    </div>
  )
}

Textarea.propTypes = propTypes

export default withWrapper(Textarea)
