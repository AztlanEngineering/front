import { JSXRenderer } from '@aztlan/react-ssr'
import {
  Environment, RecordSource, Store, Network,
} from 'relay-runtime'
import Base from './Base.tsx'
// @ts-ignore
import template from '../assets/html/index.html'
import loadMessages from '../locales/loadMessages.ts'
// @ts-ignore
import stats from '../../public/loadable-stats.json'

// Alternative way to do SSR
// const collector = []
const store = new Store(new RecordSource())

// { collector }

const getEnvironment = (url) => new Environment({
  network:Network.create((
    params, variables,
  ) => {
    const request = fetch(
      url, {
        method :'POST',
        headers:{ 'Content-Type': 'application/json' },
        body   :JSON.stringify({
          query:params.text,
          variables,
        }),
      },
    ).then((response) => response.json())
    // collector.push(request)
    return request
  }),
  store,
})

/*
import styleNames from '@aztlan/bem'
console.log('The two following should return if SSR is \
properly configured with CSS Modules', styleNames, styleNames.base)
      console.log(req.headers['accept-language'])
*/

const renderer = new JSXRenderer(
  Base, template, stats, {
    getEnvironment,
    defaultLocale     :'en',
    loadMessages,
    graphqlEndpointUrl:process.env.GRAPHQL_ENDPOINT,
  },
)
// console.log(r)
export default renderer.render
