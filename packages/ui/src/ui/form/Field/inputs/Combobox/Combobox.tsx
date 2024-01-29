import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import styleNames from '@aztlan/bem'
import * as formPropTypes from '../../propTypes.js'
import MultipleCombobox from './MultipleCombobox.js'
import SingleCombobox from './SingleCombobox.js'
import withWrapper from '../../wrapper/withWrapper.js'

const baseClassName = styleNames.base
const componentClassName = 'combobox'

function Combobox({
  className: userClassName,
  multiple,
  ...props
}: InferProps<typeof Combobox.propTypes>): React.ReactElement {
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

Combobox.propTypes = {
  ...formPropTypes.baseShared,
  ...formPropTypes.inputShared,
  ...formPropTypes.optionsShared,

  /** Whether to allow multiple selections */
  multiple:PropTypes.bool,
}

export default withWrapper(Combobox)
