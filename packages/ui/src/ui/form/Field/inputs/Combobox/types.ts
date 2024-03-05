import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import * as formPropTypes from '../../propTypes.js'

export const basePropTypes = {
  ...formPropTypes.baseShared,
  ...formPropTypes.inputShared,
  ...formPropTypes.optionsShared,
  ...formPropTypes.comboboxShared,

  /** The placeholder text */
  placeholder:PropTypes.string,

  /** The state reducer for the combobox */
  stateReducer:PropTypes.func,

  /** Whether the input is disabled */
  // disabled:PropTypes.bool,

  /** The function creator  */
  onInputValueChangeFactory:PropTypes.func,
}

export const wrapperPropTypes = {
  ...basePropTypes,

  /** Whether the input can have multiple values */
  multiple:PropTypes.bool,
}

export type TProps = InferProps<typeof basePropTypes> &
InferProps<typeof wrapperPropTypes>

export type TSingleComboboxProps = InferProps<typeof basePropTypes>

export type TMultipleComboboxProps = InferProps<typeof basePropTypes>
