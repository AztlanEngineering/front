/* @aztlan/generator-front 1.5.0 */
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

const componentClassName = 'textarea'

/**
 * This is the component description.
 */
function RawTextarea({
  className: userClassName,
  style,
  rows = 4,
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
      <textarea
        rows={rows}
        {...otherProps}
        //
      />
    </div>
  )
}

RawTextarea.propTypes = {
  ...FormInputPropTypes,
  ...WrapperPropTypes,

  /** The HTML class names for this component */
  className:PropTypes.string,

  /** The number of rows for the input */
  rows:PropTypes.number,

  /** The inline styles for the component */
  style:PropTypes.instanceOf(Object),
}

export { RawTextarea }

export default withFieldWrapper(RawTextarea)
