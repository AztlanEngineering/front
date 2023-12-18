let e; let t; const a = {
  280:(
    e, t, a,
  ) => {
    a.r(t), a.d(
      t, {
        default:() => v,
      },
    ); const s = a(689); const n = require('react-relay'); let i; let r; const o = a(126); const l = a(260); const u = a(580); const c = a.n(u); const m = a(337); const d = [
      'id',
      'className',
      'style',
      'children',
      'data',
    ]; const h = m.Z.base; const f = 'query-tester'; const p = (void 0 !== i || (i = a(965)).hash && i.hash !== 'd1cdb0deb371cd84d96ec9c6169e1255' && console.error("The definition of 'QueryTesterFragment' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data."), i); const y = (void 0 !== r || (r = a(416)).hash && r.hash !== '920e8fa8275613b7ca9be05c137e7fbf' && console.error("The definition of 'QueryTesterQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data."), r); function k(e) {
      const t = e.id; const i = e.className; const r = e.style; const o = e.children; const l = e.data; !(function (
        e, t,
      ) {
        if (e == null) return {}; let a; let s; const n = (function (
          e, t,
        ) { if (e == null) return {}; let a; let s; const n = {}; const i = Object.keys(e); for (s = 0; s < i.length; s++)a = i[s], t.indexOf(a) >= 0 || (n[a] = e[a]); return n }(
          e, t,
        )); if (Object.getOwnPropertySymbols) {
          const i = Object.getOwnPropertySymbols(e); for (s = 0; s < i.length; s++) {
            a = i[s], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(
              e, a,
            ) && (n[a] = e[a])
          }
        }
      }(
        e, d,
      )), (0, s.useInsertionEffect)(
        (() => {
          Promise.resolve().then(a.t.bind(
            a, 913, 23,
          ))
        }), [],
      ); const u = (0, n.useFragment)(
        p, l,
      ).time; return s.createElement(
        'div', {
          id       :t,
          className:[
            h,
            f,
            i,
          ].filter(((e) => e)).join(' '),
          style:r,
        }, s.createElement(
          'p', null, 'TIME IS', ' ', u, o,
        ),
      )
    }k.propTypes = {
      id       :c().string,
      className:c().string,
      style    :c().objectOf(c().string),
      children :c().node,
    }, k.defaultProps = {}, k.QUERY = y, k.FRAGMENT = p; const b = k; const j = a(778); const g = (0, o.defineMessages)({
      title:{
        id            :'rxNddi',
        defaultMessage:'Homepage',
      },
      welcome:{
        id            :'dUEMP6',
        defaultMessage:'Welcome to the site, {name}!!!',
      },
    }); const v = function () {
      const e = (0, n.useLazyLoadQuery)(
        b.QUERY, {}, {
          fetchPolicy:'store-or-network',
        },
      ); const t = (0, o.useIntl)().formatMessage; return s.createElement(
        l.Z, {
          title:t(g.title),
        }, s.createElement(
          j.OZ, null,
        ), s.createElement(
          j.qY, null,
        ), s.createElement(
          s.Suspense, {
            fallback:'Loading',
          }, s.createElement(
            b, {
              data:e,
            },
          ),
        ), s.createElement(
          'p', null, t(
            g.welcome, {
              name:'you guys',
            },
          ),
        ),
      )
    }
  },
  940:(
    e, t, a,
  ) => {
    a.d(
      t, {
        Z:() => s,
      },
    ); const s = [
      {
        path     :'/',
        component:(0, a(874).n)({
          resolved:{},
          chunkName() { return 'base.homepage' },
          isReady(e) { const t = this.resolve(e); return !0 === this.resolved[t] && !!a.m[t] },
          importAsync() {
            return Promise.resolve().then(a.bind(
              a, 280,
            ))
          },
          requireAsync(e) { const t = this; const a = this.resolve(e); return this.resolved[a] = !1, this.importAsync(e).then(((e) => (t.resolved[a] = !0, e))) },
          requireSync(e) { const t = this.resolve(e); return a(t) },
          resolve() { return 280 },
        }),
        exact:!0,
      },
    ]
  },
  965:(
    e, t, a,
  ) => {
    a.r(t), a.d(
      t, {
        default:() => s,
      },
    ); const s = {
      argumentDefinitions:[],
      kind               :'Fragment',
      metadata           :null,
      name               :'QueryTesterFragment',
      selections         :[
        {
          alias     :null,
          args      :null,
          kind      :'ScalarField',
          name      :'time',
          storageKey:null,
        },
      ],
      type       :'Query',
      abstractKey:null,
      hash       :'d1cdb0deb371cd84d96ec9c6169e1255',
    }
  },
  416:(
    e, t, a,
  ) => {
    a.r(t), a.d(
      t, {
        default:() => s,
      },
    ); const s = {
      fragment:{
        argumentDefinitions:[],
        kind               :'Fragment',
        metadata           :null,
        name               :'QueryTesterQuery',
        selections         :[
          {
            args:null,
            kind:'FragmentSpread',
            name:'QueryTesterFragment',
          },
        ],
        type       :'Query',
        abstractKey:null,
      },
      kind     :'Request',
      operation:{
        argumentDefinitions:[],
        kind               :'Operation',
        name               :'QueryTesterQuery',
        selections         :[
          {
            alias     :null,
            args      :null,
            kind      :'ScalarField',
            name      :'time',
            storageKey:null,
          },
        ],
      },
      params:{
        cacheID      :'cb2c901c92e521a25b2ac76857b5e322',
        id           :null,
        metadata     :{},
        name         :'QueryTesterQuery',
        operationKind:'query',
        text         :'query QueryTesterQuery {\n  ...QueryTesterFragment\n}\n\nfragment QueryTesterFragment on Query {\n  time\n}\n',
      },
      hash:'920e8fa8275613b7ca9be05c137e7fbf',
    }
  },
  926:(
    e, t, a,
  ) => {
    a.r(t), a.d(
      t, {
        default:() => o,
      },
    ); const s = a(689); const n = a(126); const i = a(260); const r = (0, n.defineMessages)({
      notAvailable:{
        id            :'IEmYNF',
        defaultMessage:'This website is currently not available',
      },
    }); const o = function () {
      const e = (0, n.useIntl)().formatMessage; return s.createElement(
        i.Z, {
          title:'Maintenance',
        }, s.createElement(
          'p', null, e(r.notAvailable),
        ),
      )
    }
  },
  793:(
    e, t, a,
  ) => {
    a.r(t), a.d(
      t, {
        default:() => o,
      },
    ); const s = a(689); const n = a(126); const i = a(260); const r = (0, n.defineMessages)({
      notFound:{
        id            :'M/1qd7',
        defaultMessage:'The page you requested is not found.',
      },
    }); const o = function () {
      const e = (0, n.useIntl)().formatMessage; return s.createElement(
        i.Z, {
          title:'Error 404',
        }, s.createElement(
          'p', null, e(r.notFound),
        ),
      )
    }
  },
  610:(
    e, t, a,
  ) => {
    a.d(
      t, {
        Z:() => n,
      },
    ); const s = a(874); const n = [
      {
        path     :'/404',
        component:(0, s.n)({
          resolved:{},
          chunkName() { return 'common' },
          isReady(e) { const t = this.resolve(e); return !0 === this.resolved[t] && !!a.m[t] },
          importAsync() {
            return Promise.resolve().then(a.bind(
              a, 793,
            ))
          },
          requireAsync(e) { const t = this; const a = this.resolve(e); return this.resolved[a] = !1, this.importAsync(e).then(((e) => (t.resolved[a] = !0, e))) },
          requireSync(e) { const t = this.resolve(e); return a(t) },
          resolve() { return 793 },
        }),
        exact:!0,
      },
      {
        path     :'/maintenance',
        component:(0, s.n)({
          resolved:{},
          chunkName() { return 'common' },
          isReady(e) { const t = this.resolve(e); return !0 === this.resolved[t] && !!a.m[t] },
          importAsync() {
            return Promise.resolve().then(a.bind(
              a, 926,
            ))
          },
          requireAsync(e) { const t = this; const a = this.resolve(e); return this.resolved[a] = !1, this.importAsync(e).then(((e) => (t.resolved[a] = !0, e))) },
          requireSync(e) { const t = this.resolve(e); return a(t) },
          resolve() { return 926 },
        }),
        exact:!0,
      },
    ]
  },
  260:(
    e, t, a,
  ) => {
    a.d(
      t, {
        Z:() => i,
      },
    ); const s = a(689); const n = a(661); const i = function (e) {
      const t = e.title; const a = e.children; return s.createElement(
        'main', {
          className:'grid',
        }, s.createElement(
          'div', {
            className:'background near span-3 fit-content',
          }, s.createElement(
            'h1', null, t,
          ),
        ), s.createElement(
          'div', {
            className:'background near span-5 md-start-5 md-span-8 fit-content',
          }, s.createElement(
            'ul', {
              className:'inline',
            }, s.createElement(
              'li', null, s.createElement(
                n.Link, {
                  to:'/',
                }, 'Homepage',
              ),
            ), s.createElement(
              'li', null, s.createElement(
                n.Link, {
                  to:'/maintenance',
                }, 'Maintenance',
              ),
            ), s.createElement(
              'li', null, s.createElement(
                n.Link, {
                  to:'/404',
                }, 'Test 404',
              ),
            ),
          ), a,
        ),
      )
    }
  },
  778:(
    e, t, a,
  ) => {
    a.d(
      t, {
        qY:() => E,
        lR:() => d,
        OZ:() => j,
      },
    ); const s = a(689); const n = a(580); const i = a.n(n); const r = a(661); const o = ['isPrivate']; function l() {
      return l = Object.assign ? Object.assign.bind() : function (e) {
        for (let t = 1; t < arguments.length; t++) {
          const a = arguments[t]; for (const s in a) {
            Object.prototype.hasOwnProperty.call(
              a, s,
            ) && (e[s] = a[s])
          }
        } return e
      }, l.apply(
        this, arguments,
      )
    } function u(e) {
      return (function (e) { if (Array.isArray(e)) return c(e) }(e)) || (function (e) { if (typeof Symbol !== 'undefined' && e[Symbol.iterator] != null || e['@@iterator'] != null) return Array.from(e) }(e)) || (function (
        e, t,
      ) {
        if (e) {
          if (typeof e === 'string') {
            return c(
              e, t,
            )
          } let a = Object.prototype.toString.call(e).slice(
            8, -1,
          ); return a === 'Object' && e.constructor && (a = e.constructor.name), a === 'Map' || a === 'Set' ? Array.from(e) : a === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? c(
            e, t,
          ) : void 0
        }
      }(e)) || (function () { throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.') }())
    } function c(
      e, t,
    ) { (t == null || t > e.length) && (t = e.length); for (var a = 0, s = new Array(t); a < t; a++)s[a] = e[a]; return s } function m(e) {
      const t = e.items; const a = e.NotFoundPage; return s.createElement(
        r.Switch, {
          children:[].concat(
            u(t.map(((e) => {
              e.isPrivate; const t = (function (
                e, t,
              ) {
                if (e == null) return {}; let a; let s; const n = (function (
                  e, t,
                ) { if (e == null) return {}; let a; let s; const n = {}; const i = Object.keys(e); for (s = 0; s < i.length; s++)a = i[s], t.indexOf(a) >= 0 || (n[a] = e[a]); return n }(
                  e, t,
                )); if (Object.getOwnPropertySymbols) {
                  const i = Object.getOwnPropertySymbols(e); for (s = 0; s < i.length; s++) {
                    a = i[s], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(
                      e, a,
                    ) && (n[a] = e[a])
                  }
                } return n
              }(
                e, o,
              )); return s.createElement(
                r.Route, l(
                  {
                    key:t.path,
                  }, t,
                ),
              )
            }))), u(a ? [
              s.createElement(
                r.Route, {
                  component:a,
                },
              ),
            ] : []),
          ),
        },
      )
    }m.propTypes = {
      items:i().arrayOf(i().shape({
        path:i().string.isRequired,
      })).isRequired,
      NotFound:i().node,
    }; const d = m; const h = a(569); const f = a(337); const p = f.Z.base; const y = 'theme-switcher'; const k = {
      'dark-theme' :'Dark',
      'light-theme':'Light',
    }; function b(e) {
      const t = e.id; const n = e.className; const i = e.style; e.children, (0, s.useInsertionEffect)(
        (() => {
          Promise.resolve().then(a.t.bind(
            a, 61, 23,
          ))
        }), [],
      ); const r = (0, h.qD)(); const o = r.theme; const l = r.isTheme; const u = r.setTheme; return s.createElement(
        'ul', {
          id       :t,
          className:[
            p,
            y,
            n,
            'inline',
          ].filter(((e) => e)).join(' '),
          style:i,
        }, o, ' ', l(o), Object.keys(k).map(((e) => s.createElement(
          'li', null, s.createElement(
            'a', {
              onClick() { return u(e) },
              className:l(e) ? 'bold' : '',
            }, k[e],
          ),
        ))),
      )
    }b.propTypes = {
      id       :i().string,
      className:i().string,
      style    :i().objectOf(i().string),
      children :i().node,
    }, b.defaultProps = {}; const j = b; const g = f.Z.base; const v = 'locale-switcher'; const x = {
      en:'English',
      es:'Spanish',
    }; function C(e) {
      const t = e.id; const n = e.className; const i = e.style; e.children, (0, s.useInsertionEffect)(
        (() => {
          Promise.resolve().then(a.t.bind(
            a, 516, 23,
          ))
        }), [],
      ); const r = (0, h.qD)(); const o = (r.locale, r.isLocale); const l = r.setLocale; return s.createElement(
        'ul', {
          id       :t,
          className:[
            g,
            v,
            n,
            'inline',
          ].filter(((e) => e)).join(' '),
          style:i,
        }, Object.keys(x).map(((e) => s.createElement(
          'li', null, s.createElement(
            'a', {
              onClick() { return l(e) },
              className:o(e) ? 'bold' : '',
            }, x[e],
          ),
        ))),
      )
    }C.propTypes = {
      id       :i().string,
      className:i().string,
      style    :i().objectOf(i().string),
      children :i().node,
    }, C.defaultProps = {}; const E = C
  },
  874:(
    e, t, a,
  ) => {
    a.d(
      t, {
        n:() => o,
      },
    ); const s = a(689); const n = a.n(s); const i = require('@loadable/component'); const r = a.n(i); function o(e) {
      return r()(
        e, {
          fallback:n().createElement(
            'h1', null, 'loading !!!',
          ),
        },
      )
    }
  },
  34:(
    e, t, a,
  ) => {
    a.d(
      t, {
        Z:() => w,
      },
    ); const s = require('relay-runtime'); const n = new s.Store(new s.RecordSource()); const i = a(689); const r = require('@loadable/server'); const o = require('react-dom/server'); const l = require('@pareto-engineering/react-ssr-prepass'); const u = require('react-relay/hooks'); const c = a(661); const m = require('react-helmet-async'); const d = a(395); const h = a(569); const f = a(126); const p = a(610); const y = a(940); function k(e) {
      return (function (e) { if (Array.isArray(e)) return b(e) }(e)) || (function (e) { if (typeof Symbol !== 'undefined' && e[Symbol.iterator] != null || e['@@iterator'] != null) return Array.from(e) }(e)) || (function (
        e, t,
      ) {
        if (e) {
          if (typeof e === 'string') {
            return b(
              e, t,
            )
          } let a = Object.prototype.toString.call(e).slice(
            8, -1,
          ); return a === 'Object' && e.constructor && (a = e.constructor.name), a === 'Map' || a === 'Set' ? Array.from(e) : a === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? b(
            e, t,
          ) : void 0
        }
      }(e)) || (function () { throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.') }())
    } function b(
      e, t,
    ) { (t == null || t > e.length) && (t = e.length); for (var a = 0, s = new Array(t); a < t; a++)s[a] = e[a]; return s } const j = [].concat(
      k(p.Z), k(y.Z),
    ); const g = a(778); const v = a(793); a(563); const x = function () {
      const e = (0, h.qD)().theme; return i.createElement(
        'main', {
          className:''.concat(
            e || '', ' background far',
          ),
        }, i.createElement(
          g.lR, {
            items       :j,
            NotFoundPage:v.default,
          },
        ),
      )
    }; function C(e) {
      return e === 'es' ? Promise.resolve().then(a.t.bind(
        a, 563, 19,
      )) : Promise.resolve().then(a.t.bind(
        a, 790, 19,
      ))
    } function E(e) { return E = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (e) { return typeof e } : function (e) { return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e }, E(e) } const N = ['locale', 'messages']; function I(
      e, t,
    ) {
      const a = Object.keys(e); if (Object.getOwnPropertySymbols) {
        let s = Object.getOwnPropertySymbols(e); t && (s = s.filter(((t) => Object.getOwnPropertyDescriptor(
          e, t,
        ).enumerable))), a.push.apply(
          a, s,
        )
      } return a
    } function R(e) {
      for (let t = 1; t < arguments.length; t++) {
        var a = arguments[t] != null ? arguments[t] : {}; t % 2 ? I(
          Object(a), !0,
        ).forEach(((t) => {
          let s; let n; let i; s = e, n = t, i = a[t], (n = (function (e) {
            const t = (function (
              e, t,
            ) {
              if (E(e) !== 'object' || e === null) return e; const a = e[Symbol.toPrimitive]; if (void 0 !== a) {
                const s = a.call(
                  e, 'string',
                ); if (E(s) !== 'object') return s; throw new TypeError('@@toPrimitive must return a primitive value.')
              } return String(e)
            }(e)); return E(t) === 'symbol' ? t : String(t)
          }(n))) in s ? Object.defineProperty(
              s, n, {
                value       :i,
                enumerable  :!0,
                configurable:!0,
                writable    :!0,
              },
            ) : s[n] = i
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(
          e, Object.getOwnPropertyDescriptors(a),
        ) : I(Object(a)).forEach(((t) => {
          Object.defineProperty(
            e, t, Object.getOwnPropertyDescriptor(
              a, t,
            ),
          )
        }))
      } return e
    } const w = new class {
      constructor(
        e, t, a, s = {},
      ) {
        this.Component = e, this.template = t, this.options = s, this.extractor = new r.ChunkExtractor({
          stats:a,
        }), this.prepareLocale = this.prepareLocale.bind(this), this.prepareRelay = this.prepareRelay.bind(this), this.renderTemplate = this.renderTemplate.bind(this), this.render = this.render.bind(this)
      }

      renderTemplate() {
        return this.template.replace(
          '<div id="main"></div>', `<div id="main">${this.html}</div>`,
        ).replace(
          '</body>', `${this.scriptTags}<script> window.__RELAY_PAYLOADS__ = ${JSON.stringify(this.queryRecords)}; <\/script></body>`,
        ).replace(
          '<title></title>', this.linkTags + this.styleTags + this.helmet.title.toString() + this.helmet.meta.toString(),
        ).replace(
          /(\r\n|\n|\r)/gm, '',
        )
          .replace(
            /\s\s+/g, '',
          )
      }

      async prepareLocale(e) {
        this.options.loadMessages && (this.locale = e ? e.slice(
          0, 2,
        ) : this.options.defaultLocale, this.Messages = await this.options.loadMessages(this.locale))
      }

      prepareRelay() { this.options.getEnvironment && (this.environment = this.options.getEnvironment(process.env.GRAPHQL_ENDPOINT)) }

      async render(
        e, t,
      ) {
        const a = {}; const s = e.originalUrl || e.url; this.prepareRelay(), await this.prepareLocale(e.headers['accept-language']); const n = this.extractor.collectChunks((0, i.createElement)(
          this.Component, {
            environment  :this.environment,
            location     :s,
            routerContext:{},
            helmetContext:a,
            locale       :this.locale,
            messages     :this.messages,
          },
        )); await l(n), this.html = o.renderToString(n), this.helmet = a.helmet, this.queryRecords = this.environment.getStore().getSource().toJSON(), this.scriptTags = this.extractor.getScriptTags(), this.linkTags = this.extractor.getLinkTags(), this.styleTags = this.extractor.getStyleTags(), t.send(this.renderTemplate())
      }
    }(
      ((e) => {
        const t = e.environment; const a = e.routerContext; const s = e.location; const n = e.helmetContext; const r = e.locale; const o = e.messages; const l = (0, d.b)(
          'es', C,
        ); const p = (l.locale, l.messages, (function (
          e, t,
        ) {
          if (e == null) return {}; let a; let s; const n = (function (
            e, t,
          ) { if (e == null) return {}; let a; let s; const n = {}; const i = Object.keys(e); for (s = 0; s < i.length; s++)a = i[s], t.indexOf(a) >= 0 || (n[a] = e[a]); return n }(
            e, t,
          )); if (Object.getOwnPropertySymbols) {
            const i = Object.getOwnPropertySymbols(e); for (s = 0; s < i.length; s++) {
              a = i[s], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(
                e, a,
              ) && (n[a] = e[a])
            }
          } return n
        }(
          l, N,
        ))); return i.createElement(
          m.HelmetProvider, {
            context:n,
          }, i.createElement(
            u.RelayEnvironmentProvider, {
              environment:t,
            }, i.createElement(
              c.StaticRouter, {
                location:s,
                context :a,
              }, i.createElement(
                f.IntlProvider, {
                  locale  :r,
                  messages:o,
                }, i.createElement(
                  m.HelmetProvider, null, i.createElement(
                    h.iz, {
                      value:R(
                        {
                          locale:r,
                        }, p,
                      ),
                    }, i.createElement(
                      x, null,
                    ),
                  ),
                ),
              ),
            ),
          ), ',',
        )
      }), '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    \x3c!--\n    <style>\n      html {\n        --loader-bg: var(--main);\n      }\n\n      @keyframes hide-loader {\n        0% {\n          opacity: 1;\n        }\n        99% {\n          opacity: 0;\n          z-index: 99;\n        }\n        100% {\n          z-index: -99;\n        }\n      }\n\n      #loader {\n        height: 100%;\n        width: 100%;\n        position: fixed;\n        top: 0;\n        left: 0;\n        z-index: 99;\n        background: var(--loader-bg);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n\n      #loader-icon {\n        max-height: 5em;\n      }\n\n      #loader.loaded {\n        opacity: 0;\n        animation: hide-loader 0.2s linear 1 forwards;\n      }\n    </style>--\x3e\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <link rel="icon" href="/favicon-light.svg" data-rh="true" />\n    <title></title>\n  </head>\n  <body>\n    \x3c!--\n    <div id="loader">\n      Loading\n    </div>\n    --\x3e\n    <div id="main"></div>\n  </body>\n</html>\n', JSON.parse('{"hash":"b6235f6a5cc982c3da5c","publicPath":"/","outputPath":"/home/adrian_villa/code/aztlan/front/apps/template-react/public","assetsByChunkName":{"main":["main.css","main.js?6c7b5"],"common":["common.js?b9338"],"base.homepage":["base.homepage.js?480d4"],"index.js":["index.js.js?56030"],"tslib.es6.mjs":["tslib.es6.mjs.js?18806"],"exports.scss|0|||}}":["exports.scss|0|||}}.css"],"RelayResponseNormalizer.js":["RelayResponseNormalizer.js.js?5403d"],"RelayReader.js":["RelayReader.js.js?f582e"],"RelayModernStore.js":["RelayModernStore.js.js?bcb48"],"OperationExecutor.js":["OperationExecutor.js.js?dab1e"],"DataChecker.js":["DataChecker.js.js?36fa2"],"react-router.js":["react-router.js.js?24cf3"],"FragmentResource.js":["FragmentResource.js.js?481e2"],"ReactRelayPaginationContainer.js":["ReactRelayPaginationContainer.js.js?a5975"],"react-dom.production.min.js":["react-dom.production.min.js.js?16d07"],"history.js":["history.js.js?76d29"],"parser.js":["parser.js.js?af134"],"loadable.esm.js":["loadable.esm.js.js?f593e"]},"assets":[{"type":"asset","name":"main.js?6c7b5","size":229866,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"immutable":true,"chunkhash":"6c7b5","javascriptModule":false,"minimized":true,"related":{"license":"main.js.LICENSE.txt","sourceMap":"main.js.map?6c7b5"}},"chunkNames":["main"],"chunkIdHints":[],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"filteredRelated":2,"chunks":[179],"auxiliaryChunks":[]},{"type":"asset","name":"react-dom.production.min.js.js?16d07","size":129185,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"immutable":true,"chunkhash":"16d07","javascriptModule":false,"minimized":true,"related":{"license":"react-dom.production.min.js.js.LICENSE.txt","sourceMap":"react-dom.production.min.js.js.map?16d07"}},"chunkNames":["react-dom.production.min.js"],"chunkIdHints":["vendors"],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"filteredRelated":2,"chunks":[417],"auxiliaryChunks":[]},{"type":"asset","name":"m.book.italic.ttf","size":48612,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"copied":true,"sourceFilename":"../../packages/assets/fonts/m.book.italic.ttf"},"chunkNames":[],"chunkIdHints":[],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"chunks":[],"auxiliaryChunks":[]},{"type":"asset","name":"m.bold.italic.ttf","size":47736,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"copied":true,"sourceFilename":"../../packages/assets/fonts/m.bold.italic.ttf"},"chunkNames":[],"chunkIdHints":[],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"chunks":[],"auxiliaryChunks":[]},{"type":"asset","name":"m.book.ttf","size":46264,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"copied":true,"sourceFilename":"../../packages/assets/fonts/m.book.ttf"},"chunkNames":[],"chunkIdHints":[],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"chunks":[],"auxiliaryChunks":[]},{"type":"asset","name":"m.bold.ttf","size":45048,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"copied":true,"sourceFilename":"../../packages/assets/fonts/m.bold.ttf"},"chunkNames":[],"chunkIdHints":[],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"chunks":[],"auxiliaryChunks":[]},{"type":"asset","name":"s.italic.ttf","size":43692,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"copied":true,"sourceFilename":"../../packages/assets/fonts/s.italic.ttf"},"chunkNames":[],"chunkIdHints":[],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"chunks":[],"auxiliaryChunks":[]},{"type":"asset","name":"s.regular.ttf","size":35772,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"copied":true,"sourceFilename":"../../packages/assets/fonts/s.regular.ttf"},"chunkNames":[],"chunkIdHints":[],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"chunks":[],"auxiliaryChunks":[]},{"type":"asset","name":"m.book.italic.woff","size":21984,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"copied":true,"sourceFilename":"../../packages/assets/fonts/m.book.italic.woff"},"chunkNames":[],"chunkIdHints":[],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"chunks":[],"auxiliaryChunks":[]},{"type":"asset","name":"m.bold.italic.woff","size":21788,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"copied":true,"sourceFilename":"../../packages/assets/fonts/m.bold.italic.woff"},"chunkNames":[],"chunkIdHints":[],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"chunks":[],"auxiliaryChunks":[]},{"type":"asset","name":"main.css","size":21279,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"related":{"sourceMap":"main.css.map"}},"chunkNames":["main"],"chunkIdHints":[],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"filteredRelated":1,"chunks":[179],"auxiliaryChunks":[]},{"type":"asset","name":"m.book.woff","size":20984,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"copied":true,"sourceFilename":"../../packages/assets/fonts/m.book.woff"},"chunkNames":[],"chunkIdHints":[],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"chunks":[],"auxiliaryChunks":[]},{"type":"asset","name":"m.bold.woff","size":20696,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"copied":true,"sourceFilename":"../../packages/assets/fonts/m.bold.woff"},"chunkNames":[],"chunkIdHints":[],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"chunks":[],"auxiliaryChunks":[]},{"type":"asset","name":"896.js?22064","size":20190,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"immutable":true,"chunkhash":"22064","javascriptModule":false,"minimized":true,"related":{"sourceMap":"896.js.map?22064"}},"chunkNames":[],"chunkIdHints":["vendors"],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"filteredRelated":1,"chunks":[896],"auxiliaryChunks":[]},{"type":"asset","name":"s.italic.woff","size":19924,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"copied":true,"sourceFilename":"../../packages/assets/fonts/s.italic.woff"},"chunkNames":[],"chunkIdHints":[],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"chunks":[],"auxiliaryChunks":[]},{"type":"asset","name":"OperationExecutor.js.js?dab1e","size":18951,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"immutable":true,"chunkhash":"dab1e","javascriptModule":false,"minimized":true,"related":{"sourceMap":"OperationExecutor.js.js.map?dab1e"}},"chunkNames":["OperationExecutor.js"],"chunkIdHints":["vendors"],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"filteredRelated":1,"chunks":[342],"auxiliaryChunks":[]},{"type":"asset","name":"s.regular.woff","size":17176,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"copied":true,"sourceFilename":"../../packages/assets/fonts/s.regular.woff"},"chunkNames":[],"chunkIdHints":[],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"chunks":[],"auxiliaryChunks":[]},{"type":"asset","name":"parser.js.js?af134","size":16751,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"immutable":true,"chunkhash":"af134","javascriptModule":false,"minimized":true,"related":{"sourceMap":"parser.js.js.map?af134"}},"chunkNames":["parser.js"],"chunkIdHints":["vendors"],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"filteredRelated":1,"chunks":[226],"auxiliaryChunks":[]},{"type":"asset","name":"s.italic.woff2","size":15364,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"copied":true,"sourceFilename":"../../packages/assets/fonts/s.italic.woff2"},"chunkNames":[],"chunkIdHints":[],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"chunks":[],"auxiliaryChunks":[]},{"type":"asset","name":"m.book.italic.woff2","size":14904,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"copied":true,"sourceFilename":"../../packages/assets/fonts/m.book.italic.woff2"},"chunkNames":[],"chunkIdHints":[],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"chunks":[],"auxiliaryChunks":[]},{"type":"asset","name":"m.bold.italic.woff2","size":14744,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"copied":true,"sourceFilename":"../../packages/assets/fonts/m.bold.italic.woff2"},"chunkNames":[],"chunkIdHints":[],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"chunks":[],"auxiliaryChunks":[]},{"type":"asset","name":"m.book.woff2","size":14328,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"copied":true,"sourceFilename":"../../packages/assets/fonts/m.book.woff2"},"chunkNames":[],"chunkIdHints":[],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"chunks":[],"auxiliaryChunks":[]},{"type":"asset","name":"m.bold.woff2","size":14048,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"copied":true,"sourceFilename":"../../packages/assets/fonts/m.bold.woff2"},"chunkNames":[],"chunkIdHints":[],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"chunks":[],"auxiliaryChunks":[]},{"type":"asset","name":"s.regular.woff2","size":13516,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"copied":true,"sourceFilename":"../../packages/assets/fonts/s.regular.woff2"},"chunkNames":[],"chunkIdHints":[],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"chunks":[],"auxiliaryChunks":[]},{"type":"asset","name":"RelayReader.js.js?f582e","size":13303,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"immutable":true,"chunkhash":"f582e","javascriptModule":false,"minimized":true,"related":{"sourceMap":"RelayReader.js.js.map?f582e"}},"chunkNames":["RelayReader.js"],"chunkIdHints":["vendors"],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"filteredRelated":1,"chunks":[101],"auxiliaryChunks":[]},{"type":"asset","name":"index.js.js?56030","size":12976,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"immutable":true,"chunkhash":"56030","javascriptModule":false,"minimized":true,"related":{"sourceMap":"index.js.js.map?56030"}},"chunkNames":["index.js"],"chunkIdHints":["vendors"],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"filteredRelated":1,"chunks":[976],"auxiliaryChunks":[]},{"type":"asset","name":"FragmentResource.js.js?481e2","size":9355,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"immutable":true,"chunkhash":"481e2","javascriptModule":false,"minimized":true,"related":{"sourceMap":"FragmentResource.js.js.map?481e2"}},"chunkNames":["FragmentResource.js"],"chunkIdHints":["vendors"],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"filteredRelated":1,"chunks":[37],"auxiliaryChunks":[]},{"type":"asset","name":"history.js.js?76d29","size":8604,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"immutable":true,"chunkhash":"76d29","javascriptModule":false,"minimized":true,"related":{"sourceMap":"history.js.js.map?76d29"}},"chunkNames":["history.js"],"chunkIdHints":["vendors"],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"filteredRelated":1,"chunks":[319],"auxiliaryChunks":[]},{"type":"asset","name":"RelayModernStore.js.js?bcb48","size":8221,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"immutable":true,"chunkhash":"bcb48","javascriptModule":false,"minimized":true,"related":{"sourceMap":"RelayModernStore.js.js.map?bcb48"}},"chunkNames":["RelayModernStore.js"],"chunkIdHints":["vendors"],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"filteredRelated":1,"chunks":[577],"auxiliaryChunks":[]},{"type":"asset","name":"RelayResponseNormalizer.js.js?5403d","size":8124,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"immutable":true,"chunkhash":"5403d","javascriptModule":false,"minimized":true,"related":{"sourceMap":"RelayResponseNormalizer.js.js.map?5403d"}},"chunkNames":["RelayResponseNormalizer.js"],"chunkIdHints":["vendors"],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"filteredRelated":1,"chunks":[54],"auxiliaryChunks":[]},{"type":"asset","name":"ReactRelayPaginationContainer.js.js?a5975","size":8053,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"immutable":true,"chunkhash":"a5975","javascriptModule":false,"minimized":true,"related":{"sourceMap":"ReactRelayPaginationContainer.js.js.map?a5975"}},"chunkNames":["ReactRelayPaginationContainer.js"],"chunkIdHints":["vendors"],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"filteredRelated":1,"chunks":[394],"auxiliaryChunks":[]},{"type":"asset","name":"DataChecker.js.js?36fa2","size":7229,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"immutable":true,"chunkhash":"36fa2","javascriptModule":false,"minimized":true,"related":{"sourceMap":"DataChecker.js.js.map?36fa2"}},"chunkNames":["DataChecker.js"],"chunkIdHints":["vendors"],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"filteredRelated":1,"chunks":[586],"auxiliaryChunks":[]},{"type":"asset","name":"loadable.esm.js.js?f593e","size":5797,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"immutable":true,"chunkhash":"f593e","javascriptModule":false,"minimized":true,"related":{"sourceMap":"loadable.esm.js.js.map?f593e"}},"chunkNames":["loadable.esm.js"],"chunkIdHints":["vendors"],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"filteredRelated":1,"chunks":[324],"auxiliaryChunks":[]},{"type":"asset","name":"react-router.js.js?24cf3","size":5337,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"immutable":true,"chunkhash":"24cf3","javascriptModule":false,"minimized":true,"related":{"sourceMap":"react-router.js.js.map?24cf3"}},"chunkNames":["react-router.js"],"chunkIdHints":["vendors"],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"filteredRelated":1,"chunks":[88],"auxiliaryChunks":[]},{"type":"asset","name":"base.homepage.js?480d4","size":3172,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"immutable":true,"chunkhash":"480d4","javascriptModule":false,"minimized":true,"related":{"sourceMap":"base.homepage.js.map?480d4"}},"chunkNames":["base.homepage"],"chunkIdHints":[],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"filteredRelated":1,"chunks":[300],"auxiliaryChunks":[]},{"type":"asset","name":"tslib.es6.mjs.js?18806","size":1476,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"immutable":true,"chunkhash":"18806","javascriptModule":false,"minimized":true,"related":{"sourceMap":"tslib.es6.mjs.js.map?18806"}},"chunkNames":["tslib.es6.mjs"],"chunkIdHints":["vendors"],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"filteredRelated":1,"chunks":[670],"auxiliaryChunks":[]},{"type":"asset","name":"index.html","size":1242,"emitted":false,"comparedForEmit":false,"cached":true,"info":{},"chunkNames":[],"chunkIdHints":[],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"chunks":[],"auxiliaryChunks":[]},{"type":"asset","name":"731.css","size":616,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"related":{"sourceMap":"731.css.map"}},"chunkNames":[],"chunkIdHints":[],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"filteredRelated":1,"chunks":[731],"auxiliaryChunks":[]},{"type":"asset","name":"common.js?b9338","size":470,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"immutable":true,"chunkhash":"b9338","javascriptModule":false,"minimized":true,"related":{"sourceMap":"common.js.map?b9338"}},"chunkNames":["common"],"chunkIdHints":[],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"filteredRelated":1,"chunks":[592],"auxiliaryChunks":[]},{"type":"asset","name":"790.js?ccabd","size":421,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"immutable":true,"chunkhash":"ccabd","javascriptModule":false,"minimized":true},"chunkNames":[],"chunkIdHints":[],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"chunks":[790],"auxiliaryChunks":[]},{"type":"asset","name":"731.js?28814","size":122,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"immutable":true,"chunkhash":"28814","javascriptModule":false,"minimized":true},"chunkNames":[],"chunkIdHints":[],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"chunks":[731],"auxiliaryChunks":[]},{"type":"asset","name":"851.js?5e9a5","size":122,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"immutable":true,"chunkhash":"5e9a5","javascriptModule":false,"minimized":true},"chunkNames":[],"chunkIdHints":[],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"chunks":[851],"auxiliaryChunks":[]},{"type":"asset","name":"532.js?e2334","size":121,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"immutable":true,"chunkhash":"e2334","javascriptModule":false,"minimized":true},"chunkNames":[],"chunkIdHints":[],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"chunks":[532],"auxiliaryChunks":[]},{"type":"asset","name":"42.js?92aa8","size":119,"emitted":false,"comparedForEmit":false,"cached":true,"info":{"immutable":true,"chunkhash":"92aa8","javascriptModule":false,"minimized":true},"chunkNames":[],"chunkIdHints":[],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"chunks":[42],"auxiliaryChunks":[]},{"type":"asset","name":"42.css","size":1,"emitted":false,"comparedForEmit":false,"cached":true,"info":{},"chunkNames":[],"chunkIdHints":[],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"chunks":[42],"auxiliaryChunks":[]},{"type":"asset","name":"532.css","size":1,"emitted":false,"comparedForEmit":false,"cached":true,"info":{},"chunkNames":[],"chunkIdHints":[],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"chunks":[532],"auxiliaryChunks":[]},{"type":"asset","name":"851.css","size":1,"emitted":false,"comparedForEmit":false,"cached":true,"info":{},"chunkNames":[],"chunkIdHints":[],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"chunks":[851],"auxiliaryChunks":[]},{"type":"asset","name":"exports.scss|0|||}}.css","size":1,"emitted":false,"comparedForEmit":false,"cached":true,"info":{},"chunkNames":["exports.scss|0|||}}"],"chunkIdHints":["vendors"],"auxiliaryChunkNames":[],"auxiliaryChunkIdHints":[],"chunks":[941],"auxiliaryChunks":[]}],"namedChunkGroups":{"main":{"name":"main","chunks":[976,670,941,54,101,577,342,586,88,37,417,319,226,324,179],"assets":[{"name":"index.js.js?56030"},{"name":"tslib.es6.mjs.js?18806"},{"name":"exports.scss|0|||}}.css"},{"name":"RelayResponseNormalizer.js.js?5403d"},{"name":"RelayReader.js.js?f582e"},{"name":"RelayModernStore.js.js?bcb48"},{"name":"OperationExecutor.js.js?dab1e"},{"name":"DataChecker.js.js?36fa2"},{"name":"react-router.js.js?24cf3"},{"name":"FragmentResource.js.js?481e2"},{"name":"react-dom.production.min.js.js?16d07"},{"name":"history.js.js?76d29"},{"name":"parser.js.js?af134"},{"name":"loadable.esm.js.js?f593e"},{"name":"main.css"},{"name":"main.js?6c7b5"}],"filteredAssets":0,"assetsSize":null,"filteredAuxiliaryAssets":15,"auxiliaryAssetsSize":null,"children":{},"childAssets":{}},"common":{"name":"common","chunks":[592],"assets":[{"name":"common.js?b9338"}],"filteredAssets":0,"assetsSize":null,"filteredAuxiliaryAssets":1,"auxiliaryAssetsSize":null,"children":{},"childAssets":{}},"base.homepage":{"name":"base.homepage","chunks":[976,394,896,300],"assets":[{"name":"index.js.js?56030"},{"name":"ReactRelayPaginationContainer.js.js?a5975"},{"name":"896.js?22064"},{"name":"base.homepage.js?480d4"}],"filteredAssets":0,"assetsSize":null,"filteredAuxiliaryAssets":4,"auxiliaryAssetsSize":null,"children":{},"childAssets":{}}},"generator":"loadable-components","chunks":[{"id":179,"files":["main.css","main.js?6c7b5"]},{"id":731,"files":["731.css","731.js?28814"]},{"id":790,"files":["790.js?ccabd"]},{"id":592,"files":["common.js?b9338"]},{"id":300,"files":["base.homepage.js?480d4"]},{"id":532,"files":["532.css","532.js?e2334"]},{"id":42,"files":["42.css","42.js?92aa8"]},{"id":851,"files":["851.css","851.js?5e9a5"]},{"id":976,"files":["index.js.js?56030"]},{"id":670,"files":["tslib.es6.mjs.js?18806"]},{"id":941,"files":["exports.scss|0|||}}.css"]},{"id":54,"files":["RelayResponseNormalizer.js.js?5403d"]},{"id":101,"files":["RelayReader.js.js?f582e"]},{"id":577,"files":["RelayModernStore.js.js?bcb48"]},{"id":342,"files":["OperationExecutor.js.js?dab1e"]},{"id":586,"files":["DataChecker.js.js?36fa2"]},{"id":88,"files":["react-router.js.js?24cf3"]},{"id":37,"files":["FragmentResource.js.js?481e2"]},{"id":394,"files":["ReactRelayPaginationContainer.js.js?a5975"]},{"id":417,"files":["react-dom.production.min.js.js?16d07"]},{"id":319,"files":["history.js.js?76d29"]},{"id":226,"files":["parser.js.js?af134"]},{"id":324,"files":["loadable.esm.js.js?f593e"]},{"id":896,"files":["896.js?22064"]}]}'), {
        getEnvironment:(e) => new s.Environment({
          network:s.Network.create(((
            t, a,
          ) => fetch(
            e, {
              method :'POST',
              headers:{
                'Content-Type':'application/json',
              },
              body:JSON.stringify({
                query    :t.text,
                variables:a,
              }),
            },
          ).then(((e) => e.json())))),
          store:n,
        }),
        defaultLocale:'en',
        loadMessages :C,
      },
    ).render
  },
  337:(
    e, t, a,
  ) => {
    a.d(
      t, {
        Z:() => s,
      },
    ); const s = {
      base              :'ds',
      elementContent    :'content',
      elementHeading    :'heading',
      elementItem       :'item',
      elementSection    :'section',
      elementSubtitle   :'subtitle',
      modifierActive    :'active',
      modifierAnimated  :'animated',
      modifierAttached  :'attached',
      modifierBlur      :'blur',
      modifierClear     :'clear',
      modifierCompact   :'compact',
      modifierGhost     :'ghost',
      modifierGradient  :'gradient',
      modifierImage     :'image',
      modifierOpen      :'open',
      modifierSimple    :'simple',
      modifierSpaced    :'spaced',
      modifierUnderlined:'underlined',
      wrapperGroup      :'group',
    }
  },
  913:() => {},
  516:() => {},
  61 :() => {},
  406:() => {},
  580:(e) => { e.exports = require('prop-types') },
  689:(e) => { e.exports = require('react') },
  126:(e) => { e.exports = require('react-intl') },
  661:(e) => { e.exports = require('react-router-dom') },
  569:(
    e, t, a,
  ) => {
    a.d(
      t, {
        iz:() => h,
        qD:() => c,
      },
    ); const s = a(689); const n = a(580); const i = a(337); function r({
      primary:e, backgroundColor:t, size:a, label:n, ...r
    }) {
      const o = e ? 'storybook-button--primary' : 'storybook-button--secondary'; return s.createElement(
        'button', {
          type     :'button',
          className:[
            'borders',
            'storybook-button',
            `storybook-button--${a}`,
            o,
          ].join(' '),
          style:t && {
            backgroundColor:t,
          },
          ...r,
        }, 'Hello', i.Z.modifierGhost, ' ', n,
      )
    } function o({
      user:e, onLogin:t, onLogout:a, onCreateAccount:n,
    }) {
      return s.createElement(
        'header', null, s.createElement(
          'div', {
            className:'storybook-header',
          }, s.createElement(
            'div', null, s.createElement(
              'svg', {
                width  :'32',
                height :'32',
                viewBox:'0 0 32 32',
                xmlns  :'http://www.w3.org/2000/svg',
              }, s.createElement(
                'g', {
                  fill    :'none',
                  fillRule:'evenodd',
                }, s.createElement(
                  'path', {
                    d   :'M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z',
                    fill:'#FFF',
                  },
                ), s.createElement(
                  'path', {
                    d   :'M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z',
                    fill:'#555AB9',
                  },
                ), s.createElement(
                  'path', {
                    d   :'M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z',
                    fill:'#91BAF8',
                  },
                ),
              ),
            ), s.createElement(
              'h1', null, 'Acme',
            ),
          ),
        ),
      )
    }Promise.resolve().then(a.t.bind(
      a, 406, 19,
    )), r.propTypes = {
      primary        :n.bool,
      backgroundColor:n.string,
      size           :n.oneOf([
        'small',
        'medium',
        'large',
      ]),
      label  :n.string.isRequired,
      onClick:n.func,
    }, r.defaultProps = {
      backgroundColor:null,
      primary        :!1,
      size           :'medium',
      onClick        :void 0,
    }, o.propTypes = {
      user:n.shape({
        name:n.string.isRequired,
      }),
      onLogin        :n.func,
      onLogout       :n.func,
      onCreateAccount:n.func,
    }, o.defaultProps = {
      user:null,
    }; const l = a(395); const u = s.createContext({}); const c = () => (0, s.useContext)(u); const m = (
      e, t,
    ) => (t.type === 'UPDATE_STATE' ? {
      ...e,
      ...t.payload,
    } : e); function d({
      children:e, initialTheme:t, value:a, initialState:n,
    }) {
      const i = (0, l.F)(t); const [r, o] = (0, s.useReducer)(
        m, n,
      ); return s.createElement(
        u.Provider, {
          value:{
            ...a,
            ...i,
          },
        }, e,
      )
    }d.propTypes = {
      children    :n.node,
      initialTheme:n.string,
      value       :n.shape({
        APP:n.shape({
          NAME         :n.string.isRequired,
          CANONICAL    :n.string.isRequired,
          SUPPORT_EMAIL:n.string,
          TITLE_SUFFIX :n.string,
        }),
        SOCIAL:n.shape({
          FACEBOOK :n.string,
          INSTAGRAM:n.string,
          YOUTUBE  :n.string,
        }),
        CONSTANTS:n.shape({}),
      }).isRequired,
      initialState:n.objectOf(n.string),
    }, d.defaultProps = {
      initialState:{},
    }; var h = d
  },
  395:(
    e, t, a,
  ) => {
    a.d(
      t, {
        b:() => r,
        F:() => n,
      },
    ); const s = a(689); function n(
      e, t = {},
    ) {
      const {
        storageKey:a = 'theme', defaultMap:n = {
          dark :'dark-theme',
          light:'light-theme',
        },
      } = t; const i = typeof window === 'object'; const r = () => (window.matchMedia('(prefers-color-scheme: dark)').matches ? n.dark : n.light); const [o, l] = (0, s.useState)(!!i && window.localStorage.getItem(a) && !0); const u = (0, s.useCallback)(
        (() => { if (i) { const t = window.localStorage.getItem(a); return t ? (l(!1), t) : (l(!0), r() || e) } return e }), [
          e,
          i,
          a,
        ],
      ); const [c, m] = (0, s.useState)((() => u())); (0, s.useEffect)(
        (() => {
          i && c && window.localStorage.setItem(
            a, c,
          )
        }), [c, a],
      ), (0, s.useEffect)(
        (() => { if (i) { const e = () => { const e = r(); window.localStorage.getItem(a) || (l(!0), m(e)) }; const t = window.matchMedia('(prefers-color-scheme: dark)'); return t.addListener(e), () => t.removeListener(e) } }), [a],
      ); const d = (0, s.useCallback)(
        (() => { m(void 0), i && (window.localStorage.removeItem(a), l(!0)) }), [
          e,
          i,
          a,
        ],
      ); const h = (0, s.useCallback)(
        ((e) => c === e), [c],
      ); return {
        theme        :c,
        setTheme     :m,
        isTheme      :h,
        isSystemTheme:o,
        resetTheme   :d,
      }
    } const i = typeof window === 'object'; function r(
      e, t, a = {},
    ) {
      const {
        storageKey:n = 'locale',
      } = a; const r = (0, s.useCallback)(
        (() => (i && navigator.language ? navigator.language.slice(
          0, 2,
        ) : e)), [e],
      ); const o = (0, s.useCallback)(
        (() => (i ? window.localStorage.getItem(n) || r() : e)), [
          r,
          e,
          n,
        ],
      ); const [l, u] = (0, s.useState)(o); const [c, m] = (0, s.useState)({}); const d = (0, s.useCallback)(
        (() => { const e = r(); u(e), i && window.localStorage.removeItem(n) }), [r, n],
      ); const h = (0, s.useCallback)(
        ((e) => l === e), [l],
      ); return (0, s.useEffect)(
        (() => {
          i && window.localStorage.setItem(
            n, l,
          )
        }), [l, n],
      ), (0, s.useEffect)(
        (() => { i && (async function () { const e = await t(l); m(e.default) }()) }), [l],
      ), {
        locale     :l,
        setLocale  :u,
        isLocale   :h,
        messages   :c,
        resetLocale:d,
      }
    }
  },
  790:(e) => { e.exports = JSON.parse('{"IEmYNF":[{"type":0,"value":"This website is currently not available"}],"M/1qd7":[{"type":0,"value":"The page you requested is not found."}],"dUEMP6":[{"type":0,"value":"Welcome to the site, "},{"type":1,"value":"name"},{"type":0,"value":"!!!"}],"rxNddi":[{"type":0,"value":"Homepage"}]}') },
  563:(e) => { e.exports = JSON.parse('{"IEmYNF":[{"type":0,"value":"Este sitio web actualmente no está disponible"}],"M/1qd7":[{"type":0,"value":"La página que solicitaste no se encuentra."}],"dUEMP6":[{"type":0,"value":"¡Bienvenido al sitio, "},{"type":1,"value":"name"},{"type":0,"value":"!!!"}],"rxNddi":[{"type":0,"value":"Página principal"}]}') },
}; const s = {}; function n(e) {
  const t = s[e]; if (void 0 !== t) return t.exports; const i = s[e] = {
    exports:{},
  }; return a[e](
    i, i.exports, n,
  ), i.exports
}n.m = a, n.n = (e) => {
  const t = e && e.__esModule ? () => e.default : () => e; return n.d(
    t, {
      a:t,
    },
  ), t
}, t = Object.getPrototypeOf ? (e) => Object.getPrototypeOf(e) : (e) => e.__proto__, n.t = function (
  a, s,
) {
  if (1 & s && (a = this(a)), 8 & s) return a; if (typeof a === 'object' && a) { if (4 & s && a.__esModule) return a; if (16 & s && typeof a.then === 'function') return a } const i = Object.create(null); n.r(i); const r = {}; e = e || [
    null,
    t({}),
    t([]),
    t(t),
  ]; for (let o = 2 & s && a; typeof o === 'object' && !~e.indexOf(o); o = t(o))Object.getOwnPropertyNames(o).forEach(((e) => r[e] = () => a[e])); return r.default = () => a, n.d(
    i, r,
  ), i
}, n.d = (
  e, t,
) => {
  for (const a in t) {
    n.o(
      t, a,
    ) && !n.o(
      e, a,
    ) && Object.defineProperty(
      e, a, {
        enumerable:!0,
        get       :t[a],
      },
    )
  }
}, n.o = (
  e, t,
) => Object.prototype.hasOwnProperty.call(
  e, t,
), n.r = (e) => {
  typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(
    e, Symbol.toStringTag, {
      value:'Module',
    },
  ), Object.defineProperty(
    e, '__esModule', {
      value:!0,
    },
  )
}; const i = n(34).Z; export {
  i as default,
}
