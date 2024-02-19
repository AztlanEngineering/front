// import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import { barsShared } from '../../types.js'

export const ComponentPropTypes = barsShared

export type ComponentProps = InferProps<typeof ComponentPropTypes>
