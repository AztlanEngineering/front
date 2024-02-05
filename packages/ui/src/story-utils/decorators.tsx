import * as React from 'react'
import { useLocale } from '@aztlan/react-hooks'
import { IntlProvider } from 'react-intl'
import { RelayEnvironmentProvider } from 'react-relay'
// @ts-ignore
import environment from '@aztlan/storybook-addon-relay/src/decorators/environment'
import {
  useForm, FormProvider,
} from 'react-hook-form'
import { HashRouter as Router } from 'react-router-dom'
import { AppContextProvider } from '../ui/common/index.js'
import { AuthContextProvider } from '../ui/app.base/index.js'

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

export const router = (StoryFn) => (
  <Router>
    <StoryFn />
  </Router>
)

export const grid = (StoryFn) => <div className="grid">{StoryFn()}</div>

const baseFormDecorator = (
  StoryFn, defaultValues = { color: 'red' },
) => {
  const methods = useForm({
    mode:'onChange',
    defaultValues,
  })
  const onSubmit = (data) => console.log(
    '[FORM SUBMIT]', data,
  )

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {StoryFn()}
        <br />
        <input
          type="submit"
          value="Print in console"
        />
      </form>
    </FormProvider>
  )
}

export const form = (StoryFn) => baseFormDecorator(StoryFn)

export const getFormDecorator = (defaultValues) => (StoryFn) => baseFormDecorator(
  StoryFn, defaultValues,
)
