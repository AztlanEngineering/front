// import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import { footerShared } from '../../types.js'

export const ComponentPropTypes = footerShared

export type ComponentProps = InferProps<typeof ComponentPropTypes>
