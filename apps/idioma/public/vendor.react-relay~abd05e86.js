"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[8161],{2559:(e,t,r)=>{var n=(0,r(7272).default)(r(2419)),o=r(6669),s=r(6877),a=s.__internal.fetchQuery,i=s.createOperationDescriptor,l=s.isRelayModernEnvironment,u=function(){function e(e){(0,n.default)(this,"_selectionReferences",[]),(0,n.default)(this,"_didFetchFinish",!1),null!=e&&(this._cacheSelectionReference=e.cacheSelectionReference,this._selectionReferences=e.selectionReferences)}var t=e.prototype;return t.getSelectionReferences=function(){return{cacheSelectionReference:this._cacheSelectionReference,selectionReferences:this._selectionReferences}},t.lookupInStore=function(e,t,r){return"store-and-network"!==r&&"store-or-network"!==r||"available"!==e.check(t).status?null:(this._retainCachedOperation(e,t),e.lookup(t.fragment))},t.getFetchResult=function(){return this._didFetchFinish?null!=this._error?{error:this._error}:null!=this._snapshot?{snapshot:this._snapshot}:void 0:null},t.execute=function(e){var t=this,r=e.environment,n=e.operation,o=e.preservePreviousReferences,s=void 0!==o&&o,i=r.retain(n),u=function(){t._selectionReferences=t._selectionReferences.concat(i)},c=function(){s||t.disposeSelectionReferences(),t._selectionReferences=t._selectionReferences.concat(i)},h=function(){t._selectionReferences=t._selectionReferences.concat(i)};return l(r)?a(r,n).do({error:u,complete:c,unsubscribe:h}):r.execute({operation:n}).do({error:u,complete:c,unsubscribe:h})},t.setOnDataChange=function(e){this._fetchOptions||o(!1),"function"==typeof e&&(this._fetchOptions.onDataChangeCallbacks=this._fetchOptions.onDataChangeCallbacks||[],this._fetchOptions.onDataChangeCallbacks.push(e),this._didFetchFinish&&(null!=this._error?e({error:this._error}):null!=this._snapshot&&e({snapshot:this._snapshot})))},t.fetch=function(e,t){var r,n=this,o=e.environment,s=e.operation,a=e.onDataChange,l=!1;this.disposeRequest();var u=this._fetchOptions&&this._fetchOptions.onDataChangeCallbacks;this._fetchOptions={environment:o,onDataChangeCallbacks:u||[],operation:s},a&&-1===this._fetchOptions.onDataChangeCallbacks.indexOf(a)&&this._fetchOptions.onDataChangeCallbacks.push(a);var c=t?i(s.request.node,s.request.variables,t):s,h=this.execute({environment:o,operation:c}).finally((function(){n._pendingRequest=null})).subscribe({next:function(){n._didFetchFinish=!0,n._error=null,n._onQueryDataAvailable({notifyFirstResult:l})},error:function(e){n._didFetchFinish=!0,n._error=e,n._snapshot=null;var t=n._fetchOptions&&n._fetchOptions.onDataChangeCallbacks;l?t&&t.forEach((function(t){t({error:e})})):r=e}});if(this._pendingRequest={dispose:function(){h.unsubscribe()}},l=!0,r)throw r;return this._snapshot},t.retry=function(e){return this._fetchOptions||o(!1),this.fetch({environment:this._fetchOptions.environment,operation:this._fetchOptions.operation,onDataChange:null},e)},t.dispose=function(){this.disposeRequest(),this.disposeSelectionReferences()},t.disposeRequest=function(){this._error=null,this._snapshot=null,this._pendingRequest&&this._pendingRequest.dispose(),this._rootSubscription&&(this._rootSubscription.dispose(),this._rootSubscription=null)},t._retainCachedOperation=function(e,t){this._disposeCacheSelectionReference(),this._cacheSelectionReference=e.retain(t)},t._disposeCacheSelectionReference=function(){this._cacheSelectionReference&&this._cacheSelectionReference.dispose(),this._cacheSelectionReference=null},t.disposeSelectionReferences=function(){this._disposeCacheSelectionReference(),this._selectionReferences.forEach((function(e){return e.dispose()})),this._selectionReferences=[]},t._onQueryDataAvailable=function(e){var t=this,r=e.notifyFirstResult;this._fetchOptions||o(!1);var n=this._fetchOptions,s=n.environment,a=n.onDataChangeCallbacks,i=n.operation;if(!this._snapshot&&(this._snapshot=s.lookup(i.fragment),this._rootSubscription=s.subscribe(this._snapshot,(function(e){if(null!=t._fetchOptions){var r=t._fetchOptions.onDataChangeCallbacks;Array.isArray(r)&&r.forEach((function(t){return t({snapshot:e})}))}})),this._snapshot&&r&&Array.isArray(a))){var l=this._snapshot;a.forEach((function(e){return e({snapshot:l})}))}},e}();e.exports=u},5769:(e,t,r)=>{var n=r(7272).default,o=n(r(656)),s=n(r(4969)),a=n(r(8619)),i=n(r(2419)),l=r(2433),u=r(2559),c=r(6594),h=r(7584),p=r(2854),f=r(6877),d=f.createOperationDescriptor,v=(f.deepFreeze,f.getRequest),y={},_={rootIsQueryRenderer:!0},b=function(e){function t(t){var r;r=e.call(this,t)||this,(0,i.default)((0,s.default)(r),"_handleDataChange",(function(e){var t=null==e.error?null:e.error,n=null==e.snapshot?null:e.snapshot;r.setState((function(e){var r=e.requestCacheKey;return r&&delete y[r],n===e.snapshot&&t===e.error?null:{renderProps:C(t,n,e.queryFetcher,e.retryCallbacks),snapshot:n,requestCacheKey:null}}))}));var n,a,l={handleDataChange:null,handleRetryAfterError:null};if(t.query){var c=t.query;a=m(v(c).params,t.variables),n=y[a]?y[a].queryFetcher:new u}else n=new u;return r._maybeHiddenOrFastRefresh=!1,r.state=(0,o.default)({prevPropsEnvironment:t.environment,prevPropsVariables:t.variables,prevQuery:t.query,queryFetcher:n,retryCallbacks:l},g(t,n,l,a)),r}(0,a.default)(t,e),t.getDerivedStateFromProps=function(e,t){return t.prevQuery===e.query&&t.prevPropsEnvironment===e.environment&&h(t.prevPropsVariables,e.variables)?null:R(e,t)};var r=t.prototype;return r.componentDidMount=function(){var e=this;if(!0===this._maybeHiddenOrFastRefresh)return this._maybeHiddenOrFastRefresh=!1,void this.setState((function(t){var r=R(e.props,t),n=r.requestCacheKey,o=r.queryFetcher;return null!=n&&null!=y[n]&&o.setOnDataChange(e._handleDataChange),r}));var t=this.state,r=t.retryCallbacks,n=t.queryFetcher,o=t.requestCacheKey;o&&delete y[o],r.handleDataChange=this._handleDataChange,r.handleRetryAfterError=function(t){return e.setState((function(e){var t=e.requestCacheKey;return t&&delete y[t],{renderProps:{error:null,props:null,retry:null},requestCacheKey:null}}))},this.props.query&&n.setOnDataChange(this._handleDataChange)},r.componentDidUpdate=function(e,t){var r=this.state,n=r.queryFetcher,o=r.requestCacheKey;o&&(delete y[o],delete this.state.requestCacheKey),this.props.query&&n!==t.queryFetcher&&n.setOnDataChange(this._handleDataChange)},r.componentWillUnmount=function(){this.state.queryFetcher.dispose(),this._maybeHiddenOrFastRefresh=!0},r.shouldComponentUpdate=function(e,t){return e.render!==this.props.render||t.renderProps!==this.state.renderProps},r.render=function(){var e=this.state,t=e.renderProps,r=e.relayContext;return p.createElement(l.Provider,{value:r},p.createElement(c.Provider,{value:_},this.props.render(t)))},t}(p.Component);function C(e,t,r,n){return{error:e||null,props:t?t.data:null,retry:function(t){var o=r.retry(t);o&&"function"==typeof n.handleDataChange?n.handleDataChange({snapshot:o}):e&&"function"==typeof n.handleRetryAfterError&&n.handleRetryAfterError(e)}}}function m(e,t){return JSON.stringify({id:e.cacheID?e.cacheID:e.id,variables:t})}function R(e,t){var r,n=e.query,s=t.queryFetcher.getSelectionReferences();if(t.queryFetcher.disposeRequest(),n){var a=m(v(n).params,e.variables);r=y[a]?y[a].queryFetcher:new u(s)}else r=new u(s);return(0,o.default)({prevQuery:e.query,prevPropsEnvironment:e.environment,prevPropsVariables:e.variables,queryFetcher:r},g(e,r,t.retryCallbacks))}function g(e,t,r,n){var o=e.environment,s=e.query,a=e.variables,i=e.cacheConfig,l=o;if(!s)return t.dispose(),{error:null,relayContext:{environment:l},renderProps:{error:null,props:{},retry:null},requestCacheKey:null};var u=v(s),c=d(u,a,i),h={environment:l};if("string"==typeof n&&y[n]){var p=y[n].snapshot;return p?{error:null,relayContext:h,renderProps:C(null,p,t,r),snapshot:p,requestCacheKey:n}:{error:null,relayContext:h,renderProps:{error:null,props:null,retry:null},snapshot:null,requestCacheKey:n}}try{var f=t.lookupInStore(l,c,e.fetchPolicy),_=t.fetch({environment:l,onDataChange:null,operation:c})||f;return n=n||m(u.params,e.variables),y[n]={queryFetcher:t,snapshot:_},_?{error:null,relayContext:h,renderProps:C(null,_,t,r),snapshot:_,requestCacheKey:n}:{error:null,relayContext:h,renderProps:{error:null,props:null,retry:null},snapshot:null,requestCacheKey:n}}catch(e){return{error:e,relayContext:h,renderProps:C(e,null,t,r),snapshot:null,requestCacheKey:n}}}e.exports=b},6594:(e,t,r)=>{var n=r(2854);e.exports=n.createContext({rootIsQueryRenderer:!1})},2026:(e,t,r)=>{var n=r(7272).default,o=n(r(6264)),s=n(r(376)),a=n(r(656)),i=n(r(4969)),l=n(r(8619)),u=n(r(2419)),c=["componentRef","__relayContext","__rootIsQueryRenderer"],h=r(4499),p=r(353),f=r(5092).getContainerName,d=r(2433),v=r(2559),y=r(4496).assertRelayContext,_=r(7584),b=r(2854),C=r(6877),m=C.Observable,R=C.createFragmentSpecResolver,g=C.createOperationDescriptor,S=C.getDataIDsFromObject,q=C.getRequest,F=C.getVariablesFromObject,x=C.isScalarAndEqual;function D(e,t){return{environment:e,refetch:t}}r(3320),e.exports={createContainer:function(e,t,r){return h(e,t,(function(e,t){return function(e,t,r){var n,h=f(e);return n=function(n){function f(e){var o,s;s=n.call(this,e)||this,(0,u.default)((0,i.default)(s),"_handleFragmentDataUpdate",(function(){var e=s.state.resolver;s.setState((function(t){return e===t.resolver?{data:t.resolver.resolve()}:null}))})),(0,u.default)((0,i.default)(s),"_refetch",(function(e,n,o,i){if(s._isUnmounted)return{dispose:function(){}};var l=y(s.props.__relayContext).environment,u=p(t,s.props),c="function"==typeof e?e(s._getFragmentVariables()):e;c=(0,a.default)((0,a.default)({},u),c);var h=n?(0,a.default)((0,a.default)({},c),n):c,f=i?{force:!!i.force}:void 0;null!=f&&null!=(null==i?void 0:i.metadata)&&(f.metadata=null==i?void 0:i.metadata);var d,v="function"==typeof o?{next:o,error:o}:o||{},_=q(r),b=g(_,c,f);return s.state.localVariables=c,s._refetchSubscription&&s._refetchSubscription.unsubscribe(),null!=s._getQueryFetcher().lookupInStore(l,b,null==i?void 0:i.fetchPolicy)?(s.state.resolver.setVariables(h,b.request.node),s.setState((function(e){return{data:e.resolver.resolve(),contextForChildren:{environment:s.props.__relayContext.environment}}}),(function(){v.next&&v.next(),v.complete&&v.complete()})),{dispose:function(){}}):(s._getQueryFetcher().execute({environment:l,operation:b,preservePreviousReferences:!0}).mergeMap((function(e){return s.state.resolver.setVariables(h,b.request.node),m.create((function(e){return s.setState((function(e){return{data:e.resolver.resolve(),contextForChildren:{environment:s.props.__relayContext.environment}}}),(function(){e.next(),e.complete()}))}))})).finally((function(){s._refetchSubscription===d&&(s._refetchSubscription=null)})).subscribe((0,a.default)((0,a.default)({},v),{},{start:function(e){s._refetchSubscription=d=e,v.start&&v.start(e)}})),{dispose:function(){d&&d.unsubscribe()}})}));var l=y(e.__relayContext),c=null!==(o=e.__rootIsQueryRenderer)&&void 0!==o&&o;s._refetchSubscription=null;var f=R(l,h,t,e,c);return s.state={data:f.resolve(),localVariables:null,prevProps:e,prevPropsContext:l,contextForChildren:l,relayProp:D(l.environment,s._refetch),resolver:f},s._isUnmounted=!1,s}(0,l.default)(f,n);var C=f.prototype;return C.componentDidMount=function(){this._isUnmounted=!1,this._subscribeToNewResolverAndRerenderIfStoreHasChanged()},C.componentDidUpdate=function(e,t){this.state.resolver!==t.resolver?(t.resolver.dispose(),this._queryFetcher&&this._queryFetcher.dispose(),this._refetchSubscription&&this._refetchSubscription.unsubscribe(),this._subscribeToNewResolverAndRerenderIfStoreHasChanged()):this._rerenderIfStoreHasChanged()},f.getDerivedStateFromProps=function(e,r){var n,o=r.prevProps,s=y(e.__relayContext),a=null!==(n=e.__rootIsQueryRenderer)&&void 0!==n&&n,i=S(t,o),l=S(t,e),u=p(t,o),c=p(t,e),f=r.resolver;if(r.prevPropsContext.environment!==s.environment||!_(u,c)||!_(i,l))return{data:(f=R(s,h,t,e,a)).resolve(),localVariables:null,prevProps:e,prevPropsContext:s,contextForChildren:s,relayProp:D(s.environment,r.relayProp.refetch),resolver:f};r.localVariables||f.setProps(e);var d=f.resolve();return d!==r.data?{data:d,prevProps:e}:null},C.componentWillUnmount=function(){this._isUnmounted=!0,this.state.resolver.dispose(),this._queryFetcher&&this._queryFetcher.dispose(),this._refetchSubscription&&this._refetchSubscription.unsubscribe()},C.shouldComponentUpdate=function(e,r){if(r.data!==this.state.data||r.relayProp!==this.state.relayProp)return!0;for(var n=Object.keys(e),o=0;o<n.length;o++){var s=n[o];if("__relayContext"===s){if(this.state.prevPropsContext.environment!==r.prevPropsContext.environment)return!0}else if(!t.hasOwnProperty(s)&&!x(e[s],this.props[s]))return!0}return!1},C._rerenderIfStoreHasChanged=function(){var e=this.state,t=e.data,r=e.resolver.resolve();t!==r&&this.setState({data:r})},C._subscribeToNewResolverAndRerenderIfStoreHasChanged=function(){var e=this.state,t=e.data,r=e.resolver,n=r.resolve();r.setCallback(this.props,this._handleFragmentDataUpdate),t!==n&&this.setState({data:n})},C._getFragmentVariables=function(){return F(t,this.props)},C._getQueryFetcher=function(){return this._queryFetcher||(this._queryFetcher=new v),this._queryFetcher},C.render=function(){var t=this.props,r=t.componentRef,n=(t.__relayContext,t.__rootIsQueryRenderer,(0,s.default)(t,c)),a=this.state,i=a.relayProp,l=a.contextForChildren;return b.createElement(d.Provider,{value:l},b.createElement(e,(0,o.default)({},n,this.state.data,{ref:r,relay:i})))},f}(b.Component),(0,u.default)(n,"displayName",h),n}(e,t,r)}))}}},4496:(e,t,r)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}var o=r(5574),s=r(6669);function a(e){return"object"===n(e)&&null!==e&&!Array.isArray(e)&&o(e.environment)}e.exports={assertRelayContext:function(e){return a(e)||s(!1),e},isRelayContext:a}},1754:(e,t,r)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}var o=r(6669);e.exports=function(e,t){for(var r in t&&"object"===n(t)||o(!1),t)if(t.hasOwnProperty(r)){var s=t[r];(!s||"object"!==n(s)&&"function"!=typeof s)&&o(!1)}}},4499:(e,t,r)=>{var n=(0,r(7272).default)(r(6264)),o=r(1754),s=r(5092),a=s.getComponentName,i=s.getContainerName,l=r(2433),u=r(6594),c=r(6669),h=r(2854),p=r(6877).getFragment,f=h.useContext;e.exports=function(e,t,r){var s=i(e);o(a(e),t);var d={};for(var v in t)d[v]=p(t[v]);var y=r(e,d);function _(e,t){var r,o=f(l);null==o&&c(!1);var s=f(u);return h.createElement(y,(0,n.default)({},e,{__relayContext:o,__rootIsQueryRenderer:null!==(r=null==s?void 0:s.rootIsQueryRenderer)&&void 0!==r&&r,componentRef:e.componentRef||t}))}return y.displayName=s,_.displayName=s,h.forwardRef(_)}},353:(e,t,r)=>{var n=(0,r(7272).default)(r(656)),o=r(6877).getSelector;e.exports=function(e,t){var r={};return Object.keys(e).forEach((function(s){var a,i,l,u=e[s],c=t[s],h=o(u,c),p=null!=h&&"PluralReaderSelector"===h.kind?null!==(a=null===(i=h.selectors[0])||void 0===i?void 0:i.owner.variables)&&void 0!==a?a:{}:null!==(l=null==h?void 0:h.owner.variables)&&void 0!==l?l:{};r=(0,n.default)((0,n.default)({},r),p)})),r}}}]);