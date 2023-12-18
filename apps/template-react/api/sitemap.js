/*! For license information please see sitemap.js.LICENSE.txt */
var t = {
  d:(
    r, e,
  ) => {
    for (const n in e) {
      t.o(
        e, n,
      ) && !t.o(
        r, n,
      ) && Object.defineProperty(
        r, n, {
          enumerable:!0,
          get       :e[n],
        },
      )
    }
  },
  o:(
    t, r,
  ) => Object.prototype.hasOwnProperty.call(
    t, r,
  ),
}; const r = {}; t.d(
  r, {
    Z:() => l,
  },
); const e = require('date-fns')

function n(t) { return n = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (t) { return typeof t } : function (t) { return t && typeof Symbol === 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t }, n(t) } function o() {
  o = function () { return r }; let t; var r = {}; const e = Object.prototype; const i = e.hasOwnProperty; const a = Object.defineProperty || function (
    t, r, e,
  ) { t[r] = e.value }; const c = typeof Symbol === 'function' ? Symbol : {}; const u = c.iterator || '@@iterator'; const l = c.asyncIterator || '@@asyncIterator'; const f = c.toStringTag || '@@toStringTag'; function s(
    t, r, e,
  ) {
    return Object.defineProperty(
      t, r, {
        value       :e,
        enumerable  :!0,
        configurable:!0,
        writable    :!0,
      },
    ), t[r]
  } try {
    s(
      {}, '',
    )
  } catch (t) {
    s = function (
      t, r, e,
    ) { return t[r] = e }
  } function h(
    t, r, e, n,
  ) {
    const o = r && r.prototype instanceof w ? r : w; const i = Object.create(o.prototype); const c = new T(n || []); return a(
      i, '_invoke', {
        value:S(
          t, e, c,
        ),
      },
    ), i
  } function p(
    t, r, e,
  ) {
    try {
      return {
        type:'normal',
        arg :t.call(
          r, e,
        ),
      }
    } catch (t) {
      return {
        type:'throw',
        arg :t,
      }
    }
  }r.wrap = h; const y = 'suspendedStart'; const v = 'suspendedYield'; const d = 'executing'; const m = 'completed'; const g = {}; function w() {} function b() {} function x() {} let L = {}; s(
    L, u, (function () { return this }),
  ); const E = Object.getPrototypeOf; const O = E && E(E(q([]))); O && O !== e && i.call(
    O, u,
  ) && (L = O); const j = x.prototype = w.prototype = Object.create(L); function _(t) {
    [
      'next',
      'throw',
      'return',
    ].forEach(((r) => {
      s(
        t, r, (function (t) {
          return this._invoke(
            r, t,
          )
        }),
      )
    }))
  } function P(
    t, r,
  ) {
    function e(
      o, a, c, u,
    ) {
      const l = p(
        t[o], t, a,
      ); if (l.type !== 'throw') {
        const f = l.arg; const s = f.value; return s && n(s) == 'object' && i.call(
          s, '__await',
        ) ? r.resolve(s.__await).then(
            ((t) => {
              e(
                'next', t, c, u,
              )
            }), ((t) => {
              e(
                'throw', t, c, u,
              )
            }),
          ) : r.resolve(s).then(
            ((t) => { f.value = t, c(f) }), ((t) => e(
              'throw', t, c, u,
            )),
          )
      }u(l.arg)
    } let o; a(
      this, '_invoke', {
        value(
          t, n,
        ) {
          function i() {
            return new r(((
              r, o,
            ) => {
              e(
                t, n, r, o,
              )
            }))
          } return o = o ? o.then(
            i, i,
          ) : i()
        },
      },
    )
  } function S(
    r, e, n,
  ) {
    let o = y; return function (
      i, a,
    ) {
      if (o === d) throw new Error('Generator is already running'); if (o === m) {
        if (i === 'throw') throw a; return {
          value:t,
          done :!0,
        }
      } for (n.method = i, n.arg = a; ;) {
        const c = n.delegate; if (c) {
          const u = k(
            c, n,
          ); if (u) { if (u === g) continue; return u }
        } if (n.method === 'next')n.sent = n._sent = n.arg; else if (n.method === 'throw') { if (o === y) throw o = m, n.arg; n.dispatchException(n.arg) } else {
          n.method === 'return' && n.abrupt(
            'return', n.arg,
          )
        } o = d; const l = p(
          r, e, n,
        ); if (l.type === 'normal') {
          if (o = n.done ? m : v, l.arg === g) continue; return {
            value:l.arg,
            done :n.done,
          }
        }l.type === 'throw' && (o = m, n.method = 'throw', n.arg = l.arg)
      }
    }
  } function k(
    r, e,
  ) {
    const n = e.method; const o = r.iterator[n]; if (o === t) {
      return e.delegate = null, n === 'throw' && r.iterator.return && (e.method = 'return', e.arg = t, k(
        r, e,
      ), e.method === 'throw') || n !== 'return' && (e.method = 'throw', e.arg = new TypeError(`The iterator does not provide a '${n}' method`)), g
    } const i = p(
      o, r.iterator, e.arg,
    ); if (i.type === 'throw') return e.method = 'throw', e.arg = i.arg, e.delegate = null, g; const a = i.arg; return a ? a.done ? (e[r.resultName] = a.value, e.next = r.nextLoc, e.method !== 'return' && (e.method = 'next', e.arg = t), e.delegate = null, g) : a : (e.method = 'throw', e.arg = new TypeError('iterator result is not an object'), e.delegate = null, g)
  } function G(t) {
    const r = {
      tryLoc:t[0],
    }; 1 in t && (r.catchLoc = t[1]), 2 in t && (r.finallyLoc = t[2], r.afterLoc = t[3]), this.tryEntries.push(r)
  } function N(t) { const r = t.completion || {}; r.type = 'normal', delete r.arg, t.completion = r } function T(t) {
    this.tryEntries = [
      {
        tryLoc:'root',
      },
    ], t.forEach(
      G, this,
    ), this.reset(!0)
  } function q(r) {
    if (r || r === '') {
      const e = r[u]; if (e) return e.call(r); if (typeof r.next === 'function') return r; if (!isNaN(r.length)) {
        let o = -1; const a = function e() {
          for (;++o < r.length;) {
            if (i.call(
              r, o,
            )) return e.value = r[o], e.done = !1, e
          } return e.value = t, e.done = !0, e
        }; return a.next = a
      }
    } throw new TypeError(`${n(r)} is not iterable`)
  } return b.prototype = x, a(
    j, 'constructor', {
      value       :x,
      configurable:!0,
    },
  ), a(
    x, 'constructor', {
      value       :b,
      configurable:!0,
    },
  ), b.displayName = s(
    x, f, 'GeneratorFunction',
  ), r.isGeneratorFunction = function (t) { const r = typeof t === 'function' && t.constructor; return !!r && (r === b || (r.displayName || r.name) === 'GeneratorFunction') }, r.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(
      t, x,
    ) : (t.__proto__ = x, s(
      t, f, 'GeneratorFunction',
    )), t.prototype = Object.create(j), t
  }, r.awrap = function (t) {
    return {
      __await:t,
    }
  }, _(P.prototype), s(
    P.prototype, l, (function () { return this }),
  ), r.AsyncIterator = P, r.async = function (
    t, e, n, o, i,
  ) {
    void 0 === i && (i = Promise); const a = new P(
      h(
        t, e, n, o,
      ), i,
    ); return r.isGeneratorFunction(e) ? a : a.next().then(((t) => (t.done ? t.value : a.next())))
  }, _(j), s(
    j, f, 'Generator',
  ), s(
    j, u, (function () { return this }),
  ), s(
    j, 'toString', (() => '[object Generator]'),
  ), r.keys = function (t) { const r = Object(t); const e = []; for (const n in r)e.push(n); return e.reverse(), function t() { for (;e.length;) { const n = e.pop(); if (n in r) return t.value = n, t.done = !1, t } return t.done = !0, t } }, r.values = q, T.prototype = {
    constructor:T,
    reset(r) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = 'next', this.arg = t, this.tryEntries.forEach(N), !r) {
        for (const e in this) {
          e.charAt(0) === 't' && i.call(
            this, e,
          ) && !isNaN(+e.slice(1)) && (this[e] = t)
        }
      }
    },
    stop() { this.done = !0; const t = this.tryEntries[0].completion; if (t.type === 'throw') throw t.arg; return this.rval },
    dispatchException(r) {
      if (this.done) throw r; const e = this; function n(
        n, o,
      ) { return c.type = 'throw', c.arg = r, e.next = n, o && (e.method = 'next', e.arg = t), !!o } for (let o = this.tryEntries.length - 1; o >= 0; --o) {
        const a = this.tryEntries[o]; var c = a.completion; if (a.tryLoc === 'root') return n('end'); if (a.tryLoc <= this.prev) {
          const u = i.call(
            a, 'catchLoc',
          ); const l = i.call(
            a, 'finallyLoc',
          ); if (u && l) {
            if (this.prev < a.catchLoc) {
              return n(
                a.catchLoc, !0,
              )
            } if (this.prev < a.finallyLoc) return n(a.finallyLoc)
          } else if (u) {
            if (this.prev < a.catchLoc) {
              return n(
                a.catchLoc, !0,
              )
            }
          } else { if (!l) throw new Error('try statement without catch or finally'); if (this.prev < a.finallyLoc) return n(a.finallyLoc) }
        }
      }
    },
    abrupt(
      t, r,
    ) {
      for (let e = this.tryEntries.length - 1; e >= 0; --e) {
        const n = this.tryEntries[e]; if (n.tryLoc <= this.prev && i.call(
          n, 'finallyLoc',
        ) && this.prev < n.finallyLoc) { var o = n; break }
      }o && (t === 'break' || t === 'continue') && o.tryLoc <= r && r <= o.finallyLoc && (o = null); const a = o ? o.completion : {}; return a.type = t, a.arg = r, o ? (this.method = 'next', this.next = o.finallyLoc, g) : this.complete(a)
    },
    complete(
      t, r,
    ) { if (t.type === 'throw') throw t.arg; return t.type === 'break' || t.type === 'continue' ? this.next = t.arg : t.type === 'return' ? (this.rval = this.arg = t.arg, this.method = 'return', this.next = 'end') : t.type === 'normal' && r && (this.next = r), g },
    finish(t) {
      for (let r = this.tryEntries.length - 1; r >= 0; --r) {
        const e = this.tryEntries[r]; if (e.finallyLoc === t) {
          return this.complete(
            e.completion, e.afterLoc,
          ), N(e), g
        }
      }
    },
    catch(t) { for (let r = this.tryEntries.length - 1; r >= 0; --r) { const e = this.tryEntries[r]; if (e.tryLoc === t) { const n = e.completion; if (n.type === 'throw') { var o = n.arg; N(e) } return o } } throw new Error('illegal catch attempt') },
    delegateYield(
      r, e, n,
    ) {
      return this.delegate = {
        iterator  :q(r),
        resultName:e,
        nextLoc   :n,
      }, this.method === 'next' && (this.arg = t), g
    },
  }, r
} function i(
  t, r, e, n, o, i, a,
) {
  try { var c = t[i](a); var u = c.value } catch (t) { return void e(t) }c.done ? r(u) : Promise.resolve(u).then(
    n, o,
  )
} const a = 'https://domain.com'; const c = ['/', '/pricing']; const u = function () {
  const t = []; return c.forEach(((r) => {
    t.push({
      loc       :r,
      lastmod   :new Date(),
      priority  :1,
      changefreq:'weekly',
    })
  })), t
}; const l = (function () {
  let t; const r = (t = o().mark((function t(
    r, n,
  ) {
    let i; let c; return o().wrap(
      ((t) => {
        for (;;) {
          switch (t.prev = t.next) {
            case 0: return i = u(), c = i.map(((t) => {
              const r = t.loc; const n = t.lastmod; const o = t.changefreq; const i = t.priority; return {
                loc:r.length ? new URL(
                  r, a,
                ).href : a,
                lastmod:(0, e.format)(
                  n, 'yyyy-MM-dd',
                ),
                changefreq:o,
                priority  :i,
              }
            })), n.setHeader(
              'Content-Type', 'text/xml',
            ), t.abrupt(
              'return', n.send('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n</urlset>\n'.replace(
                '</urlset>', `${c.map(((t) => {
                  const r = t.loc; const e = t.lastmod; const n = t.changefreq; const o = t.priority; return '<url>   \n  <loc>'.concat(
                    r, '</loc>\n  <lastmod>',
                  ).concat(
                    e, '</lastmod>\n  <changefreq>',
                  ).concat(
                    n, '</changefreq>\n  <priority>',
                  ).concat(
                    o, '</priority>\n</url>',
                  )
                })).join('\n')}\n</urlset>`,
              )),
            ); case 4: case 'end': return t.stop()
          }
        }
      }), t,
    )
  })), function () {
    const r = this; const e = arguments; return new Promise(((
      n, o,
    ) => {
      const a = t.apply(
        r, e,
      ); function c(t) {
        i(
          a, n, o, c, u, 'next', t,
        )
      } function u(t) {
        i(
          a, n, o, c, u, 'throw', t,
        )
      }c(void 0)
    }))
  }); return function (
    t, e,
  ) {
    return r.apply(
      this, arguments,
    )
  }
}()); const f = r.Z; export {
  f as default,
}
