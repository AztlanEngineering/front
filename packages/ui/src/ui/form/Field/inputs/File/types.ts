import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import * as formPropTypes from '../../propTypes.js'

export const propTypes = {
  ...formPropTypes.baseShared,
  ...formPropTypes.inputShared,

  /** The types of files that the input should accepts. */
  acceptContentTypes:PropTypes.arrayOf(PropTypes.string),

  /** The size limit of the file. */
  sizeLimit:PropTypes.number,
}

export type TProps = InferProps<typeof propTypes>
