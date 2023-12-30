/* @aztlan/generator-front 0.8.0 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import { useFormContext } from 'react-hook-form'

import styleNames from '@aztlan/bem'

import withWrapper from '../../wrapper/withWrapper.tsx'
import { sharedPropTypes } from '../../propTypes.ts'

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
}: InferProps<typeof Textarea.propTypes>): React.ReactElement {
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

Textarea.propTypes = {
  ...sharedPropTypes,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The number of rows for the input */
  rows:PropTypes.number,
}

export default withWrapper(Textarea)
