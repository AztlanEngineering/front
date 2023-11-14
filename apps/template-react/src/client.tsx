import * as React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
// import { loadableReady } from "@loadable/component";
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
// import environment from "./relay/environment.client";

// import "./main.scss";
import '@aztlan/base-styles'

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
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

// loadableReady(() => {
// });
if (container.hasChildNodes()) {
  hydrateRoot(container, jsx)
} else {
  const root = createRoot(container)
  root.render(jsx)
}
