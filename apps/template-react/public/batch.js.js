/*! For license information please see batch.js.js.LICENSE.txt */
"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[757],{5745:(t,e,r)=>{function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.RRNLBatchMiddlewareError=void 0,e.default=function(t){var e=t||{},r=e.batchTimeout||0,n=e.allowMutations||!1,o=e.batchUrl||"/graphql/batch",i=e.maxBatchSize||y,a={},u={};return e.method&&(u.method=e.method),e.credentials&&(u.credentials=e.credentials),e.mode&&(u.mode=e.mode),e.cache&&(u.cache=e.cache),e.redirect&&(u.redirect=e.redirect),e.headers&&(u.headersOrThunk=e.headers),function(t){return function(e){if(e.isMutation()&&!n)return t(e);if(!(e instanceof c.default))throw new v("Relay batch middleware accepts only simple RelayRequest. Did you add batchMiddleware twice?");return e.isFormData()||e.cacheConfig.skipBatch?t(e):function(t,e,r){var n=r.singleton,o=t.getBody().length;return o?(n.batcher&&n.batcher.acceptRequests||(n.batcher=m(e,r)),n.batcher.bodySize+o+1>r.maxBatchSize&&(n.batcher=m(e,r)),n.batcher.bodySize+=o+1,new Promise((function(e,r){var o=n.batcher.requestList,i={req:t,completeOk:function(t){i.done=!0,e(t),i.duplicates.forEach((function(e){return e.completeOk(t)}))},completeErr:function(t){i.done=!0,r(t),i.duplicates.forEach((function(e){return e.completeErr(t)}))},done:!1,duplicates:[]},c=o.findIndex((function(e){return t.getBody()===e.req.getBody()}));-1!==c?o[c].duplicates.push(i):o.push(i)}))):e(t)}(e,t,{batchTimeout:r,batchUrl:o,singleton:a,maxBatchSize:i,fetchOpts:u})}}};var o=r(2600),i=s(r(1600)),c=s(r(551)),a=s(r(1934)),u=["headersOrThunk"];function s(t){return t&&t.__esModule?t:{default:t}}function f(){f=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof d?e:d,c=Object.create(i.prototype),a=new S(n||[]);return o(c,"_invoke",{value:x(t,r,a)}),c}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var p={};function d(){}function y(){}function v(){}var m={};s(m,c,(function(){return this}));var b=Object.getPrototypeOf,g=b&&b(b(k([])));g&&g!==e&&r.call(g,c)&&(m=g);var w=v.prototype=d.prototype=Object.create(m);function O(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function i(o,c,a,u){var s=h(t[o],t,c);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==n(l)&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){i("next",t,a,u)}),(function(t){i("throw",t,a,u)})):e.resolve(l).then((function(t){f.value=t,a(f)}),(function(t){return i("throw",t,a,u)}))}u(s.arg)}var c;o(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){i(t,r,e,n)}))}return c=c?c.then(n,n):n()}})}function x(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var a=L(c,r);if(a){if(a===p)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function k(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return y.prototype=v,o(w,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:y,configurable:!0}),y.displayName=s(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},O(E.prototype),s(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var c=new E(l(e,r,n,o),i);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},O(w),s(w,u,"Generator"),s(w,c,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return c.type="throw",c.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var a=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(a&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function l(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function h(t,e,r,n,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void r(t)}a.done?e(u):Promise.resolve(u).then(n,o)}function p(t,e){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},p(t,e)}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}var y=102400,v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&p(t,e)}(c,t);var e,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=d(r);if(o){var i=d(this).constructor;t=Reflect.construct(e,arguments,i)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function c(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(e=i.call(this,t)).name="RRNLBatchMiddlewareError",e}return e=c,Object.defineProperty(e,"prototype",{writable:!1}),e}(a.default);function m(t,e){var r={bodySize:2,requestList:[],acceptRequests:!0};return setTimeout((function(){r.acceptRequests=!1,function(t,e,r){return b.apply(this,arguments)}(r.requestList,t,e).then((function(){return g(r.requestList)})).catch((function(t){var e,n;t&&"AbortError"===t.name?(e=r.requestList,n=t,e.forEach((function(t){return t.completeErr(n)}))):g(r.requestList)}))}),e.batchTimeout),r}function b(){var t;return t=f().mark((function t(e,r,n){var c,a,s,h,p,d,y,m,b;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(1!==e.length){t.next=10;break}return c=e[0],t.next=4,r(c.req);case 4:return a=t.sent,c.completeOk(a),c.duplicates.forEach((function(t){return t.completeOk(a)})),t.abrupt("return",a);case 10:if(!(e.length>1)){t.next=36;break}return s=new i.default(e.map((function(t){return t.req}))),t.next=14,(0,o.isFunction)(n.batchUrl)?n.batchUrl(e):n.batchUrl;case 14:if(h=t.sent,s.setFetchOption("url",h),p=n.fetchOpts,d=p.headersOrThunk,y=l(p,u),s.setFetchOptions(y),!d){t.next=23;break}return t.next=21,(0,o.isFunction)(d)?d(s):d;case 21:m=t.sent,s.setFetchOption("headers",m);case 23:return t.prev=23,t.next=26,r(s);case 26:if((b=t.sent)&&Array.isArray(b.json)){t.next=29;break}throw new v("Wrong response from server. Did your server support batch request?");case 29:return b.json.forEach((function(t,r){if(t){var n=e[r];if(n){var o=w(b,t);n.completeOk(o)}}})),t.abrupt("return",b);case 33:t.prev=33,t.t0=t.catch(23),e.forEach((function(e){return e.completeErr(t.t0)}));case 36:return t.abrupt("return",Promise.resolve());case 37:case"end":return t.stop()}}),t,null,[[23,33]])})),b=function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function c(t){h(i,n,o,c,a,"next",t)}function a(t){h(i,n,o,c,a,"throw",t)}c(void 0)}))},b.apply(this,arguments)}function g(t){t.forEach((function(e,r){e.done||e.completeErr(new v("Server does not return response for request at index ".concat(r,".\n")+"Response should have an array with ".concat(t.length," item(s).")))}))}function w(t,e){var r=e.payload||e,n=t.clone();return n.processJsonData(r),n}e.RRNLBatchMiddlewareError=v}}]);
//# sourceMappingURL=batch.js.js.map?83d17