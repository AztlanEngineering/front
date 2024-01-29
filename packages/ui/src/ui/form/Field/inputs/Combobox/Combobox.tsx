import * as React from 'react'
import { useInsertionEffect } from 'react'

import styleNames from '@aztlan/bem'
import { wrapperPropTypes } from './types.js'
import type { TProps } from './types.js'
import MultipleCombobox from './MultipleCombobox.js'
import SingleCombobox from './SingleCombobox.js'
import withWrapper from '../../wrapper/withWrapper.js'

const baseClassName = styleNames.base
const componentClassName = 'combobox'

function Combobox({
  className: userClassName,
  multiple,
  ...props
}: TProps): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )
  const className = [
    baseClassName,
    componentClassName,
    userClassName,
  ]
    .filter(Boolean)
    .join(' ')

  const fieldProps = {
    className,
    ...props,
  }

  if (multiple) {
    return <MultipleCombobox {...fieldProps} />
  }
  return <SingleCombobox {...fieldProps} />
}

Combobox.propTypes = wrapperPropTypes

export default withWrapper(Combobox)
