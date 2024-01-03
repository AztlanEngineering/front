import * as React from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import * as formPropTypes from '../../propTypes.ts'
import MultipleCombobox from './MultipleCombobox.tsx'
import SingleCombobox from './SingleCombobox.tsx'
import withWrapper from '../../wrapper/withWrapper.tsx'

function Combobox({
  multiple,
  ...props
}: InferProps<typeof Combobox.propTypes>): React.ReactElement {
  if (multiple) {
    return <MultipleCombobox {...props} />
  }
  return <SingleCombobox {...props} />
}

Combobox.propTypes = {
  ...formPropTypes.baseShared,
  ...formPropTypes.inputShared,
  ...formPropTypes.optionsShared,

  /** Whether to allow multiple selections */
  multiple:PropTypes.bool,
}

export default withWrapper(Combobox)
