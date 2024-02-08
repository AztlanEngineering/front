// import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import {
  footerShared, prevShared,
} from '../../types.js'

export const ComponentPropTypes = {
  ...footerShared,
  ...prevShared,
}

export type ComponentProps = InferProps<typeof ComponentPropTypes>
