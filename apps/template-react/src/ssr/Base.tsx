import * as React from 'react'
import { RelayEnvironmentProvider } from 'react-relay/hooks'
import { StaticRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { useLocale } from '@aztlan/react-helpers'
import { AppContextProvider } from '@aztlan/ui'
import { IntlProvider } from 'react-intl'
import App from '../App'
import loadMessages from '../locales/loadMessages'
import config from '../config.ts'

export default function ({
  environment,
  routerContext,
  location,
  helmetContext,
  locale,
  messages,
}) {
  const {
    locale: locale2, messages: messages2, ...useLocaleProps
  } = useLocale(
    'es',
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
