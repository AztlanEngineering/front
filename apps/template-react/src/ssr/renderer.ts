import * as React from 'react'

import getEnvironment from '@aztlan/react-helpers/relay/server'
import Renderer from '@aztlan/react-helpers/ssr/Renderer'
import Base from './Base.tsx'
import template from '../assets/html/index.html'
import loadMessages from '../locales/loadMessages.ts'
import stats from '../../public/loadable-stats.json'

/*
import styleNames from '@aztlan/bem'
console.log('The two following should return if SSR is \
properly configured with CSS Modules', styleNames, styleNames.base)
      console.log(req.headers['accept-language'])
*/

const r = new Renderer(
  Base, template, stats, {
    getEnvironment,
    defaultLocale:'en',
    loadMessages,
  },
)
// console.log(r)
export default r.render
