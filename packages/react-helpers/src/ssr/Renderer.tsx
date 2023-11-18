import { createElement } from 'react'
import { ChunkExtractor } from '@loadable/server'
import ReactDOMServer from 'react-dom/server'
import ssrPrepass from '@pareto-engineering/react-ssr-prepass'

class Renderer {
  constructor(Component, template, stats, options = {}) {
    this.Component = Component
    this.template = template
    this.options = options
    this.extractor = new ChunkExtractor({ stats })

    this.prepareLocale = this.prepareLocale.bind(this)
    this.prepareRelay = this.prepareRelay.bind(this)
    this.renderTemplate = this.renderTemplate.bind(this)
    this.render = this.render.bind(this)
  }

  renderTemplate() {
    return this.template
      .replace('<div id="main"></div>', `<div id="main">${this.html}</div>`)
      .replace(
        '</body>',
        `${`${
          this.scriptTags
        }<script> window.__RELAY_PAYLOADS__ = ${JSON.stringify(
          this.queryRecords,
        )}; 
        window.__LOCALE__ = ${this.locale}
        </script>`}</body>`,
      )
      .replace(
        '<title></title>',
        this.linkTags
          + this.styleTags
          + this.helmet.title.toString()
          + this.helmet.meta.toString(),
      )
      .replace(/(\r\n|\n|\r)/gm, '') // Minification
      .replace(/\s\s+/g, '') // Minification
  }

  async prepareLocale(header) {
    if (this.options.loadMessages) {
      this.locale = header ? header.slice(0, 2) : this.options.defaultLocale
      this.Messages = await this.options.loadMessages(this.locale)
    }
  }

  prepareRelay() {
    if (this.options.getEnvironment) {
      this.environment = this.options.getEnvironment(
        process.env.GRAPHQL_ENDPOINT,
      )
    }
  }

  async render(req, res) {
    const routerContext = {}
    const helmetContext = {}
    const location = req.originalUrl || req.url
    this.prepareRelay()
    await this.prepareLocale(req.headers['accept-language'])

    const jsx = this.extractor.collectChunks(
      createElement(this.Component, {
        environment: this.environment,
        location,
        routerContext,
        helmetContext,
        locale: this.locale,
        messages: this.messages,
      }),
    )
    await ssrPrepass(jsx)

    this.html = ReactDOMServer.renderToString(jsx)

    this.helmet = helmetContext.helmet
    this.queryRecords = this.environment
      .getStore()
      .getSource()
      .toJSON()
    this.scriptTags = this.extractor.getScriptTags() // or extractor.getScriptElements();
    this.linkTags = this.extractor.getLinkTags() // or extractor.getLinkElements();
    this.styleTags = this.extractor.getStyleTags() // or extractor.getStyleElements();

    res.send(this.renderTemplate())
  }
}

export default Renderer
