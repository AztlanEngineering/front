/* eslint-disable prefer-template -- for legibility */
import {
  format,
} from 'date-fns'
import getters from '../modules/sitemap'

const config = {
  CANONICAL:'https://domain.com',
}

const template = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>
`

const createMap = async () => {
  const paths = []

  getters.forEach(async (getter) => {
    const items = await getter()
    items.forEach((path) => {
      paths.push(path)
    })
  })

  return paths
}

const formatMap = (items) => items.map(({
  loc,
  lastmod,
  changefreq,
  priority,
}) => ({
  loc:loc.length
    ? new URL(
      loc, config.CANONICAL,
    ).href
    : config.CANONICAL,
  lastmod:format(
    lastmod, 'yyyy-MM-dd',
  ),
  changefreq,
  priority,
}))

export default async (
  req, res,
) => {
  const rawSitemap = await createMap()
  const sitemap = formatMap(rawSitemap)
  // console.log(sitemap)

  res.setHeader(
    'Content-Type', 'text/xml',
  )

  return res.send(template
    .replace(
      '</urlset>',
      sitemap.map(({
        loc, lastmod, changefreq, priority,
      }) => `<url>   
  <loc>${loc}</loc>
  <lastmod>${lastmod}</lastmod>
  <changefreq>${changefreq}</changefreq>
  <priority>${priority}</priority>
</url>`).join('\n')
        + '\n</urlset>',
    ))
}
