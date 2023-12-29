/* @aztlan/generator-front 0.6.0 */
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
  ...otherProps
}: InferProps<typeof Checkbox.propTypes>): React.ReactElement {
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
        {...register(name)}
        {...otherProps}
      />
    </div>
  )
}

Checkbox.propTypes = {
  ...sharedPropTypes,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),
}

export default withWrapper(Checkbox)
