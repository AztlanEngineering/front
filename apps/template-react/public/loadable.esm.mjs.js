"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[727],{7480:(e,t,n)=>{n.d(t,{TA:()=>S,ZP:()=>N});var r=n(2784),o=n(1461),a=n(7896),i=n(753),s=n(6981),c=n(4601),u=n(3463);function l(e){console.warn("loadable: "+e)}var d=r.createContext(),f="__LOADABLE_REQUIRED_CHUNKS__";var h={initialChunks:{}},p="PENDING",m="REJECTED",v=function(e){return e};function y(e){var t=e.defaultResolveComponent,n=void 0===t?v:t,l=e.render,f=e.onLoad;function y(e,t){void 0===t&&(t={});var v=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),y={};function _(e){return t.cacheKey?t.cacheKey(e):v.resolve?v.resolve(e):"static"}function E(e,r,o){var a=t.resolveComponent?t.resolveComponent(e,r):n(e);if(t.resolveComponent&&!(0,c.isValidElementType)(a))throw new Error("resolveComponent returned something that is not a React component!");return u(o,a,{preload:!0}),a}var g,b,w=function(e){var t=_(e),n=y[t];return n&&n.status!==m||((n=v.requireAsync(e)).status=p,y[t]=n,n.then((function(){n.status="RESOLVED"}),(function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:v.resolve(e),chunkName:v.chunkName(e),error:t?t.message:t}),n.status=m}))),n},C=function(e){function n(n){var r;return(r=e.call(this,n)||this).state={result:null,error:null,loading:!0,cacheKey:_(n)},function(e,t){if(!e){var n=new Error("loadable: "+t);throw n.framesToPop=1,n.name="Invariant Violation",n}}(!n.__chunkExtractor||v.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),n.__chunkExtractor?(!1===t.ssr||(v.requireAsync(n).catch((function(){return null})),r.loadSync(),n.__chunkExtractor.addChunk(v.chunkName(n))),(0,i.Z)(r)):(!1!==t.ssr&&(v.isReady&&v.isReady(n)||v.chunkName&&h.initialChunks[v.chunkName(n)])&&r.loadSync(),r)}(0,s.Z)(n,e),n.getDerivedStateFromProps=function(e,t){var n=_(e);return(0,a.Z)({},t,{cacheKey:n,loading:t.loading||t.cacheKey!==n})};var r=n.prototype;return r.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&e.status===m&&this.setCache(),this.state.loading&&this.loadAsync()},r.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},r.componentWillUnmount=function(){this.mounted=!1},r.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},r.getCacheKey=function(){return _(this.props)},r.getCache=function(){return y[this.getCacheKey()]},r.setCache=function(e){void 0===e&&(e=void 0),y[this.getCacheKey()]=e},r.triggerOnLoad=function(){var e=this;f&&setTimeout((function(){f(e.state.result,e.props)}))},r.loadSync=function(){if(this.state.loading)try{var e=E(v.requireSync(this.props),this.props,S);this.state.result=e,this.state.loading=!1}catch(e){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:v.resolve(this.props),chunkName:v.chunkName(this.props),error:e?e.message:e}),this.state.error=e}},r.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var n=E(t,e.props,S);e.safeSetState({result:n,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},r.resolveAsync=function(){var e=this.props,t=(e.__chunkExtractor,e.forwardedRef,(0,o.Z)(e,["__chunkExtractor","forwardedRef"]));return w(t)},r.render=function(){var e=this.props,n=e.forwardedRef,r=e.fallback,i=(e.__chunkExtractor,(0,o.Z)(e,["forwardedRef","fallback","__chunkExtractor"])),s=this.state,c=s.error,u=s.loading,d=s.result;if(t.suspense&&(this.getCache()||this.loadAsync()).status===p)throw this.loadAsync();if(c)throw c;var f=r||t.fallback||null;return u?f:l({fallback:f,result:d,options:t,props:(0,a.Z)({},i,{ref:n})})},n}(r.Component),k=(b=function(e){return r.createElement(d.Consumer,null,(function(t){return r.createElement(g,Object.assign({__chunkExtractor:t},e))}))},(g=C).displayName&&(b.displayName=g.displayName+"WithChunkExtractor"),b),S=r.forwardRef((function(e,t){return r.createElement(k,Object.assign({forwardedRef:t},e))}));return S.displayName="Loadable",S.preload=function(e){S.load(e)},S.load=function(e){return w(e)},S}return{loadable:y,lazy:function(e,t){return y(e,(0,a.Z)({},t,{suspense:!0}))}}}var _=y({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,n=e.props;return r.createElement(t,n)}}),E=_.loadable,g=_.lazy,b=y({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,n=e.props;return n.children?n.children(t):null}}),w=b.loadable,C=b.lazy,k="undefined"!=typeof window;function S(e,t){void 0===e&&(e=function(){});var n=void 0===t?{}:t,r=n.namespace,o=void 0===r?"":r,a=n.chunkLoadingGlobal,i=void 0===a?"__LOADABLE_LOADED_CHUNKS__":a;if(!k)return l("`loadableReady()` must be called in browser only"),e(),Promise.resolve();var s=null;if(k){var c=function(e){return""+e+f}(o),u=document.getElementById(c);if(u){s=JSON.parse(u.textContent);var d=document.getElementById(c+"_ext");if(!d)throw new Error("loadable-component: @loadable/server does not match @loadable/component");JSON.parse(d.textContent).namedChunks.forEach((function(e){h.initialChunks[e]=!0}))}}if(!s)return l("`loadableReady()` requires state, please use `getScriptTags` or `getScriptElements` server-side"),e(),Promise.resolve();var p=!1;return new Promise((function(e){window[i]=window[i]||[];var t=window[i],n=t.push.bind(t);function r(){s.every((function(e){return t.some((function(t){return t[0].indexOf(e)>-1}))}))&&(p||(p=!0,e()))}t.push=function(){n.apply(void 0,arguments),r()},r()})).then(e)}var A=E;A.lib=w,g.lib=C;const N=A}}]);
//# sourceMappingURL=loadable.esm.mjs.js.map?77e0a