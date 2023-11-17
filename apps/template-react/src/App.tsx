import * as React from 'react'
import { Button, useApp, AppContextProvider } from '@aztlan/design-system'
import { useTheme } from '@aztlan/react-helpers'
import { IntlProvider } from 'react-intl'
import { useEffect, useState, useCallback } from 'react'
import { QueryTester } from './ui'
import routes from './modules/routes'
import { SwitchRoutes } from './modules/common/ui'
import Status404Page from './modules/common/pages/Status404.tsx'

// @ts-ignore
import es from './locales/es.json'

// @ts-ignore
//
function loadLocaleData(locale: string) {
  switch (locale) {
    case 'es':
      return import('./locales/es.json')
    default:
      return import('./locales/en.json')
  }
}
const d = { es }

function App() {
  const { theme } = useApp()
  const [locale, setLocale] = useState('es')
  const isLocale = useCallback((queryLocale) => locale === queryLocale, [locale])
  const [messages, setMessages] = useState({})
  const setMessagesForLocale = useCallback(
    (targetLocale, messages) => setMessages((state) => ({ [targetLocale]: messages, ...state })),
    [setMessages],
  )

  useEffect(() => {
    async function loadLocale() {
      const m = await loadLocaleData()
      console.log(locale, m)
      setMessagesForLocale(locale, m.default)
    }

    loadLocale()
  }, [locale])
  console.log('MMM', messages)
  return (
    <IntlProvider locale={locale} messages={d} key={locale}>
      <AppContextProvider
        value={{
          locale,
          setLocale,
          isLocale,
        }}
      >
        <main className={`${theme || ''} background far`}>
          <SwitchRoutes items={routes} NotFoundPage={Status404Page} />
        </main>
      </AppContextProvider>
    </IntlProvider>
  )
}
/*
    <>
      <Button>Test</Button>
      <QueryTester />
      <h1>Hey there welcome</h1>
    </>
      */

export default App
