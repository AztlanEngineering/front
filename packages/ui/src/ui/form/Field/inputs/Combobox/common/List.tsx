/* @aztlan/generator-front 0.9.1 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import { useController } from 'react-hook-form'
import { useCombobox } from 'downshift'

import styleNames from '@aztlan/bem'
import * as formPropTypes from '../../propTypes.ts'

const baseClassName = styleNames.base
const componentClassName = styleNames.elementList

/**
 * description
 * @param {InferProps<typeof List.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Textarea
 */
function List({
  className: userClassName,
  style,
  registerProps,
  options: items, // Exceptional renaming to make our interface with downshift more legible.
  name,
  disabled = false,
}: // ...otherProps

InferProps<typeof List.propTypes>): React.ReactElement {
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
    />
  )
}

List.propTypes = {
  ...formPropTypes.baseShared,
  ...formPropTypes.inputShared,
  ...formPropTypes.optionsShared,
}

export default List
