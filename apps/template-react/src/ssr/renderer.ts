import getEnvironment from '@aztlan/react-helpers/relay/server'
import { JSXRenderer } from '@aztlan/react-ssr'
import Base from './Base.tsx'
// @ts-ignore
import template from '../assets/html/index.html'
import loadMessages from '../locales/loadMessages.ts'
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
    getEnvironment,
    defaultLocale:'en',
    loadMessages,
  },
)
// console.log(r)
export default renderer.render
