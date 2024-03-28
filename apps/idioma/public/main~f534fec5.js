"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[2275],{6474:(e,t,r)=>{r.d(t,{QN:()=>d,Xn:()=>l,qK:()=>u});var n=r(2854);const o=n.createContext({});var i=r(2366),a=r(7206),s=r(5282),c=r(9641);const l=function(){return(0,n.useContext)(o)},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.redirectLocallyAfterLogin,o=void 0!==r&&r,i=t.defaultRedirectionAfterLogin,a=(0,c.zy)();return(0,n.useMemo)((function(){var t,r=o?a.pathname:(null===(t=a.state)||void 0===t?void 0:t.from)||i;return"".concat(e).concat(r)}),[e,a.state,i,o])};function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){var n,o,i,a;n=e,o=t,i=r[t],a=function(e,t){if("object"!=f(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==f(a)?a:String(a))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function y(e){var t,r=e.children,i=e.initialTheme,l=e.value,f=e.maintenance,p=void 0!==f&&f,y=e.routes,d=e.ssrHostname,v=e.extraComponents,O=e.redirectLocallyAfterLogin,g=e.defaultRedirectionAfterLogin,h=e.QUERY_APPLICATION,j=e.applicationQueryVariables,S=void 0===j?{}:j,P=e.fetchOptions,E=void 0===P?{}:P,w=(0,s.DP)(i),A=function(e){return(0,n.useMemo)((function(){if("boolean"==typeof e)return e;var t=new Date,r=!e.start||t>=e.start,n=!!e.end&&t>e.end;return r&&!n}),[e])}(p),N=(0,s.Ib)(d),L=(t=N,(0,n.useMemo)((function(){var e=/^(?:http[s]?:\/\/)?([^\.]+)\.localhost(?::\d+)?$/,r=/^(?:http[s]?:\/\/)?(?:([^\.]+)\.)+[^\.]+\.[^\.]+(?::\d+)?$/,n=null;if(e.test(t)){var o=t.match(e);n=o?o[1]:null}else if(r.test(t)){var i=t.match(r);n=i?i[1]:null}return n}),[t]));if(A)return n.createElement("div",null,"This site is currently not available.");var I,T,D=(0,c.zy)(),R=function(e){return(0,n.useCallback)((function(t){var r=e.find((function(e){var r=(0,c.B6)(t,{path:e.path,exact:e.exact});return Boolean(r)}));return r?{route:r,match:(0,c.B6)(t,{path:r.path,exact:r.exact})}:null}),[e])}(y),_=R(D.pathname)||{},k=_.match,C=(_.route,(I=(0,n.useState)(null==k?void 0:k.params),T=1,function(e){if(Array.isArray(e))return e}(I)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,s=[],c=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(s.push(n.value),s.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return s}}(I,T)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(e,t):void 0}}(I,T)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0]),x=u(N,{redirectLocallyAfterLogin:O,defaultRedirectionAfterLogin:g}),B=(0,a.useLazyLoadQuery)(h,m(m({loginRequestedResource:x},C),S),m({fetchPolicy:"store-and-network"},E)),M=(0,n.useMemo)((function(){return m(m(m({},l),w),{},{hostname:N,subdomain:L,routes:y,extraComponents:v,QUERY_APPLICATION:h,data:B,matchRoute:R,matchParams:C,resource:x,redirectLocallyAfterLogin:O,defaultRedirectionAfterLogin:g})}),[l,w,v,B,R,C,x,O,g]);return n.createElement(o.Provider,{value:M},r)}y.propTypes={children:i.node,initialTheme:i.string,value:i.shape({APP:i.shape({NAME:i.string.isRequired,CANONICAL:i.string.isRequired,SUPPORT_EMAIL:i.string,TITLE_SUFFIX:i.string}),SOCIAL:i.shape({FACEBOOK:i.string,INSTAGRAM:i.string,YOUTUBE:i.string}),CONSTANTS:i.shape({}),locale:i.string}).isRequired,maintenance:i.oneOfType([i.bool,i.shape({start:i.instanceOf(Date),end:i.instanceOf(Date)})]),routes:i.arrayOf(i.shape({path:i.string.isRequired,exact:i.bool,component:i.elementType,QUERY:i.object,prepareQueryVariables:i.func}).isRequired),ssrHostname:i.string,extraComponents:i.arrayOf(i.shape({key:i.string.isRequired,component:i.node})),QUERY_APPLICATION:i.any,applicationQueryVariables:i.objectOf(i.string),redirectLocallyAfterLogin:i.bool,defaultRedirectionAfterLogin:i.string,fetchOptions:i.object};const d=y},1006:(e,t,r)=>{r.d(t,{A:()=>n});var n=r(4510).i9},9902:(e,t,r)=>{r.d(t,{A:()=>f,h:()=>u});var n=r(2366),o=r(4510);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){var n,o,a,s;n=e,o=t,a=r[t],s=function(e,t){if("object"!=i(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==i(s)?s:String(s))in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c={key:n.string,label:n.string,url:n.string,disabled:n.bool,className:n.string,Component:n.node,displayItemsAs:n.oneOf(["nested","group"]),items:n.array},l=n.arrayOf((function(){var e;return(e=n.shape(c)).isRequired.apply(e,arguments)}));c.items=l;var u=n.shape(c).isRequired,f=s(s(s(s({},o.Bc),o.yA),o.Ki),{},{rootItem:u,onItemMouseEnterHandler:n.func,onItemMouseLeaveHandler:n.func,spaced:n.bool,appendItems:l,hideRootItem:n.bool})},6744:(e,t,r)=>{r.d(t,{wi:()=>y,Y9:()=>l,mg:()=>M,mC:()=>A});var n=r(2854),o=r(5566),i=r(1006),a=o.base,s="navigation-header";function c(e){var t=e.id,i=e.className,c=e.style,l=e.as,u=void 0===l?"nav":l,f=e.fixed,p=e.left,m=e.children,b=e.right,y=e.UNSTABLE_borders,d=e.UNSTABLE_padded;return(0,n.useInsertionEffect)((function(){r.e(2719).then(r.bind(r,2719))}),[]),n.createElement(u,{id:t,className:[a,s,i,f&&o.modifierFixed,f&&"default-columns",d&&"section padded",y&&"borders","grid"].filter((function(e){return e})).join(" "),style:c},n.createElement("span",{className:"span-2 md-span-3"},p),n.createElement("span",{className:"span-4 md-span-8"},m),n.createElement("span",{className:"span-2 md-span-3"},b))}c.propTypes=i.A;const l=c;var u=r(4510),f=u.i9,p=o.base,m="navigation-footer";function b(e){var t=e.id,i=e.className,a=e.style,s=e.as,c=void 0===s?"nav":s,l=e.fixed,u=e.children,f=e.right,b=e.UNSTABLE_padded,y=e.UNSTABLE_borders;return(0,n.useInsertionEffect)((function(){r.e(1057).then(r.bind(r,1057))}),[]),n.createElement(c,{id:t,className:[p,m,i,l&&o.modifierFixed,l&&"default-columns",b&&"section padded",y&&"borders","grid"].filter((function(e){return e})).join(" "),style:a},n.createElement("span",{className:"span-6 md-span-11"},u),n.createElement("span",{className:"span-2 md-span-3"},f))}b.propTypes=f;const y=b;var d=r(9641),v=r(8223),O=r(9902),g=["id","className","style","as","rootItem","appendItems","spaced","onItemMouseEnterHandler","onItemMouseLeaveHandler","hideRootItem"],h=["items"];function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},j.apply(this,arguments)}function S(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var P=o.base,E="vertical-menu";function w(e){var t=e.id,i=e.className,a=e.style,s=e.as,c=void 0===s?"nav":s,l=e.rootItem,u=e.appendItems,f=e.spaced,p=e.onItemMouseEnterHandler,m=e.onItemMouseLeaveHandler,b=e.hideRootItem,y=void 0!==b&&b,O=S(e,g);(0,n.useInsertionEffect)((function(){r.e(7727).then(r.bind(r,7727))}),[]);var w=(0,d.zy)(),A=(0,n.useCallback)((function(e){return n.createElement("li",{key:e.key||e.label,className:[e.disabled&&o.modifierDisabled,e.url&&w.pathname===e.url&&o.modifierActive,!e.url&&e.items&&o.elementGroup,e.className].filter(Boolean).join(" "),onMouseLeave:function(){return null==m?void 0:m(e)}},e.Component?n.createElement(e.Component,{item:e}):e.url?n.createElement(v.N_,{to:e.url,onMouseEnter:function(){return null==p?void 0:p(e)}},e.label):e.label,e.items&&!e.url&&n.createElement("ul",{className:"container"},e.items.map(A)))}),[w.pathname,p,m]),N=l.items,L=S(l,h),I=(0,n.useMemo)((function(){return u?N.concat(u):l.items}),[u,l.items]);return n.createElement(c,j({id:t,className:[P,E,i,f&&o.modifierSpaced].filter(Boolean).join(" "),style:a},O),n.createElement("ul",null,!y&&A(L),I.map(A)))}w.propTypes=O.A;const A=w;var N=r(2366);function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){var n,o,i,a;n=e,o=t,i=r[t],a=function(e,t){if("object"!=L(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=L(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==L(a)?a:String(a))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var D=T(T(T(T(T(T({},u.Bc),u.tE),u.SG),u.Ki),u.yA),{},{span:N.number,spanDesktop:N.number});function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){var n,o,i,a;n=e,o=t,i=r[t],a=function(e,t){if("object"!=R(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=R(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==R(a)?a:String(a))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var C=o.base,x="navigation-paginator";function B(e){var t=e.id,o=e.className,i=e.style,a=e.as,s=void 0===a?"nav":a,c=e.left,l=e.right,u=e.desktopOnly,f=e.span,p=void 0===f?4:f,m=e.spanDesktop,b=void 0===m?3:m;return(0,n.useInsertionEffect)((function(){r.e(7919).then(r.bind(r,7919))}),[]),n.createElement(s,{id:t,className:[C,x,o,u&&"desktop-only","container grid"].filter((function(e){return e})).join(" "),style:k({"--span":p,"--span-desktop":b},i)},n.createElement("span",null,c),n.createElement("span",null,l))}B.propTypes=D;const M=B},4794:(e,t,r)=>{r.d(t,{X8:()=>m,mY:()=>s.wi,gq:()=>s.Y9,Ks:()=>a.K,QR:()=>a.Q});var n=r(2854),o=r(2366),i=r(5566);i.base;o.string,o.string,o.objectOf(o.string),o.node;var a=r(8703),s=r(6744),c=r(8223),l=r(5282),u=i.base,f="navigation-debug-bar";function p(e){var t=e.id,o=e.className,i=e.style,a=e.items;return(0,n.useInsertionEffect)((function(){r.e(1099).then(r.bind(r,1099))}),[]),n.createElement(s.Y9,{id:t,className:[u,f,o,"container","in-progress"].filter((function(e){return e})).join(" "),style:i,left:"~menu",desktop:!0},n.createElement("ul",{className:"inline",style:{flexWrap:"wrap"}},a.map((function(e){return n.createElement("li",{key:e.label},n.createElement(c.N_,{to:e.url},e.label))}))))}p.propTypes={id:o.string,className:o.string,style:o.objectOf(o.string),items:o.arrayOf(o.shape({label:o.string,url:o.string}))};const m=(0,l.o1)(p)},4510:(e,t,r)=>{r.d(t,{Bc:()=>s,Ki:()=>p,SG:()=>u,i9:()=>m,tE:()=>f,wl:()=>l,yA:()=>c});var n=r(2366);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){var n,i,a,s;n=e,i=t,a=r[t],s=function(e,t){if("object"!=o(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(i),(i="symbol"==o(s)?s:String(s))in n?Object.defineProperty(n,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[i]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s={id:n.string,className:n.string,style:n.objectOf(n.string)},c={as:n.elementType},l={fixed:n.bool},u={right:n.node,desktopRightSpan:n.number},f={left:n.node,desktopLeftSpan:n.number},p={desktopOnly:n.bool},m=a(a(a(a(a(a({},s),c),l),u),f),{},{children:n.node.isRequired,desktop:n.bool,UNSTABLE_borders:n.bool,UNSTABLE_padded:n.bool});a(a({},l),{},{children:n.node.isRequired,items:n.arrayOf(n.shape({label:n.string.isRequired,url:n.string.isRequired,footerContent:n.string})),menuLabel:n.string,hidePreviousButton:n.bool,hideNextButton:n.bool,handlerPrevious:n.func,handlerNext:n.func,submit:n.element,currentFooterContent:n.string})}}]);