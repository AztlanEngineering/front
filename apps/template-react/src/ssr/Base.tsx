/* eslint-disable react/prop-types -- singleton */
import * as React from 'react'
import { RelayEnvironmentProvider } from 'react-relay'
import { StaticRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { useLocale } from '@aztlan/react-hooks'
import { AppContextProvider } from '@aztlan/ui'
import { IntlProvider } from 'react-intl'
import App from '../App.js'
import loadMessages from '../locales/loadMessages.js'
import config from '../config.js'

export default function ({
  environment,
  routerContext,
  location,
  helmetContext,
  locale: requestLocale,
  hostname,
  // messages:allMessages,
}) {
  const initialLocale = [
    'en',
    'es',
  ].includes(requestLocale)
    ? requestLocale
    : 'en'
  const {
    locale, messages, ...useLocaleProps
  } = useLocale(
    initialLocale,
    loadMessages,
  )
  return (
    <HelmetProvider context={helmetContext}>
      <RelayEnvironmentProvider environment={environment}>
        <StaticRouter
          location={location}
          context={routerContext}
        >
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
                ssrHostname={hostname}
              >
                <App />
              </AppContextProvider>
            </HelmetProvider>
          </IntlProvider>
        </StaticRouter>
      </RelayEnvironmentProvider>
      ,
    </HelmetProvider>
  )
}
