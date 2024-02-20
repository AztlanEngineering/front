import * as React from 'react'

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
export type ItemType = {
  label         :string;
  url           :string;
  disabled      :boolean;
  items         :ItemType[];
  footerContent?:React.ReactElement;
}

export type ContextValue = {
  previous  :React.ReactElement;
  next      :React.ReactElement;
  menuLabel?:string;
  items     :ItemType[];
  fixed     :boolean;
  // hideNextButton       :boolean;
  // hidePreviousButton   :boolean;
}

export default React.createContext<ContextValue>({} as ContextValue)
