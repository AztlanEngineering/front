import * as React from 'react'
import getServerEnvironment from '@aztlan/react-relay/server'
import { JSXRenderer } from '@aztlan/react-ssr'
import { useLocale } from '@aztlan/react-hooks'
import * as PropTypes from 'prop-types'
// @ts-ignore
import template from '../assets/html/index.html'
// @ts-ignore
import stats from '../../public/loadable-stats.json'

import loadMessages from '../locales/loadMessages.js'
import Application from '../Application.js'

function Main({
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
    locale, messages, ...localeProps
  } = useLocale(
    initialLocale,
    loadMessages,
  )
  return React.createElement(
    Application, {
      locale,
      localeProps,
      messages,
      relayEnvironment:environment,
      ssrHelmetContext:helmetContext,
      ssrHostname     :hostname,
      ssrLocation     :location,
      ssrRouterContext:routerContext,
    },
  )
}

Main.propTypes = {
  environment     :PropTypes.object.isRequired,
  location        :PropTypes.object.isRequired,
  routerContext   :PropTypes.object.isRequired,
  helmetContext   :PropTypes.object.isRequired,
  hostname        :PropTypes.string.isRequired,
  locale          :PropTypes.string.isRequired,
  messages        :PropTypes.object.isRequired,
  relayEnvironment:PropTypes.object.isRequired,
}

const renderer = new JSXRenderer(
  Main, template, stats, {
    getEnvironment    :getServerEnvironment,
    defaultLocale     :'en',
    loadMessages,
    graphqlEndpointUrl:process.env.GRAPHQL_ENDPOINT,
  },
)
export default renderer.render
