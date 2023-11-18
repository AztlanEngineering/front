import * as React from 'react'
// import ssrPrepass from '@pareto-engineering/react-ssr-prepass'

import getEnvironment from '@aztlan/react-helpers/relay/server'
import { Renderer } from '@aztlan/react-helpers/ssr'
import Base from './Base.tsx'
import template from '../assets/html/index.html'
import loadMessages from '../locales/loadMessages'
import stats from '../../public/loadable-stats.json'

/*
import styleNames from '@aztlan/bem'
console.log('The two following should return if SSR is \
properly configured with CSS Modules', styleNames, styleNames.base)
*/

const r = new Renderer(Base, template, stats, {
  getEnvironment,
  defaultLocale: 'en',
  loadMessages,
})
// console.log(r)
export default r.render
