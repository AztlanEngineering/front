import * as React from 'react'

import type { ContextValue } from './types.js'
/*
 import * as formPropTypes from '../Field/propTypes.js'
import * as FormPropTypes from './types.js'

export type FormContextType = {
  sectionsState  :NavigableSectionsReturn[0];
  sectionsMethods:NavigableSectionsReturn[1];
} & InferProps<typeof FormPropTypes.typeShared> & {
  sharedFieldProps?:InferProps<typeof formPropTypes.wrapperShared>;
}
*/

export default React.createContext<ContextValue>({} as ContextValue)
