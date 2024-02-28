import * as React from 'react'
import {
  useLocale, useTheme,
} from '@aztlan/react-hooks'
import type { RoutesConfig } from './types.js'

type ContextType = ReturnType<typeof useLocale> &
ReturnType<typeof useTheme> & {
  // routes                    :RoutesConfig;
  routes                    :any;
  hostname?                 :string;
  subdomain?                :string;
  extraComponents           :any, // Record<string, React.ElementType>;
  applicationQueryReference?:any;
  QUERY_APPLICATION         :any;
  matchRoute                :(path: string) => any;
}

export default React.createContext<Partial<ContextType>>({})
