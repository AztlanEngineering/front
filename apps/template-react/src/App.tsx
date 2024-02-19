import * as React from 'react'
import {
  useApp, AuthenticationProvider, SwitchRoutes,
} from '@aztlan/ui'
import routes from './modules/routes.js'
import Status404Page from './modules/common/pages/Status404.js'
import Base from './modules/common/templates/Base.js'

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
    <AuthenticationProvider>
      <main className={`${theme || ''} background far`}>
        <SwitchRoutes
          items={routes}
          NotFoundPage={Status404Page}
          Wireframe={Wireframe}
        />
      </main>
    </AuthenticationProvider>
  )
}

export default App
