import { createElement } from 'react'
import { ChunkExtractor } from '@loadable/server'
import ReactDOMServer from 'react-dom/server'
// import { HelmetData } from 'react-helmet-async'
// @ts-ignore
import ssrPrepass from '@pareto-engineering/react-ssr-prepass'

interface RendererOptions {
  loadMessages?      :(locale: string) => Promise<any>;
  getEnvironment?    :(endpoint: string) => any;
  defaultLocale?     :string;
  graphqlEndpointUrl?:string;
}

class Renderer {
  private Component:React.ComponentType<any>

  private template:string

  private options:RendererOptions

  private extractor:ChunkExtractor

  private html:string

  private scriptTags:string

  private linkTags:string

  private styleTags:string

  private helmet:any

  private queryRecords:any

  private graphqlEndpointUrl:string

  private locale:string

  private messages:any

  private environment:any

  constructor(
    Component, template, stats, options = {},
  ) {
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
      .replace(
        '<div id="main"></div>', `<div id="main">${this.html}</div>`,
      )
      .replace(
        '</body>',
        `${`${
          this.scriptTags
        }<script> window.__RELAY_PAYLOADS__ = ${JSON.stringify(this.queryRecords)}; 
        window.__LOCALE__ = "${this.locale}";
        </script>`}</body>`,
      )
      .replace(
        '<title></title>',
        this.linkTags
          + this.styleTags
          + this.helmet.title.toString()
          + this.helmet.meta.toString(),
      )
      .replace(
        /(\r\n|\n|\r)/gm, '',
      ) // Minification
      .replace(
        /\s\s+/g, '',
      ) // Minification
  }

  async prepareLocale(header) {
    if (this.options.loadMessages) {
      this.locale = header ? header.slice(
        0, 2,
      ) : this.options.defaultLocale
      this.messages = await this.options.loadMessages(this.locale)
    }
  }

  prepareRelay() {
    if (this.options.getEnvironment) {
      this.environment = this.options.getEnvironment(this.options.graphqlEndpointUrl)
    }
  }

  async render(
    req, res,
  ) {
    const routerContext = {} as { status?: number }
    // @ts-ignore
    const helmetContext = {}
    const location = req.originalUrl || req.url
    this.prepareRelay()
    await this.prepareLocale(req.headers['accept-language'])

    const jsx = this.extractor.collectChunks(createElement(
      this.Component, {
        environment:this.environment,
        location,
        routerContext,
        helmetContext,
        locale     :this.locale,
        messages   :this.messages,
      },
    ))
    await ssrPrepass(jsx)

    this.html = ReactDOMServer.renderToString(jsx)

    // @ts-ignore
    this.helmet = helmetContext.helmet
    this.queryRecords = this.environment
      .getStore()
      .getSource()
      .toJSON()
    this.scriptTags = this.extractor.getScriptTags() // or extractor.getScriptElements();
    this.linkTags = this.extractor.getLinkTags() // or extractor.getLinkElements();
    this.styleTags = this.extractor.getStyleTags() // or extractor.getStyleElements();

    res.status(routerContext.status || 200)

    res.send(this.renderTemplate())
  }
}

export default Renderer
