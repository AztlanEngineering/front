import * as React from 'react'

export interface ContextType {
  currentOrganizationUrl?:string;
  basePath?              :string;
  baseOrganizationPath?  :string;
  id                     :string;
  uuid                   :string;
  FRAGMENT               :any;
  data                   :any;
}

export default React.createContext<Partial<ContextType>>({})
