import { SitemapRenderer } from '@aztlan/react-ssr'
import getters from '../modules/sitemap.js'

const config = { CANONICAL: 'https://domain.com' }

const renderer = new SitemapRenderer(
  getters, config,
)

export default renderer.render
