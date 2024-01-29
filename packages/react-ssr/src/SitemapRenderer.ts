/**
 * Class for rendering a sitemap.
 */
import { format } from 'date-fns'

export interface SitemapItem {
  loc       :string;
  lastmod   :Date | string;
  changefreq:string;
  priority  :number;
}

export type SitemapGetter = () => Promise<SitemapItem[]> | SitemapItem[]

export interface SitemapConfig {
  CANONICAL:string;
}

const TEMPLATE_BASE = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>`

export class SitemapRenderer {
  private getters:SitemapGetter[]

  private config:SitemapConfig

  private paths:SitemapItem[]

  private map:string

  constructor(
    getters: SitemapGetter[], config: SitemapConfig,
  ) {
    this.getters = getters
    this.config = config
    this.paths = []
    this.map = ''
    this.loadMapItems = this.loadMapItems.bind(this)
    this.formatMapItems = this.formatMapItems.bind(this)
    this.render = this.render.bind(this)
  }

  async loadMapItems(): Promise<void> {
    this.getters.forEach(async (getter) => {
      const items = await getter()
      this.paths.push(...items)
    })
  }

  formatMapItems(): void {
    this.paths = this.paths.map(({
      loc, lastmod, changefreq, priority,
    }) => ({
      loc:loc.length
        ? new URL(
          loc, this.config.CANONICAL,
        ).href
        : this.config.CANONICAL,
      lastmod:format(
        lastmod, 'yyyy-MM-dd',
      ),
      changefreq,
      priority,
    }))
  }

  convertMapToXML(): void {
    this.paths.forEach(({
      loc, lastmod, changefreq, priority,
    }) => {
      this.map += `
      <url>
        <loc>${loc}</loc>
        <lastmod>${lastmod}</lastmod>
        <changefreq>${changefreq}</changefreq>
        <priority>${priority}</priority>
      </url>`
    })
  }

  async render(
    req: any, res: any,
  ): Promise<any> {
    await this.loadMapItems()
    this.formatMapItems()
    this.convertMapToXML()

    res.setHeader(
      'Content-Type', 'text/xml',
    )

    res.send(TEMPLATE_BASE.replace(
      '</urlset>', `${this.map}\n</urlset>`,
    )
    // Remove all whitespace
      .replace(
        /(\r\n|\n|\r)/gm, '',
      )
      .replace(
        /\s\s+/g, '',
      ))
  }
}

export default SitemapRenderer
