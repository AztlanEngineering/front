import * as React from 'react'
import { Button, useApp, AppContextProvider } from '@aztlan/design-system'
import { useTheme } from '@aztlan/react-helpers'
import { IntlProvider } from 'react-intl'
import { useEffect, useState, useCallback } from 'react'
import routes from './modules/routes'
import { SwitchRoutes } from './modules/common/ui'
import Status404Page from './modules/common/pages/Status404.tsx'
import { AuthContextProvider } from './modules/base.profile/ui'

const QUERY_VIEWER = graphql`
  query AppViewerQuery {
    viewer {
      ...ViewerProfileFragment
      ...useViewerFragment
    }
  }
`
const MUTATION_LOGOUT = graphql`
  mutation AppViewerLogoutMutation {
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

function App() {
  const { theme } = useApp()
  console.log('[APP] : Render')
  return (
    <AuthContextProvider
      QUERY_VIEWER={QUERY_VIEWER}
      MUTATION_LOGOUT={MUTATION_LOGOUT}
    >
      <main className={`${theme || ''} background far`}>
        <SwitchRoutes items={routes} NotFoundPage={Status404Page} />
      </main>
    </AuthContextProvider>
  )
}

export default App
// <React.Suspense fallback={<h1>Loading</h1>}>
//  </React.Suspense>
