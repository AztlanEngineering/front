/* @aztlan/generator-front 0.8.0 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import { useFormContext } from 'react-hook-form'

import styleNames from '@aztlan/bem'

import withWrapper from '../../wrapper/withWrapper.tsx'
import { BUILT_IN_HTML_TYPES } from '../../constants.ts'
import { sharedPropTypes } from '../../propTypes.ts'

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
  ...otherProps
}: InferProps<typeof Text.propTypes>): React.ReactElement {
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
        type={inputType}
        {...register(
          name, registerProps,
        )}
        {...otherProps}
      />
    </div>
  )
}

Text.propTypes = {
  ...sharedPropTypes,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The type of the input */
  type:PropTypes.oneOf(BUILT_IN_HTML_TYPES),

  /**
   * The autoComplete value that the browser should watch for the input <br>
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
   */
  autoComplete:PropTypes.string.isRequired,
}

export default withWrapper(Text)
