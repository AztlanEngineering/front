"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[727],{7480:(e,t,n)=>{n.d(t,{TA:()=>k,ZP:()=>A});var r=n(7342),o=n(4040),a=n(375),i=n(6677),s=n(3383),c=n(844);function u(e){console.warn("loadable: "+e)}var l=r.createContext(),d="__LOADABLE_REQUIRED_CHUNKS__";var f={initialChunks:{}},h="PENDING",p="REJECTED",v=function(e){return e};function m(e){var t=e.defaultResolveComponent,n=void 0===t?v:t,u=e.render,d=e.onLoad;function m(e,t){void 0===t&&(t={});var v=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),m={};function y(e){return t.cacheKey?t.cacheKey(e):v.resolve?v.resolve(e):"static"}function _(e,r,o){var a=t.resolveComponent?t.resolveComponent(e,r):n(e);return c(o,a,{preload:!0}),a}var E,g,b=function(e){var t=y(e),n=m[t];return n&&n.status!==p||((n=v.requireAsync(e)).status=h,m[t]=n,n.then((function(){n.status="RESOLVED"}),(function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:v.resolve(e),chunkName:v.chunkName(e),error:t?t.message:t}),n.status=p}))),n},w=function(e){function n(n){var r;return(r=e.call(this,n)||this).state={result:null,error:null,loading:!0,cacheKey:y(n)},function(e,t){if(!e){var n=new Error("loadable: "+t);throw n.framesToPop=1,n.name="Invariant Violation",n}}(!n.__chunkExtractor||v.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),n.__chunkExtractor?(!1===t.ssr||(v.requireAsync(n).catch((function(){return null})),r.loadSync(),n.__chunkExtractor.addChunk(v.chunkName(n))),(0,i.Z)(r)):(!1!==t.ssr&&(v.isReady&&v.isReady(n)||v.chunkName&&f.initialChunks[v.chunkName(n)])&&r.loadSync(),r)}(0,s.Z)(n,e),n.getDerivedStateFromProps=function(e,t){var n=y(e);return(0,a.Z)({},t,{cacheKey:n,loading:t.loading||t.cacheKey!==n})};var r=n.prototype;return r.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&e.status===p&&this.setCache(),this.state.loading&&this.loadAsync()},r.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},r.componentWillUnmount=function(){this.mounted=!1},r.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},r.getCacheKey=function(){return y(this.props)},r.getCache=function(){return m[this.getCacheKey()]},r.setCache=function(e){void 0===e&&(e=void 0),m[this.getCacheKey()]=e},r.triggerOnLoad=function(){var e=this;d&&setTimeout((function(){d(e.state.result,e.props)}))},r.loadSync=function(){if(this.state.loading)try{var e=_(v.requireSync(this.props),this.props,k);this.state.result=e,this.state.loading=!1}catch(e){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:v.resolve(this.props),chunkName:v.chunkName(this.props),error:e?e.message:e}),this.state.error=e}},r.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var n=_(t,e.props,k);e.safeSetState({result:n,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},r.resolveAsync=function(){var e=this.props,t=(e.__chunkExtractor,e.forwardedRef,(0,o.Z)(e,["__chunkExtractor","forwardedRef"]));return b(t)},r.render=function(){var e=this.props,n=e.forwardedRef,r=e.fallback,i=(e.__chunkExtractor,(0,o.Z)(e,["forwardedRef","fallback","__chunkExtractor"])),s=this.state,c=s.error,l=s.loading,d=s.result;if(t.suspense&&(this.getCache()||this.loadAsync()).status===h)throw this.loadAsync();if(c)throw c;var f=r||t.fallback||null;return l?f:u({fallback:f,result:d,options:t,props:(0,a.Z)({},i,{ref:n})})},n}(r.Component),C=(g=function(e){return r.createElement(l.Consumer,null,(function(t){return r.createElement(E,Object.assign({__chunkExtractor:t},e))}))},(E=w).displayName&&(g.displayName=E.displayName+"WithChunkExtractor"),g),k=r.forwardRef((function(e,t){return r.createElement(C,Object.assign({forwardedRef:t},e))}));return k.displayName="Loadable",k.preload=function(e){k.load(e)},k.load=function(e){return b(e)},k}return{loadable:m,lazy:function(e,t){return m(e,(0,a.Z)({},t,{suspense:!0}))}}}var y=m({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,n=e.props;return r.createElement(t,n)}}),_=y.loadable,E=y.lazy,g=m({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,n=e.props;return n.children?n.children(t):null}}),b=g.loadable,w=g.lazy,C="undefined"!=typeof window;function k(e,t){void 0===e&&(e=function(){});var n=void 0===t?{}:t,r=n.namespace,o=void 0===r?"":r,a=n.chunkLoadingGlobal,i=void 0===a?"__LOADABLE_LOADED_CHUNKS__":a;if(!C)return u("`loadableReady()` must be called in browser only"),e(),Promise.resolve();var s=null;if(C){var c=function(e){return""+e+d}(o),l=document.getElementById(c);if(l){s=JSON.parse(l.textContent);var h=document.getElementById(c+"_ext");if(!h)throw new Error("loadable-component: @loadable/server does not match @loadable/component");JSON.parse(h.textContent).namedChunks.forEach((function(e){f.initialChunks[e]=!0}))}}if(!s)return u("`loadableReady()` requires state, please use `getScriptTags` or `getScriptElements` server-side"),e(),Promise.resolve();var p=!1;return new Promise((function(e){window[i]=window[i]||[];var t=window[i],n=t.push.bind(t);function r(){s.every((function(e){return t.some((function(t){return t[0].indexOf(e)>-1}))}))&&(p||(p=!0,e()))}t.push=function(){n.apply(void 0,arguments),r()},r()})).then(e)}var S=_;S.lib=b,E.lib=w;const A=S}}]);
//# sourceMappingURL=loadable.esm.mjs.js.map?52f70