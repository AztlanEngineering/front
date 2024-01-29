import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import * as formPropTypes from '../../propTypes.js'

export const propTypes = {
  ...formPropTypes.baseShared,
  ...formPropTypes.inputShared,

  /** The number of rows for the input */
  rows:PropTypes.number,
}

export type TProps = InferProps<typeof propTypes>
