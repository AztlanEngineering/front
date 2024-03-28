/*! For license information please see vendor.relay-runtime~dfe82965.js.LICENSE.txt */
"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[854],{2980:(t,e,i)=>{function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function r(){r=function(){return e};var t,e={},i=Object.prototype,o=i.hasOwnProperty,s=Object.defineProperty||function(t,e,i){t[e]=i.value},a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function h(t,e,i){return Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,i){return t[e]=i}}function d(t,e,i,n){var r=e&&e.prototype instanceof y?e:y,o=Object.create(r.prototype),a=new P(n||[]);return s(o,"_invoke",{value:k(t,i,a)}),o}function p(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(t){return{type:"throw",arg:t}}}e.wrap=d;var f="suspendedStart",_="suspendedYield",v="executing",g="completed",m={};function y(){}function S(){}function b(){}var w={};h(w,u,(function(){return this}));var O=Object.getPrototypeOf,E=O&&O(O(x([])));E&&E!==i&&o.call(E,u)&&(w=E);var R=b.prototype=y.prototype=Object.create(w);function D(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function I(t,e){function i(r,s,a,u){var l=p(t[r],t,s);if("throw"!==l.type){var c=l.arg,h=c.value;return h&&"object"==n(h)&&o.call(h,"__await")?e.resolve(h.__await).then((function(t){i("next",t,a,u)}),(function(t){i("throw",t,a,u)})):e.resolve(h).then((function(t){c.value=t,a(c)}),(function(t){return i("throw",t,a,u)}))}u(l.arg)}var r;s(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,r){i(t,n,e,r)}))}return r=r?r.then(o,o):o()}})}function k(e,i,n){var r=f;return function(o,s){if(r===v)throw new Error("Generator is already running");if(r===g){if("throw"===o)throw s;return{value:t,done:!0}}for(n.method=o,n.arg=s;;){var a=n.delegate;if(a){var u=T(a,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=v;var l=p(e,i,n);if("normal"===l.type){if(r=n.done?g:_,l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=g,n.method="throw",n.arg=l.arg)}}}function T(e,i){var n=i.method,r=e.iterator[n];if(r===t)return i.delegate=null,"throw"===n&&e.iterator.return&&(i.method="return",i.arg=t,T(e,i),"throw"===i.method)||"return"!==n&&(i.method="throw",i.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var o=p(r,e.iterator,i.arg);if("throw"===o.type)return i.method="throw",i.arg=o.arg,i.delegate=null,m;var s=o.arg;return s?s.done?(i[e.resultName]=s.value,i.next=e.nextLoc,"return"!==i.method&&(i.method="next",i.arg=t),i.delegate=null,m):s:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,m)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function x(e){if(e||""===e){var i=e[u];if(i)return i.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,s=function i(){for(;++r<e.length;)if(o.call(e,r))return i.value=e[r],i.done=!1,i;return i.value=t,i.done=!0,i};return s.next=s}}throw new TypeError(n(e)+" is not iterable")}return S.prototype=b,s(R,"constructor",{value:b,configurable:!0}),s(b,"constructor",{value:S,configurable:!0}),S.displayName=h(b,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===S||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,h(t,c,"GeneratorFunction")),t.prototype=Object.create(R),t},e.awrap=function(t){return{__await:t}},D(I.prototype),h(I.prototype,l,(function(){return this})),e.AsyncIterator=I,e.async=function(t,i,n,r,o){void 0===o&&(o=Promise);var s=new I(d(t,i,n,r),o);return e.isGeneratorFunction(i)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},D(R),h(R,c,"Generator"),h(R,u,(function(){return this})),h(R,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),i=[];for(var n in e)i.push(n);return i.reverse(),function t(){for(;i.length;){var n=i.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=x,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var i in this)"t"===i.charAt(0)&&o.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var i=this;function n(n,r){return a.type="throw",a.arg=e,i.next=n,r&&(i.method="next",i.arg=t),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var s=this.tryEntries[r],a=s.completion;if("root"===s.tryLoc)return n("end");if(s.tryLoc<=this.prev){var u=o.call(s,"catchLoc"),l=o.call(s,"finallyLoc");if(u&&l){if(this.prev<s.catchLoc)return n(s.catchLoc,!0);if(this.prev<s.finallyLoc)return n(s.finallyLoc)}else if(u){if(this.prev<s.catchLoc)return n(s.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return n(s.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var n=this.tryEntries[i];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var r=n;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var s=r?r.completion:{};return s.type=t,s.arg=e,r?(this.method="next",this.next=r.finallyLoc,m):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),L(i),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var n=i.completion;if("throw"===n.type){var r=n.arg;L(i)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,i,n){return this.delegate={iterator:x(e),resultName:i,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}var o=i(7272).default,s=o(i(6941)),a=o(i(2419)),u=i(7281),l=u.INTERNAL_ACTOR_IDENTIFIER_DO_NOT_USE,c=u.assertInternalActorIdentifier,h=(i(3001),i(4070)),d=i(5953),p=i(2364),f=i(4781),_=i(5504),v=i(2179),g=i(229),m=i(915),y=i(3859),S=i(6116),b=i(6116),w=b.ROOT_ID,O=b.ROOT_TYPE,E=i(8639).RecordResolverCache,R=i(6669),D=function(){function t(t,e){var i,n,r,o,s,u=this;(0,a.default)(this,"_gcStep",(function(){u._gcRun&&(u._gcRun.next().done?u._gcRun=null:u._gcScheduler(u._gcStep))})),this._currentWriteEpoch=0,this._gcHoldCounter=0,this._gcReleaseBufferSize=null!==(i=null==e?void 0:e.gcReleaseBufferSize)&&void 0!==i?i:10,this._gcRun=null,this._gcScheduler=null!==(n=null==e?void 0:e.gcScheduler)&&void 0!==n?n:d,this._getDataID=null!==(r=null==e?void 0:e.getDataID)&&void 0!==r?r:f,this._globalInvalidationEpoch=null,this._invalidationSubscriptions=new Set,this._invalidatedRecordIDs=new Set,this.__log=null!==(o=null==e?void 0:e.log)&&void 0!==o?o:null,this._queryCacheExpirationTime=null==e?void 0:e.queryCacheExpirationTime,this._operationLoader=null!==(s=null==e?void 0:e.operationLoader)&&void 0!==s?s:null,this._optimisticSource=null,this._recordSource=t,this._releaseBuffer=[],this._roots=new Map,this._shouldScheduleGC=!1,this._resolverCache=new E((function(){return u._getMutableRecordSource()})),this._storeSubscriptions=new y(null==e?void 0:e.log,this._resolverCache),this._updatedRecordIDs=new Set,this._shouldProcessClientComponents=null==e?void 0:e.shouldProcessClientComponents,function(t){if(!t.has(w)){var e=_.create(w,O);t.set(w,e)}}(this._recordSource)}var e=t.prototype;return e.getSource=function(){var t;return null!==(t=this._optimisticSource)&&void 0!==t?t:this._recordSource},e._getMutableRecordSource=function(){var t;return null!==(t=this._optimisticSource)&&void 0!==t?t:this._recordSource},e.check=function(t,e){var i,n,r,o,s=t.root,a=this._getMutableRecordSource(),u=this._globalInvalidationEpoch,h=this._roots.get(t.request.identifier),d=null!=h?h.epoch:null;if(null!=u&&(null==d||d<=u))return{status:"stale"};var f=null!==(i=null==e?void 0:e.handlers)&&void 0!==i?i:[],_=null!==(n=null==e?void 0:e.getSourceForActor)&&void 0!==n?n:function(t){return c(t),a},v=null!==(r=null==e?void 0:e.getTargetForActor)&&void 0!==r?r:function(t){return c(t),a};return function(t,e,i,n){var r=t.mostRecentlyInvalidatedAt,o=t.status;return"number"==typeof r&&(null==e||r>e)?{status:"stale"}:"missing"===o?{status:"missing"}:null!=i&&null!=n&&i<=Date.now()-n?{status:"stale"}:{status:"available",fetchTime:null!=i?i:null}}(p.check(_,v,null!==(o=null==e?void 0:e.defaultActorIdentifier)&&void 0!==o?o:l,s,f,this._operationLoader,this._getDataID,this._shouldProcessClientComponents),d,null==h?void 0:h.fetchTime,this._queryCacheExpirationTime)},e.retain=function(t){var e=this,i=t.request.identifier,n=!1,r=this._roots.get(i);return null!=r?(0===r.refCount&&(this._releaseBuffer=this._releaseBuffer.filter((function(t){return t!==i}))),r.refCount+=1):this._roots.set(i,{operation:t,refCount:1,epoch:null,fetchTime:null}),{dispose:function(){if(!n){n=!0;var t=e._roots.get(i);if(null!=t&&(t.refCount--,0===t.refCount)){var r=e._queryCacheExpirationTime;if(null!=t.fetchTime&&null!=r&&t.fetchTime<=Date.now()-r)e._roots.delete(i),e.scheduleGC();else if(e._releaseBuffer.push(i),e._releaseBuffer.length>e._gcReleaseBufferSize){var o=e._releaseBuffer.shift();e._roots.delete(o),e.scheduleGC()}}}}}},e.lookup=function(t){var e=this.getSource();return g.read(e,t,this._resolverCache)},e.notify=function(t,e){var i=this,n=this.__log;null!=n&&n({name:"store.notify.start",sourceOperation:t}),this._currentWriteEpoch++,!0===e&&(this._globalInvalidationEpoch=this._currentWriteEpoch),h.ENABLE_RELAY_RESOLVERS&&this._resolverCache.invalidateDataIDs(this._updatedRecordIDs);var r=this.getSource(),o=[];if(this._storeSubscriptions.updateSubscriptions(r,this._updatedRecordIDs,o,t),this._invalidationSubscriptions.forEach((function(t){i._updateInvalidationSubscription(t,!0===e)})),null!=n&&n({name:"store.notify.complete",sourceOperation:t,updatedRecordIDs:this._updatedRecordIDs,invalidatedRecordIDs:this._invalidatedRecordIDs}),this._updatedRecordIDs.clear(),this._invalidatedRecordIDs.clear(),null!=t){var s=t.request.identifier,a=this._roots.get(s);if(null!=a)a.epoch=this._currentWriteEpoch,a.fetchTime=Date.now();else if("query"===t.request.node.params.operationKind&&this._gcReleaseBufferSize>0&&this._releaseBuffer.length<this._gcReleaseBufferSize){var u={operation:t,refCount:0,epoch:this._currentWriteEpoch,fetchTime:Date.now()};this._releaseBuffer.push(s),this._roots.set(s,u)}}return o},e.publish=function(t,e){var i=this._getMutableRecordSource();!function(t,e,i,n,r,o){n&&n.forEach((function(n){var r,s=t.get(n),a=e.get(n);null!==a&&(r=null!=s?_.clone(s):null!=a?_.clone(a):null)&&(_.setValue(r,S.INVALIDATED_AT_KEY,i),o.add(n),t.set(n,r))}));for(var s=e.getRecordIDs(),a=0;a<s.length;a++){var u=s[a],l=e.get(u),c=t.get(u);if(l&&c){var h=_.update(c,l);h!==c&&(r.add(u),t.set(u,h))}else null===l?(t.delete(u),null!==c&&r.add(u)):l&&(t.set(u,l),r.add(u))}}(i,t,this._currentWriteEpoch+1,e,this._updatedRecordIDs,this._invalidatedRecordIDs);var n=this.__log;null!=n&&n({name:"store.publish",source:t,optimistic:i===this._optimisticSource})},e.subscribe=function(t,e){return this._storeSubscriptions.subscribe(t,e)},e.holdGC=function(){var t=this;return this._gcRun&&(this._gcRun=null,this._shouldScheduleGC=!0),this._gcHoldCounter++,{dispose:function(){t._gcHoldCounter>0&&(t._gcHoldCounter--,0===t._gcHoldCounter&&t._shouldScheduleGC&&(t.scheduleGC(),t._shouldScheduleGC=!1))}}},e.toJSON=function(){return"RelayModernStore()"},e.getEpoch=function(){return this._currentWriteEpoch},e.__getUpdatedRecordIDs=function(){return this._updatedRecordIDs},e.lookupInvalidationState=function(t){var e=this,i=new Map;return t.forEach((function(t){var n,r=e.getSource().get(t);i.set(t,null!==(n=_.getInvalidationEpoch(r))&&void 0!==n?n:null)})),i.set("global",this._globalInvalidationEpoch),{dataIDs:t,invalidations:i}},e.checkInvalidationState=function(t){var e=this.lookupInvalidationState(t.dataIDs).invalidations,i=t.invalidations;if(e.get("global")!==i.get("global"))return!0;var n,r=(0,s.default)(t.dataIDs);try{for(r.s();!(n=r.n()).done;){var o=n.value;if(e.get(o)!==i.get(o))return!0}}catch(t){r.e(t)}finally{r.f()}return!1},e.subscribeToInvalidationState=function(t,e){var i=this,n={callback:e,invalidationState:t};return this._invalidationSubscriptions.add(n),{dispose:function(){i._invalidationSubscriptions.delete(n)}}},e._updateInvalidationSubscription=function(t,e){var i=this,n=t.callback,r=t.invalidationState.dataIDs;(e||r.some((function(t){return i._invalidatedRecordIDs.has(t)})))&&n()},e.snapshot=function(){null!=this._optimisticSource&&R(!1);var t=this.__log;null!=t&&t({name:"store.snapshot"}),this._storeSubscriptions.snapshotSubscriptions(this.getSource()),this._gcRun&&(this._gcRun=null,this._shouldScheduleGC=!0),this._optimisticSource=v.create(this.getSource())},e.restore=function(){null==this._optimisticSource&&R(!1);var t=this.__log;null!=t&&t({name:"store.restore"}),this._optimisticSource=null,this._shouldScheduleGC&&this.scheduleGC(),this._storeSubscriptions.restoreSubscriptions()},e.scheduleGC=function(){this._gcHoldCounter>0?this._shouldScheduleGC=!0:this._gcRun||(this._gcRun=this._collect(),this._gcScheduler(this._gcStep))},e.__gc=function(){if(null==this._optimisticSource)for(var t=this._collect();!t.next().done;);},e._collect=r().mark((function t(){var e,i,n,o,a,u,l,c,h,d;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this._currentWriteEpoch,i=new Set,n=(0,s.default)(this._roots.values()),t.prev=4,n.s();case 6:if((o=n.n()).done){t.next=16;break}return a=o.value.operation,u=a.root,m.mark(this._recordSource,u,i,this._operationLoader,this._shouldProcessClientComponents),void(t.next=12);case 12:if(e===this._currentWriteEpoch){t.next=14;break}return t.abrupt("continue",0);case 14:t.next=6;break;case 16:t.next=21;break;case 18:t.prev=18,t.t0=t.catch(4),n.e(t.t0);case 21:return t.prev=21,n.f(),t.finish(21);case 24:if(null!=(l=this.__log)&&l({name:"store.gc",references:i}),0===i.size)this._recordSource.clear();else for(c=this._recordSource.getRecordIDs(),h=0;h<c.length;h++)d=c[h],i.has(d)||this._recordSource.remove(d);return t.abrupt("return");case 30:case"end":return t.stop()}}),t,this,[[4,18,21,24]])})),t}();t.exports=D},4837:(t,e,i)=>{var n=(0,i(7272).default)(i(6941)),r=i(6669),o=function(){function t(){this._ownersToPendingOperations=new Map,this._pendingOperationsToOwners=new Map,this._ownersToPendingPromise=new Map}var e=t.prototype;return e.update=function(t,e){if(0!==e.size){var i,r=t.identifier,o=new Set,s=(0,n.default)(e);try{for(s.s();!(i=s.n()).done;){var a=i.value.identifier,u=this._ownersToPendingOperations.get(a);null!=u?u.has(r)||(u.set(r,t),o.add(a)):(this._ownersToPendingOperations.set(a,new Map([[r,t]])),o.add(a))}}catch(t){s.e(t)}finally{s.f()}if(0!==o.size){var l,c=this._pendingOperationsToOwners.get(r)||new Set,h=(0,n.default)(o);try{for(h.s();!(l=h.n()).done;){var d=l.value;this._resolveOwnerResolvers(d),c.add(d)}}catch(t){h.e(t)}finally{h.f()}this._pendingOperationsToOwners.set(r,c)}}},e.complete=function(t){var e=t.identifier,i=this._pendingOperationsToOwners.get(e);if(null!=i){var r,o=new Set,s=new Set,a=(0,n.default)(i);try{for(a.s();!(r=a.n()).done;){var u=r.value,l=this._ownersToPendingOperations.get(u);l&&(l.delete(e),l.size>0?s.add(u):o.add(u))}}catch(t){a.e(t)}finally{a.f()}var c,h=(0,n.default)(o);try{for(h.s();!(c=h.n()).done;){var d=c.value;this._resolveOwnerResolvers(d),this._ownersToPendingOperations.delete(d)}}catch(t){h.e(t)}finally{h.f()}var p,f=(0,n.default)(s);try{for(f.s();!(p=f.n()).done;){var _=p.value;this._resolveOwnerResolvers(_)}}catch(t){f.e(t)}finally{f.f()}this._pendingOperationsToOwners.delete(e)}},e._resolveOwnerResolvers=function(t){var e=this._ownersToPendingPromise.get(t);null!=e&&e.resolve(),this._ownersToPendingPromise.delete(t)},e.getPendingOperationsAffectingOwner=function(t){var e=t.identifier,i=this._ownersToPendingOperations.get(e);if(null==i||0===i.size)return null;var n,o=this._ownersToPendingPromise.get(e);if(null!=o)return{promise:o.promise,pendingOperations:o.pendingOperations};var s=new Promise((function(t){n=t}));null==n&&r(!1);var a=Array.from(i.values());return this._ownersToPendingPromise.set(e,{promise:s,resolve:n,pendingOperations:a}),{promise:s,pendingOperations:a}},t}();t.exports=o},2179:(t,e,i)=>{var n=(0,i(7272).default)(i(656)),r=i(5504),o=i(7286),s=i(6669),a=r.fromObject(Object.freeze({__UNPUBLISH_RECORD_SENTINEL:!0})),u=function(){function t(t){this._base=t,this._sink=o.create()}var e=t.prototype;return e.has=function(t){return this._sink.has(t)?this._sink.get(t)!==a:this._base.has(t)},e.get=function(t){if(this._sink.has(t)){var e=this._sink.get(t);return e===a?void 0:e}return this._base.get(t)},e.getStatus=function(t){var e=this.get(t);return void 0===e?"UNKNOWN":null===e?"NONEXISTENT":"EXISTENT"},e.clear=function(){this._base=o.create(),this._sink.clear()},e.delete=function(t){this._sink.delete(t)},e.remove=function(t){this._sink.set(t,a)},e.set=function(t,e){this._sink.set(t,e)},e.getRecordIDs=function(){return Object.keys(this.toJSON())},e.size=function(){return Object.keys(this.toJSON()).length},e.toJSON=function(){var t=this,e=(0,n.default)({},this._base.toJSON());return this._sink.getRecordIDs().forEach((function(i){var n=t.get(i);void 0===n?delete e[i]:e[i]=r.toJSON(n)})),e},e.getOptimisticRecordIDs=function(){return new Set(this._sink.getRecordIDs())},t}();t.exports={create:function(t){return new u(t)},getOptimisticRecordIDs:function(t){return t instanceof u||s(!1),t.getOptimisticRecordIDs()}}},1848:(t,e,i)=>{var n,r,o=i(8177),s=i(3051),a=i(6668),u=i(229),l=i(7286),c=i(6669),h=(i(3320),void 0!==i.g?i.g:"undefined"!=typeof window?window:void 0),d=null!==(n=null==h||null===(r=h.ErrorUtils)||void 0===r?void 0:r.applyWithGuard)&&void 0!==n?n:function(t,e,i,n,r){return t.apply(e,i)},p=function(){function t(t,e,i,n){this._hasStoreSnapshot=!1,this._handlerProvider=e||null,this._pendingBackupRebase=!1,this._pendingData=new Set,this._pendingOptimisticUpdates=new Set,this._store=t,this._appliedOptimisticUpdates=new Set,this._gcHold=null,this._getDataID=i,this._missingFieldHandlers=n}var e=t.prototype;return e.applyUpdate=function(t){(this._appliedOptimisticUpdates.has(t)||this._pendingOptimisticUpdates.has(t))&&c(!1),this._pendingOptimisticUpdates.add(t)},e.revertUpdate=function(t){this._pendingOptimisticUpdates.has(t)?this._pendingOptimisticUpdates.delete(t):this._appliedOptimisticUpdates.has(t)&&(this._pendingBackupRebase=!0,this._appliedOptimisticUpdates.delete(t))},e.revertAll=function(){this._pendingBackupRebase=!0,this._pendingOptimisticUpdates.clear(),this._appliedOptimisticUpdates.clear()},e.commitPayload=function(t,e,i){this._pendingBackupRebase=!0,this._pendingData.add({kind:"payload",operation:t,payload:e,updater:i})},e.commitUpdate=function(t){this._pendingBackupRebase=!0,this._pendingData.add({kind:"updater",updater:t})},e.commitSource=function(t){this._pendingBackupRebase=!0,this._pendingData.add({kind:"source",source:t})},e.run=function(t){var e=0===this._appliedOptimisticUpdates&&!!this._gcHold;if(!this._pendingBackupRebase&&0===this._pendingOptimisticUpdates.size&&!e)return[];this._pendingBackupRebase&&this._hasStoreSnapshot&&(this._store.restore(),this._hasStoreSnapshot=!1);var i=this._commitData();return(this._pendingOptimisticUpdates.size||this._pendingBackupRebase&&this._appliedOptimisticUpdates.size)&&(this._hasStoreSnapshot||(this._store.snapshot(),this._hasStoreSnapshot=!0),this._applyUpdates()),this._pendingBackupRebase=!1,this._appliedOptimisticUpdates.size>0?this._gcHold||(this._gcHold=this._store.holdGC()):this._gcHold&&(this._gcHold.dispose(),this._gcHold=null),this._store.notify(t,i)},e._publishSourceFromPayload=function(t){var e=this,i=t.payload,n=t.operation,r=t.updater,u=i.source,l=i.fieldPayloads,h=new o(this._store.getSource(),u),d=new s(h,this._getDataID,this._handlerProvider,this._missingFieldHandlers);if(l&&l.length&&l.forEach((function(t){var i=e._handlerProvider&&e._handlerProvider(t.handle);i||c(!1),i.update(d,t)})),r){var p=n.fragment;null==p&&c(!1),r(new a(h,d,p,this._missingFieldHandlers),f(u,p))}var _=d.getIDsMarkedForInvalidation();return this._store.publish(u,_),d.isStoreMarkedForInvalidation()},e._commitData=function(){var t=this;if(!this._pendingData.size)return!1;var e=!1;return this._pendingData.forEach((function(i){if("payload"===i.kind){var n=t._publishSourceFromPayload(i);e=e||n}else if("source"===i.kind){var r=i.source;t._store.publish(r)}else{var a=i.updater,u=l.create(),c=new o(t._store.getSource(),u),h=new s(c,t._getDataID,t._handlerProvider,t._missingFieldHandlers);d(a,null,[h],null,"RelayPublishQueue:commitData"),e=e||h.isStoreMarkedForInvalidation();var p=h.getIDsMarkedForInvalidation();t._store.publish(u,p)}})),this._pendingData.clear(),e},e._applyUpdates=function(){var t=this,e=l.create(),i=new o(this._store.getSource(),e),n=new s(i,this._getDataID,this._handlerProvider,this._missingFieldHandlers),r=function(e){if(e.storeUpdater){var r=e.storeUpdater;d(r,null,[n],null,"RelayPublishQueue:applyUpdates")}else{var o=e.operation,s=e.payload,u=e.updater,l=s.source,c=s.fieldPayloads;if(l&&n.publishSource(l,c),u){var h;l&&(h=f(l,o.fragment));var p=new a(i,n,o.fragment,t._missingFieldHandlers);d(u,null,[p,h],null,"RelayPublishQueue:applyUpdates")}}};this._pendingBackupRebase&&this._appliedOptimisticUpdates.size&&this._appliedOptimisticUpdates.forEach(r),this._pendingOptimisticUpdates.size&&(this._pendingOptimisticUpdates.forEach((function(e){r(e),t._appliedOptimisticUpdates.add(e)})),this._pendingOptimisticUpdates.clear()),this._store.publish(e)},t}();function f(t,e){return u.read(t,e).data}t.exports=p}}]);