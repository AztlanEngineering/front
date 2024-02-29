import * as React from 'react'
import {
  createRoot, hydrateRoot,
} from 'react-dom/client'
import { loadableReady } from '@loadable/component'
import { useLocale } from '@aztlan/react-hooks'
import { TokenStateManager } from '@aztlan/react-relay'
import loadMessages from './locales/loadMessages.js'
import relayEnvironment from './environment.js'
import Application from './Application.js'

// import "./main.scss";
import '@aztlan/base-styles'
import './local.scss'

const container = document.getElementById('main')

// eslint-disable-next-line no-underscore-dangle
const defaultLocale = window.__LOCALE__ || 'es'

function Main() {
  const {
    locale, messages, ...localeProps
  } = useLocale(
    defaultLocale,
    loadMessages,
  )
  TokenStateManager.initialize()

  // console.log('[CLI] : Render')

  return React.createElement(
    Application, {
      locale,
      messages,
      localeProps,
      relayEnvironment,
    },
  )
}

loadableReady(() => {
  if (container.hasChildNodes()) {
    hydrateRoot(
      container, React.createElement(Main),
    )
  } else {
    const root = createRoot(container)
    root.render(React.createElement(Main))
  }
})
