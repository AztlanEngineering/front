import * as React from 'react'
import {
  createRoot, hydrateRoot,
} from 'react-dom/client'
import { ApplicationProvider } from '@aztlan/ui'
import { loadableReady } from '@loadable/component'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { IntlProvider } from 'react-intl'
import { RelayEnvironmentProvider } from 'react-relay'
import { useLocale } from '@aztlan/react-hooks'
import { TokenStateManager } from '@aztlan/react-relay'
import Application from './Application.js'
import loadMessages from './locales/loadMessages.js'
import config from './config.js'
import relayEnvironment from './environment.js'
import routes from './modules/routes.js'

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
            <ApplicationProvider
              value={{
                locale,
                ...useLocaleProps,
              }}
              maintenance={config.maintenance}
              routes={routes}
            >
              <Application />
            </ApplicationProvider>
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