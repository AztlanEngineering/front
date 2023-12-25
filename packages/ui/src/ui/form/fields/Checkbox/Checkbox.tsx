/* @aztlan/generator-front 0.6.0 */
import * as React from 'react'

import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'

// @ts-ignore
import styleNames from '@aztlan/bem'
import { withFieldWrapper } from '../common/index.ts'
import {
  FormInputPropTypes, WrapperPropTypes,
} from '../../PropTypes.ts'

// Local Definitions

const baseClassName = styleNames.base

const componentClassName = 'checkbox'

/**
 * At the moment this is the exact same as TextInput
 * However as we add more features to the TextInput,
 * it will diverge
 */
function RawCheckbox({
  className: userClassName, style, ...otherProps
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
        {...otherProps}
        type="checkbox"
      />
    </div>
  )
}

RawCheckbox.propTypes = {
  ...FormInputPropTypes,
  ...WrapperPropTypes,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),
}

export { RawCheckbox }

export default withFieldWrapper(
  RawCheckbox, { hookOptions: { type: 'checkbox' } },
)
