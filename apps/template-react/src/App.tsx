import * as React from 'react'
import { Button, useApp, AppContextProvider } from '@aztlan/design-system'
import { useTheme } from '@aztlan/react-helpers'
import { IntlProvider } from 'react-intl'
import { useEffect, useState, useCallback } from 'react'
import routes from './modules/routes'
import { AuthContextProvider, SwitchRoutes } from './modules/common/ui'
import Status404Page from './modules/common/pages/Status404.tsx'

function App() {
  const { theme } = useApp()
  console.log('[APP] : Render')
  return (
    <AuthContextProvider>
      <main className={`${theme || ''} background far`}>
        <SwitchRoutes items={routes} NotFoundPage={Status404Page} />
      </main>
    </AuthContextProvider>
  )
}

export default App
// <React.Suspense fallback={<h1>Loading</h1>}>
//  </React.Suspense>
