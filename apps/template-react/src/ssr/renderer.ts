import getServerEnvironment from '@aztlan/react-relay/server'
import { JSXRenderer } from '@aztlan/react-ssr'
import Base from './Base.js'
// @ts-ignore
import template from '../assets/html/index.html'
import loadMessages from '../locales/loadMessages.js'
// @ts-ignore
import stats from '../../public/loadable-stats.json'

/*
import styleNames from '@aztlan/bem'
console.log('The two following should return if SSR is \
properly configured with CSS Modules', styleNames, styleNames.base)
      console.log(req.headers['accept-language'])
*/

const renderer = new JSXRenderer(
  Base, template, stats, {
    getEnvironment    :getServerEnvironment,
    defaultLocale     :'en',
    loadMessages,
    graphqlEndpointUrl:process.env.GRAPHQL_ENDPOINT,
  },
)
// console.log(r)
export default renderer.render
