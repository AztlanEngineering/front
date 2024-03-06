import * as React from 'react'
import { Suspense } from 'react'
import { useLocale } from '@aztlan/react-hooks'
import { IntlProvider } from 'react-intl'
import { RelayEnvironmentProvider } from 'react-relay'
// @ts-ignore
import environment from '@aztlan/storybook-addon-relay/src/decorators/environment'
import {
  useForm, FormProvider,
} from 'react-hook-form'
import {
  HashRouter,
  StaticRouter as ReactRouterStaticRouter,
  Route,
} from 'react-router-dom'

import { ApplicationProvider } from '../ui/common/index.js'
import { AuthenticationProvider } from '../ui/app.base/index.js'
import {
  MUTATION_LOGOUT, FRAGMENT_VIEWER,
} from './graphql.js'
import { QUERY_APPLICATION } from './queries.js'

function loadLocaleData(locale: string) {
  switch (locale) {
    case 'es':
      return {} // import('../locales/es.json')
    default:
      return {} // import('../locales/en.json')
  }
}

function Application(
  StoryFn, params = {},
) {
  return React.createElement(
    ApplicationProvider,
    {
      ...params,
      QUERY_APPLICATION,
    },
    StoryFn(),
  )
}

const application = (params) => (StoryFn) => Application(
  StoryFn, params,
)

function Authentication(
  StoryFn, params = {},
) {
  return React.createElement(
    AuthenticationProvider,
    // @ts-ignore
    params,
    StoryFn(),
  )
}

const authentication = (params) => (StoryFn) => Authentication(
  StoryFn, params,
)

function BaseForm(
  StoryFn, params,
) {
  const methods = useForm({
    mode         :'onChange',
    defaultValues:params.defaultValues,
  })
  const onSubmit = (data) => console.log(
    '[FORM SUBMIT]', data,
  )

  return React.createElement(
    FormProvider,
    // @ts-ignore
    methods,
    React.createElement(
      'form',
      {
        onSubmit:methods.handleSubmit(onSubmit),
        // className:'grid',
      },
      [
        StoryFn(),
        React.createElement('br'),
        React.createElement(
          'input', {
            type :'submit',
            value:'Print in console',
          },
        ),
      ],
    ),
  )
}

const Form = (
  StoryFn, params = {},
) => BaseForm(
  StoryFn, params,
)

const form = (params) => (StoryFn) => Form(
  StoryFn, params,
)

function Grid(
  StoryFn, params = {},
) {
  return React.createElement(
    'div',
    {
      className:'grid container',
      ...params,
    },
    StoryFn(),
  )
}

const grid = (params) => (StoryFn) => Grid(
  StoryFn, params,
)

function Intl(
  StoryFn, params = {},
) {
  const {
    locale, messages, ...useLocaleProps
  } = useLocale(
    'es',
    loadLocaleData,
  )
  return React.createElement(
    IntlProvider,
    {
      locale,
      messages,
    },
    StoryFn(),
  )
}

const intl = (params) => (StoryFn) => Intl(
  StoryFn, params,
)

function IntlApp(
  StoryFn, params = {},
) {
  const {
    locale, messages, ...useLocaleProps
  } = useLocale(
    'es',
    loadLocaleData,
  )
  return React.createElement(
    IntlProvider,
    {
      locale,
      messages,
    },
    React.createElement(
      ApplicationProvider,
      {
        QUERY_APPLICATION,
        value:{
          locale,
          ...useLocaleProps,
        },
      },
      StoryFn(),
    ),
  )
}

const intlApp = (params) => (StoryFn) => IntlApp(
  StoryFn, params,
)

function Relay(
  StoryFn, params = {},
) {
  return React.createElement(
    RelayEnvironmentProvider,
    // @ts-ignore
    { environment },
    StoryFn(),
  )
}

const relay = (params) => (StoryFn) => Relay(
  StoryFn, params,
)

function Router(
  StoryFn, params = {},
) {
  return React.createElement(
    HashRouter, params, StoryFn(),
  )
}

const router = (params) => (StoryFn) => Router(
  StoryFn, params,
)

function StaticRouter(
  StoryFn,
  params: Partial<{ location: string; path: string }> = {},
) {
  return React.createElement(
    ReactRouterStaticRouter, params.location, [
      React.createElement(
        Route, {
          path     :params.path || '/',
          component:StoryFn,
        },
      ),
    ],
  )
}

const staticRouter = (params) => (StoryFn) => StaticRouter(
  StoryFn, params,
)

const all = {
  components:{
    Application,
    Authentication,
    Form,
    Grid,
    Intl,
    IntlApp,
    Relay,
    Router,
    StaticRouter,
    Suspense,
    // Template,
  },
  getters:{
    application,
    authentication,
    form,
    grid,
    intl,
    intlApp,
    relay,
    router,
    staticRouter,
    // template,
  },
}

export default all
