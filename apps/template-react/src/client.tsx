import * as React from 'react'
import {
  createRoot, hydrateRoot,
} from 'react-dom/client'
import { AppContextProvider } from '@aztlan/ui'
import { loadableReady } from '@loadable/component'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { IntlProvider } from 'react-intl'
import { RelayEnvironmentProvider } from 'react-relay/hooks'
import { useLocale } from '@aztlan/react-hooks'
import { TokenStateManager } from '@aztlan/react-helpers/relay/auth'
import App from './App.tsx'
import loadMessages from './locales/loadMessages.ts'
import config from './config.ts'
import relayEnvironment from './environment.ts'

// import "./main.scss";
import '@aztlan/base-styles'

const container = document.getElementById('main')

// eslint-disable-next-line no-underscore-dangle
const defaultLocale = window.__LOCALE__ || 'es'

function Main() {
  const {
    locale, messages, ...useLocaleProps
  } = useLocale(
    defaultLocale,
    loadMessages,
  )
  TokenStateManager.initialize()

  // console.log('[CLI] : Render')

  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <BrowserRouter>
        <IntlProvider
          locale={locale}
          messages={messages}
        >
          <HelmetProvider>
            <AppContextProvider
              value={{
                locale,
                ...useLocaleProps,
              }}
              maintenance={config.maintenance}
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
