import * as React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { AppContextProvider } from '@aztlan/design-system'
// import { loadableReady } from "@loadable/component";
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { IntlProvider } from 'react-intl'
import { useEffect, useState, useCallback } from 'react'
import { RelayEnvironmentProvider } from 'react-relay/hooks'
import { client } from '@aztlan/react-helpers/src/relay'
import { useLocale } from '@aztlan/react-helpers'
import App from './App'

// import "./main.scss";
import '@aztlan/base-styles'

const relayEnvironment = client.getEnvironment(process.env.GRAPHQL_ENDPOINT)

const container = document.getElementById('main')

/*
const jsx = (
    <HelmetProvider>
      <UTMTracker initialState={{}}>
        <App environment={environment} />
      </UTMTracker>
    </HelmetProvider>
); */

function loadLocaleData(locale: string) {
  switch (locale) {
    case 'es':
      return import('./locales/es.json')
    default:
      return import('./locales/en.json')
  }
}

function Main() {
  const { locale, messages, ...useLocaleProps } = useLocale(
    'es',
    loadLocaleData,
  )
  console.log(locale, messages)

  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <BrowserRouter>
        <IntlProvider locale={locale} messages={messages}>
          <AppContextProvider
            value={{
              locale,
              ...useLocaleProps,
            }}
          >
            <App />
          </AppContextProvider>
        </IntlProvider>
      </BrowserRouter>
    </RelayEnvironmentProvider>
  )
}

// loadableReady(() => {
// });
if (container.hasChildNodes()) {
  hydrateRoot(container, jsx)
} else {
  const root = createRoot(container)
  root.render(<Main />)
}
