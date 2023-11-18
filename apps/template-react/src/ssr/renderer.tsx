/* eslint-disable no-console */

/* eslint-disable react/jsx-filename-extension */
// import path from 'path'
import * as React from 'react'
import ReactDOMServer from 'react-dom/server'
// import ssrPrepass from '@pareto-engineering/react-ssr-prepass'
import { ChunkExtractor } from '@loadable/server'

import getEnvironment from '@aztlan/react-helpers/relay/server'
import Base from './Base.tsx'
import template from '../assets/html/index.html'
import loadMessages from '../locales/loadMessages'

/*
import styleNames from '@pareto-engineering/bem'
console.log('The two following should return if SSR is \
properly configured with CSS Modules', styleNames, styleNames.base)
*/

import stats from '../../public/loadable-stats.json'

const extractor = new ChunkExtractor({ stats })

export default async (req, res) => {
  const routerContext = {}
  const helmetContext = {}
  const relayEnvironment = getEnvironment(process.env.GRAPHQL_ENDPOINT)
  const messages = await loadMessages('en')
  console.log(req.headers['accept-language'])
  console.log(messages)

  const jsx = extractor.collectChunks(
    <Base
      environment={relayEnvironment}
      location={req.originalUrl || req.url}
      routerContext={routerContext}
      helmetContext={helmetContext}
      locale="es"
      messages={messages}
    />,
  )

  // await ssrPrepass(jsx)

  const html = ReactDOMServer.renderToString(jsx)

  const queryRecords = relayEnvironment
    .getStore()
    .getSource()
    .toJSON()

  /*
  console.log(`${req.method} ${req.originalUrl || req.url}`)
  console.log(
    JSON.stringify({
      routerContext,
      queryRecords,
    }, null, 2),
  )

  // You can now collect your script tags
  // You can also collect your "preload/prefetch" links
  // And you can even collect your style tags (if you use "mini-css-extract-plugin")

  */

  const { helmet } = helmetContext

  const scriptTags = extractor.getScriptTags() // or extractor.getScriptElements();
  // console.log('SCRIPT', extractor.getScriptTags())

  const linkTags = extractor.getLinkTags() // or extractor.getLinkElements();
  // console.log('LINK', extractor.getLinkTags())

  const styleTags = extractor.getStyleTags() // or extractor.getStyleElements();
  // console.log('STYLE', extractor.getStyleTags())

  return res.send(
    template
      .replace('<div id="main"></div>', `<div id="main">${html}</div>`)
      .replace(
        '</body>',
        `${`${scriptTags}<script> window.__RELAY_PAYLOADS__ = ${JSON.stringify(
          queryRecords,
        )}; </script>`}</body>`,
      )
      .replace(
        '<title></title>',
        linkTags + styleTags + helmet.title.toString() + helmet.meta.toString(),
      )
      .replace(/(\r\n|\n|\r)/gm, '') // Minification
      .replace(/\s\s+/g, ''), // Minification
  )
}
