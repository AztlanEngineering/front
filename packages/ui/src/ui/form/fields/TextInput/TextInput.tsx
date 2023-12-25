/* @aztlan/generator-front 0.5.0 */
import * as React from 'react'

import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'

// @ts-ignore
import styleNames from '@aztlan/bem'
import { withFieldWrapper } from '../common/index.ts'
import { htmlTypes } from '../../constants.ts'
import {
  FormInputPropTypes, WrapperPropTypes,
} from '../../PropTypes.ts'

// Local Definitions

const baseClassName = styleNames.base

const componentClassName = 'text-input'

/**
 * This is the component description.
 */
function RawTextInput({
  className: userClassName,
  style,
  type: inputType,
  ...otherProps
}) {
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
      // {...otherProps}
    >
      <input
        type={inputType}
        {...otherProps}
      />
    </div>
  )
}

RawTextInput.propTypes = {
  ...FormInputPropTypes,
  ...WrapperPropTypes,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The type of the input */
  type:PropTypes.oneOf(htmlTypes),
}

export { RawTextInput }

export default withFieldWrapper(RawTextInput)
