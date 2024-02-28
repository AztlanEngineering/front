import * as React from 'react'
import {
  useApplicationContext,
  AuthenticationProvider,
  SwitchRoutes,
} from '@aztlan/ui'
import { graphql } from 'react-relay'
import routes from './modules/routes.js'
import Status404Page from './modules/common/pages/Status404.js'
import Base from './modules/common/templates/Base.js'
import { FRAGMENT_VIEWER } from './ApplicationQuery.js'

export const MUTATION_LOGOUT = graphql`
  mutation ApplicationLogoutMutation {
    deleteTokenCookie(input: { clientMutationId: "logout-delete-access" }) {
      deleted
      clientMutationId
    }
    deleteRefreshTokenCookie(
      input: { clientMutationId: "logout-delete-refresh" }
    ) {
      deleted
      clientMutationId
    }
  }
`

function App({ wireframe }) {
  const { theme } = useApplicationContext()
  return (
    <AuthenticationProvider
      MUTATION_LOGOUT={MUTATION_LOGOUT}
      FRAGMENT_VIEWER={FRAGMENT_VIEWER}
    >
      <main className={`${theme || ''} background far`}>
        <SwitchRoutes
          items={routes}
          NotFoundPage={Status404Page}
          wireframe={wireframe}
        />
      </main>
    </AuthenticationProvider>
  )
}

export default App
