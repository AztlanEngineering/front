import * as React from 'react'
import { useLocale } from '@aztlan/react-helpers'
import { IntlProvider } from 'react-intl'
import { RelayEnvironmentProvider } from 'react-relay/hooks'
import environment from '@aztlan/storybook-addon-relay/src/decorators/environment'
import { Formik } from 'formik'
import { AppContextProvider } from '../ui/common/index.ts'
import { AuthContextProvider } from '../ui/app.base/index.ts'
import Debugger from '../ui/form/Debugger.ts'

export const app = (StoryFn) => (
  <AppContextProvider>
    <StoryFn />
  </AppContextProvider>
)

function loadLocaleData(locale: string) {
  switch (locale) {
    case 'es':
      return {} // import('../locales/es.json')
    default:
      return {} // import('../locales/en.json')
  }
}

export const relay = (StoryFn) => (
  <RelayEnvironmentProvider environment={environment}>
    {StoryFn()}
  </RelayEnvironmentProvider>
)

export const intlApp = (StoryFn) => {
  const {
    locale, messages, ...useLocaleProps
  } = useLocale(
    'es',
    loadLocaleData,
  )
  return (
    <IntlProvider
      locale={locale}
      messages={messages}
    >
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

export const auth = (StoryFn) => (
  <AuthContextProvider>
    <StoryFn />
  </AuthContextProvider>
)

export const grid = (StoryFn) => <div className="grid">{StoryFn()}</div>

export const form = (StoryFn) => (
  <Formik
    initialValues={
      {
        // email: 'test',
      }
    }
  >
    <>
      {StoryFn()}
      <Debugger />
    </>
  </Formik>
)
