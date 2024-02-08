import * as React from 'react'
import { InferProps } from 'prop-types'
import type { NavigableSectionsReturn } from './hooks/useNavigableSections.ts'

import * as formPropTypes from '../Field/propTypes.js'
import * as FormPropTypes from './types.js'

export type FormContextType = {
  sectionsState  :NavigableSectionsReturn[0];
  sectionsMethods:NavigableSectionsReturn[1];
} & InferProps<typeof FormPropTypes.typeShared> & {
  sharedFieldProps?:InferProps<typeof formPropTypes.wrapperShared>;
}

export default React.createContext<FormContextType>({} as FormContextType)
