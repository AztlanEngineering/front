import * as React from 'react'
import {
  useLocale, useTheme,
} from '@aztlan/react-hooks'
import type { RoutesConfig } from './types.js'

type ContextType = ReturnType<typeof useLocale> &
ReturnType<typeof useTheme> & {
  routes:RoutesConfig;
}

export default React.createContext<Partial<ContextType>>({})
