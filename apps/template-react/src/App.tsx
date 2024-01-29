import * as React from 'react'
import {
  useApp, AuthContextProvider, SwitchRoutes,
} from '@aztlan/ui'
import routes from './modules/routes.ts'
import Status404Page from './modules/common/pages/Status404.tsx'
import Base from './modules/common/templates/Base.tsx'

function Wireframe({
  wireframeTitle,
  // groups,
  // testFunction,
  // wireframeTitle,
  // ...routeProps,
}) {
  return (
    <Base
      title={wireframeTitle || 'Loading'}
      wireframe
    >
      Loading user
    </Base>
  )
}

function App() {
  const { theme } = useApp()
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
