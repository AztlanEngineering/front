import * as React from 'react'
import {
  Button,
  useApp,
  AppContextProvider,
  AuthContextProvider,
  SwitchRoutes,
} from '@aztlan/ui'
import { useTheme } from '@aztlan/react-helpers'
import { IntlProvider } from 'react-intl'
import { useEffect, useState, useCallback } from 'react'
import routes from './modules/routes'
import Status404Page from './modules/common/pages/Status404.tsx'
import Base from './modules/common/templates/Base'

function Wireframe({
  wireframeTitle,
  // groups,
  // testFunction,
  // wireframeTitle,
  // ...routeProps,
}) {
  return (
    <Base title={wireframeTitle || 'Loading'} wireframe>
      Loading user
    </Base>
  )
}

function App() {
  const { theme } = useApp()
  console.log('[APP] : Render')
  return (
    <AuthContextProvider>
      <main className={`${theme || ''} background far`}>
        <SwitchRoutes
          items={routes}
          NotFoundPage={Status404Page}
          Wireframe={Wireframe}
        />
      </main>
    </AuthContextProvider>
  )
}

export default App
// <React.Suspense fallback={<h1>Loading</h1>}>
//  </React.Suspense>
