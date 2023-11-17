import * as React from 'react'
import { Button, useApp, AppContextProvider } from '@aztlan/design-system'
import { useTheme } from '@aztlan/react-helpers'
import { IntlProvider } from 'react-intl'
import { useEffect, useState, useCallback } from 'react'
import { QueryTester } from './ui'
import routes from './modules/routes'
import { SwitchRoutes } from './modules/common/ui'
import Status404Page from './modules/common/pages/Status404.tsx'

// @ts-ignore
import es from './locales/es.json'

// @ts-ignore
//
function loadLocaleData(locale: string) {
  switch (locale) {
    case 'es':
      return import('./locales/es.json')
    default:
      return import('./locales/en.json')
  }
}
const d = { es }

function App() {
  const { theme } = useApp()
  return (
    <main className={`${theme || ''} background far`}>
      <SwitchRoutes items={routes} NotFoundPage={Status404Page} />
    </main>
  )
}

export default App
