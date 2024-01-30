/*! For license information please see legacyBatch.js.js.LICENSE.txt */
"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[603],{2230:(t,e,r)=>{function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t||{},r=e.batchTimeout||0,n=e.allowMutations||!1,o=e.batchUrl||"/graphql/batch",i=e.maxBatchSize||p,u={},s={};return e.method&&(s.method=e.method),e.credentials&&(s.credentials=e.credentials),e.mode&&(s.mode=e.mode),e.cache&&(s.cache=e.cache),e.redirect&&(s.redirect=e.redirect),e.headers&&(s.headersOrThunk=e.headers),function(t){return function(e){if(e.isMutation()&&!n)return t(e);if(!(e instanceof a.default))throw new c.RRNLBatchMiddlewareError("Relay batch middleware accepts only simple RelayRequest. Did you add batchMiddleware twice?");return e.isFormData()?t(e):function(t,e,r){var n=r.singleton,o=t.fetchOpts.body.length;return o?(n.batcher&&n.batcher.acceptRequests||(n.batcher=d(e,r)),n.batcher.bodySize+o+1>r.maxBatchSize&&(n.batcher=d(e,r)),n.batcher.bodySize+=o+1,new Promise((function(e,r){var o=t.getID(),i=n.batcher.requestMap,a={req:t,completeOk:function(t){a.done=!0,e(t),a.duplicates.forEach((function(e){return e.completeOk(t)}))},completeErr:function(t){a.done=!0,r(t),a.duplicates.forEach((function(e){return e.completeErr(t)}))},done:!1,duplicates:[]};i[o]?i[o].duplicates.push(a):i[o]=a}))):e(t)}(e,t,{batchTimeout:r,batchUrl:o,singleton:u,maxBatchSize:i,fetchOpts:s})}}};var o=r(2600),i=s(r(1600)),a=s(r(551)),c=r(5745),u=["headersOrThunk"];function s(t){return t&&t.__esModule?t:{default:t}}function l(){l=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var i=e&&e.prototype instanceof d?e:d,a=Object.create(i.prototype),c=new S(n||[]);return o(a,"_invoke",{value:E(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=h;var p={};function d(){}function y(){}function v(){}var m={};s(m,a,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(j([])));b&&b!==e&&r.call(b,a)&&(m=b);var w=v.prototype=d.prototype=Object.create(m);function O(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function i(o,a,c,u){var s=f(t[o],t,a);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==n(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){i("next",t,c,u)}),(function(t){i("throw",t,c,u)})):e.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return i("throw",t,c,u)}))}u(s.arg)}var a;o(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){i(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function E(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function j(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:q}}function q(){return{value:void 0,done:!0}}return y.prototype=v,o(w,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:y,configurable:!0}),y.displayName=s(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},O(x.prototype),s(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(h(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(w),s(w,u,"Generator"),s(w,a,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=j,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function h(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function f(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}var p=102400;function d(t,e){var r={bodySize:2,requestMap:{},acceptRequests:!0};return setTimeout((function(){r.acceptRequests=!1,function(t,e,r){return y.apply(this,arguments)}(r.requestMap,t,e).then((function(){return v(r.requestMap)})).catch((function(){return v(r.requestMap)}))}),e.batchTimeout),r}function y(){var t;return t=l().mark((function t(e,r,n){var a,s,f,p,d,y,v,g,b,w;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(1!==(a=Object.keys(e)).length){t.next=11;break}return s=e[a[0]],t.next=5,r(s.req);case 5:return f=t.sent,s.completeOk(f),s.duplicates.forEach((function(t){return t.completeOk(f)})),t.abrupt("return",f);case 11:if(!(a.length>1)){t.next=37;break}return p=new i.default(a.map((function(t){return e[t].req}))),t.next=15,(0,o.isFunction)(n.batchUrl)?n.batchUrl(e):n.batchUrl;case 15:if(d=t.sent,p.setFetchOption("url",d),y=n.fetchOpts,v=y.headersOrThunk,g=h(y,u),p.setFetchOptions(g),!v){t.next=24;break}return t.next=22,(0,o.isFunction)(v)?v(p):v;case 22:b=t.sent,p.setFetchOption("headers",b);case 24:return t.prev=24,t.next=27,r(p);case 27:if((w=t.sent)&&Array.isArray(w.json)){t.next=30;break}throw new c.RRNLBatchMiddlewareError("Wrong response from server. Did your server support batch request?");case 30:return w.json.forEach((function(t){if(t){var r=e[t.id];if(r){var n=m(w,t);r.completeOk(n)}}})),t.abrupt("return",w);case 34:t.prev=34,t.t0=t.catch(24),a.forEach((function(r){e[r].completeErr(t.t0)}));case 37:return t.abrupt("return",Promise.resolve());case 38:case"end":return t.stop()}}),t,null,[[24,34]])})),y=function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){f(i,n,o,a,c,"next",t)}function c(t){f(i,n,o,a,c,"throw",t)}a(void 0)}))},y.apply(this,arguments)}function v(t){Object.keys(t).forEach((function(e){var r=t[e];r.done||r.completeErr(new c.RRNLBatchMiddlewareError("Server does not return response for request with id ".concat(e," \n")+'Response should have following shape { "id": "'.concat(e,'", "data": {} }')))}))}function m(t,e){var r=e.payload||e,n=t.clone();return n.processJsonData(r),n}}}]);
//# sourceMappingURL=legacyBatch.js.js.map?98f58