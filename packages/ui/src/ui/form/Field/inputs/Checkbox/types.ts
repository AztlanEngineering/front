import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import * as formPropTypes from '../../propTypes.js'

export const propTypes = {
  ...formPropTypes.baseShared,
  ...formPropTypes.inputShared,
}

export type TProps = InferProps<typeof propTypes>
