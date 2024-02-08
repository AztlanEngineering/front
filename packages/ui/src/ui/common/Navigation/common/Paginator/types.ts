import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import {
  htmlShared,
  prevShared,
  nextShared,
  desktopOnlyShared,
  asShared,
} from '../../types.js'

export const ComponentPropTypes = {
  ...htmlShared,
  ...prevShared,
  ...nextShared,
  ...desktopOnlyShared,
  ...asShared,

  /* The column span of the buttons */
  span:PropTypes.number,

  /* The desktop column span of the buttons */
  spanDesktop:PropTypes.number,
}

export type ComponentProps = InferProps<typeof ComponentPropTypes>
