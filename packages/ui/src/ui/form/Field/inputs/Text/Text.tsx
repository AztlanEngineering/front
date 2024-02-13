/* @aztlan/generator-front 0.8.0 */
import * as React from 'react'
import {
  useInsertionEffect, useMemo,
} from 'react'

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
  prefix,
  prefixSpan = 2,
  prefixSpanDesktop = 2,
  suffix,
  suffixSpan = 2,
  suffixSpanDesktop = 2,
  ...otherProps
}: TProps): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const { register } = useFormContext()

  const loadingMessage = useMemo(
    () => {
      if (typeof loading === 'string') {
        return loading
      }
      if (loading) {
        return 'Loading...'
      }
      return null
    },
    [loading],
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
      style={{
        ...style,
        '--prefix-span'        :prefixSpan,
        '--prefix-span-desktop':prefixSpanDesktop,
        '--suffix-span'        :suffixSpan,
        '--suffix-span-desktop':suffixSpanDesktop,
      } as React.CSSProperties}
    >
      <div className="grid">
        {prefix && (
        <span className={`span-${prefixSpan} md-span-${prefixSpanDesktop}`}>
          {prefix}
        </span>
        )}
        <input
          type={inputType}
          {...register(
            name, registerProps,
          )}
          {...otherProps}
        />
        {suffix && (
        <span className={`span-${suffixSpan} md-span-${suffixSpanDesktop}`}>
          {suffix}
        </span>
        )}
      </div>
      {loadingMessage}
    </div>
  )
}

Text.propTypes = propTypes

export default withWrapper(Text)
