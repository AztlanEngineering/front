import * as React from 'react'
import {
  createRoot, hydrateRoot,
} from 'react-dom/client'
import {
  AppContextProvider,
} from '@aztlan/ui'
import {
  loadableReady,
} from '@loadable/component'
import {
  BrowserRouter,
} from 'react-router-dom'
import {
  HelmetProvider,
} from 'react-helmet-async'
import {
  IntlProvider,
} from 'react-intl'
import {
  useEffect, useState, useCallback,
} from 'react'
import {
  RelayEnvironmentProvider,
} from 'react-relay/hooks'
import getEnvironment from '@aztlan/react-helpers/relay/client'
import {
  useLocale,
} from '@aztlan/react-helpers'
import {
  TokenStateManager,
} from '@aztlan/react-helpers/relay/auth'
import App from './App'
import loadMessages from './locales/loadMessages'
import ErrorBoundary from './modules/common/ui/ErrorBoundary'

// import "./main.scss";
import '@aztlan/base-styles'

const relayEnvironment = getEnvironment(process.env.GRAPHQL_ENDPOINT)

const container = document.getElementById('main')

const defaultLocale = window.__LOCALE__ || 'es'

function Main() {
  const {
    locale, messages, ...useLocaleProps
  } = useLocale(
    defaultLocale,
    loadMessages,
  )
  TokenStateManager.initialize()

  console.log('[CLI] : Render')

  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <BrowserRouter>
        <IntlProvider locale={locale} messages={messages}>
          <HelmetProvider>
            <AppContextProvider
              value={{
                locale,
                ...useLocaleProps,
              }}
            >
              <App />
            </AppContextProvider>
          </HelmetProvider>
        </IntlProvider>
      </BrowserRouter>
    </RelayEnvironmentProvider>
  )
}

loadableReady(() => {
  if (container.hasChildNodes()) {
    hydrateRoot(
      container, <Main />,
    )
  } else {
    const root = createRoot(container)
    root.render(<Main />)
  }
})
