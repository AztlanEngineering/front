import * as React from 'react'

export interface ContextType {
  currentBoardId?:string;
  basePath?      :string;
  baseBoardPath? :string;
  id             :string;
  uuid           :string;
  FRAGMENT       :any;
  data           :any;
}

export default React.createContext<Partial<ContextType>>({})
