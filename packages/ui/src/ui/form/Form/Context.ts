import * as React from 'react'
import { InferProps } from 'prop-types'
import { UseSectionsReturnType } from '@aztlan/react-hooks'

import * as formPropTypes from '../Field/propTypes.js'
import * as FormPropTypes from './types.js'

/**
 * Extends the UseSectionsReturnType with additional form-specific context.
 */
export type FormContextType = UseSectionsReturnType &
InferProps<typeof FormPropTypes.typeShared> & {
  sharedFieldProps?:InferProps<typeof formPropTypes.wrapperShared>;
}

/**
 * The context for providing form-wide state and functions.
 * Initializes with an empty object but should be provided with a valid initial state when used.
 */
export default React.createContext<FormContextType>({} as FormContextType)
