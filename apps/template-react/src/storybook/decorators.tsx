import * as React from 'react'
import {
  useLocale,
} from '@aztlan/react-helpers'
import {
  IntlProvider,
} from 'react-intl'
import {
  AppContextProvider,
} from '@aztlan/design-system'

export const app = (StoryFn) => (
  <AppContextProvider>
    <StoryFn />
  </AppContextProvider>
)

function loadLocaleData(locale: string) {
  switch (locale) {
    case 'es':
      return import('../locales/es.json')
    default:
      return import('../locales/en.json')
  }
}

export const intlApp = (StoryFn) => {
  const {
    locale, messages, ...useLocaleProps
  } = useLocale(
    'es',
    loadLocaleData,
  )
  return (
    <IntlProvider locale={locale} messages={messages}>
      <AppContextProvider
        value={{
          locale,
          ...useLocaleProps,
        }}
      >
        <StoryFn />
      </AppContextProvider>
    </IntlProvider>
  )
}
