import * as React from 'react'
import { Button, useApp, AppContextProvider } from '@aztlan/design-system'
import { useTheme } from '@aztlan/react-helpers'
import { IntlProvider } from 'react-intl'
import { useEffect, useState, useCallback } from 'react'
import routes from './modules/routes'
import { SwitchRoutes } from './modules/common/ui'
import Status404Page from './modules/common/pages/Status404.tsx'
import { ErrorBoundary } from './modules/base.profile/ui'

function loadLocaleData(locale: string) {
  switch (locale) {
    case 'es':
      return import('./locales/es.json')
    default:
      return import('./locales/en.json')
  }
}

function App() {
  const { theme } = useApp()
  return (
    <React.Suspense fallback={<h1>Loading</h1>}>
      <main className={`${theme || ''} background far`}>
        <SwitchRoutes items={routes} NotFoundPage={Status404Page} />
      </main>
    </React.Suspense>
  )
}

export default App
