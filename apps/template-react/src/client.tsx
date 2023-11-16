import * as React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
// import { loadableReady } from "@loadable/component";
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { RelayEnvironmentProvider } from 'react-relay/hooks'
import { client } from '@aztlan/react-helpers/src/relay'
import { AppContextProvider } from '@aztlan/design-system'
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
  </BrowserRouter>
); */
const jsx = (
  <RelayEnvironmentProvider environment={relayEnvironment}>
    <BrowserRouter>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </BrowserRouter>
  </RelayEnvironmentProvider>
)

// loadableReady(() => {
// });
if (container.hasChildNodes()) {
  hydrateRoot(container, jsx)
} else {
  const root = createRoot(container)
  root.render(jsx)
}
