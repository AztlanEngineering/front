import * as React from 'react'
import {
  useLocale, useTheme,
} from '@aztlan/react-hooks'

type ContextType = ReturnType<typeof useLocale> & ReturnType<typeof useTheme>

export default React.createContext<Partial<ContextType>>({})
