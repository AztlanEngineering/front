import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import * as formPropTypes from '../propTypes.js'

export const WrapperPropTypes = {
  ...formPropTypes.Wrapper,

  /** The front Component for the field */
  Component:PropTypes.elementType.isRequired,
}

export const InvisibleWrapperPropTypes = WrapperPropTypes

export type TWrapperProps = InferProps<typeof WrapperPropTypes>

export type TInvisibleWrapperProps = InferProps<
  typeof InvisibleWrapperPropTypes
>
