"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[3984],{8703:(e,t,r)=>{r.d(t,{K:()=>te,Q:()=>de});var n=r(2854),o=r(9641),i=r(5566);const u=n.createContext({});var c=r(2366),a=r(4510),l=r(9902),f=r(1006);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){var n,o,i,u;n=e,o=t,i=r[t],u=function(e,t){if("object"!=s(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==s(u)?u:String(u))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=y(y(y({},a.wl),a.Bc),{},{children:c.node.isRequired,rootItem:l.h,currentFooterContent:c.string}),m=y(y({},l.A),{},{groupClassName:c.string}),v=y(y({},a.Bc),{},{desktopVerticalMenuSingleSpan:c.number,desktopVerticalMenuGroupSpan:c.number,children:c.node.isRequired,verticalMenuProps:c.shape(m)}),d=y({},f.A);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){var n,o,i,u;n=e,o=t,i=r[t],u=function(e,t){if("object"!=O(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==O(u)?u:String(u))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function j(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=g(g({},e),{},{depth:r?r.depth+1:0,parentUrl:r?r.url:null});e.url&&(o=g(g({},o),{},{depth:r?r.depth+1:0}),n[e.url]=o);var i=e.url?o:r;return o.items=null===(t=e.items)||void 0===t?void 0:t.map((function(e){return j(e,i,n).preparedRoot})),{preparedRoot:o,nearestNavigableAncestor:i,urlIndex:n}}function S(e,t){var r=[],n=e[t];for(n=n.items?n:e[n.parentUrl];n;)r.unshift(n),n=e[n.parentUrl];return r}function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){var n,o,i,u;n=e,o=t,i=r[t],u=function(e,t){if("object"!=P(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=P(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==P(u)?u:String(u))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function C(e){return function(e){if(Array.isArray(e))return I(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return I(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?I(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const x=function(e,t){switch(t.type){case"SELECT_URL":var r=t.payload,n=e.urlIndex[r];if(!n)return e;if(!e.urlIndex[r])return e;var o=C(S(e.urlIndex,r));return E(E({},e),{},{currentItem:n,hoverTree:[],currentDepth:n.items?n.depth:-1,currentTree:o});case"FOCUS_MENU":return E(E({},e),{},{currentDepth:e.currentTree.length-1});case"FOCUS_CANVAS":return E(E({},e),{},{currentDepth:-1});case"FOCUS_PARENT":if(e.currentTree.length<=1)return e;var i=e.urlIndex[e.currentItem.parentUrl];return E(E({},e),{},{currentItem:i,currentDepth:i.depth});case"HOVER_ITEM":var u=t.payload;if(!e.urlIndex[u])return e;var c=C(S(e.urlIndex,u));return E(E({},e),{},{hoverTree:c});case"LEAVE_MENU":return E(E({},e),{},{hoverTree:[]});case"RESET":return E(E({},e),{},{currentDepth:-1,currentItem:null,currentTree:[]});default:throw new Error("Unhandled action type: ".concat(t.type))}};var A=r(6744);function D(){return(0,n.useContext)(u)}var M=["groupClassName"],N=["parentUrl"];function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},T.apply(this,arguments)}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function k(e){var t,r=e.groupClassName,o=_(e,M),i=D(),u=i.currentTree,c=i.hoverTree,a=i.onItemMouseEnterHandler,l=i.onMenuMouseLeave,f=c.length?c:u,s=[];return s.push.apply(s,function(e){if(Array.isArray(e))return U(e)}(t=f.slice(0,f.length).map((function(e){e.parentUrl;var t=_(e,N);return n.createElement(A.mC,T({key:null==t?void 0:t.url,rootItem:t,onItemMouseEnterHandler:a},o))})))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return U(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?U(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n.createElement("div",{onMouseLeave:l,className:["group grid",r].filter(Boolean).join(" ")},s)}k.propTypes=m;const B=k;function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},L.apply(this,arguments)}var R=i.base,F="canvas";function V(e){var t=e.id,r=e.className,o=e.style,i=e.children,u=e.desktopVerticalMenuGroupSpan,c=void 0===u?9:u,a=e.desktopVerticalMenuSingleSpan,l=void 0===a?3:a,f=e.verticalMenuProps;return n.createElement("div",{className:"main-row container grid"},n.createElement(B,L({groupClassName:"\n      md-span-".concat(c),className:["md-span-".concat(l),"background near"].filter(Boolean).join(" ")},f)),n.createElement("div",{id:t,style:o,className:["grid",R,F,r].filter(Boolean).join(" ")},i))}V.propTypes=v;const H=V;var q=["children"];function K(){return K=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},K.apply(this,arguments)}function X(e){var t=e.children,r=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,q),o=D(),i=o.focusParent,u=o.currentDepth,c=o.fixed;return n.createElement(A.Y9,K({fixed:c,left:u!==Number(0)?n.createElement("button",{onClick:i,type:"button"},"previous"):null},r),JSON.stringify(u),t)}X.propTypes=d;const Y=X;function Q(e){return Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Q(e)}function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(Object(r),!0).forEach((function(t){var n,o,i,u;n=e,o=t,i=r[t],u=function(e,t){if("object"!=Q(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=Q(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==Q(u)?u:String(u))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function G(e,t){if(e){if("string"==typeof e)return J(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?J(e,t):void 0}}function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var W=i.base,Z="nested-navigation";function ee(e){var t=e.id,i=e.className,c=e.style,a=e.children,l=e.rootItem;(0,n.useInsertionEffect)((function(){r.e(3854).then(r.bind(r,3854))}),[]);var f,s,p=(0,n.useMemo)((function(){return j(l)}),[l]),y=p.preparedRoot,b=p.urlIndex,m=(0,o.zy)(),v=(0,n.useMemo)((function(){return b[m.pathname]?S(b,m.pathname):[y]}),[b]),d=(0,n.useMemo)((function(){var e,t;return{currentDepth:null!==(e=b[m.pathname])&&void 0!==e&&e.items?b[m.pathname].depth:-1,currentTree:(t=v,function(e){if(Array.isArray(e))return J(e)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||G(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),currentItem:b[m.pathname]||y,urlIndex:b,hoverTree:[]}}),[v]),O=(f=(0,n.useReducer)(x,d),s=2,function(e){if(Array.isArray(e))return e}(f)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,u,c=[],a=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(c.push(n.value),c.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(f,s)||G(f,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),h=O[0],g=O[1],P=(0,o.W6)(),w=(0,n.useCallback)((function(e){g({type:"SELECT_URL",payload:e})}),[]),E=(0,n.useCallback)((function(){P.push(h.currentItem.parentUrl||l.url),g({type:"FOCUS_PARENT"})}),[h.currentItem,l]),C=(0,n.useCallback)((function(e){g({type:"HOVER_ITEM",payload:e.url})}),[]),I=(0,n.useCallback)((function(){g({type:"LEAVE_MENU"})}),[]),A=(0,n.useCallback)((function(){g({type:"FOCUS_MENU"})}),[]),D=(0,n.useCallback)((function(){g({type:"FOCUS_CANVAS"})}),[]);(0,n.useEffect)((function(){var e;m.pathname!==(null===(e=h.currentItem)||void 0===e?void 0:e.url)&&w(m.pathname)}),[m.pathname]);var M=(0,n.useCallback)((function(){g({type:"RESET"})}),[]),N=(0,n.useMemo)((function(){return z(z({},h),{},{selectUrl:w,resetNavigation:M,focusParent:E,focusMenu:A,focusCanvas:D,onItemMouseEnterHandler:C,onMenuMouseLeave:I})}),[h,w,E,C,I]);return n.createElement(u.Provider,{value:N},n.createElement("div",{id:t,className:[W,Z,i,"grid container",-1===h.currentDepth&&"focus-canvas"].filter((function(e){return e})).join(" "),style:z({"--tree-depth":h.currentTree.length-1,"--offset":-1===h.currentDepth?h.currentTree.length:h.currentDepth},c)},a))}ee.propTypes=b,ee.Header=n.memo(Y),ee.VerticalMenu=n.memo(B),ee.Canvas=n.memo(H);const te=ee;var re=r(8223);const ne=n.createContext({});function oe(e){return oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},oe(e)}function ie(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ue(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(r),!0).forEach((function(t){var n,o,i,u;n=e,o=t,i=r[t],u=function(e,t){if("object"!=oe(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=oe(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==oe(u)?u:String(u))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ie(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ce=ue(ue({},a.wl),{},{children:c.node.isRequired,rootItem:l.h,menuLabel:c.string,hidePreviousButton:c.bool,hideNextButton:c.bool,handlerPrevious:c.func,handlerNext:c.func,submit:c.element,currentFooterContent:c.string});function ae(e){return ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ae(e)}function le(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function fe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?le(Object(r),!0).forEach((function(t){var n,o,i,u;n=e,o=t,i=r[t],u=function(e,t){if("object"!=ae(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=ae(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==ae(u)?u:String(u))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):le(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function se(){return se=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},se.apply(this,arguments)}function pe(e){var t=(0,n.useContext)(ne),r=t.previous,o=t.next,i=t.currentContent,u=t.fixed,c=t.hidePreviousButton,a=t.hideNextButton;return n.createElement(A.Y9,se({left:!c&&r,right:!a&&o,fixed:u},e),i)}function ye(e){var t=(0,n.useContext)(ne),r=t.currentFooterContent,o=t.next,i=t.fixed,u=t.hideNextButton;return n.createElement(A.wi,se({right:!u&&o,fixed:i},e),r)}function be(e){var t=(0,n.useContext)(ne),r=t.previous,o=t.next,i=t.hidePreviousButton,u=t.hideNextButton;return n.createElement(A.mg,se({left:!i&&r,right:!u&&o},e))}function me(e){var t=(0,n.useContext)(ne),r=t.rootItem;return t.currentIndex,n.createElement(A.mC,se({rootItem:r},e))}function ve(e){var t=e.children,r=e.rootItem,i=e.fixed,u=void 0!==i&&i,c=e.handlerNext,a=e.handlerPrevious,l=e.hideNextButton,f=void 0!==l&&l,s=e.hidePreviousButton,p=void 0!==s&&s,y=e.currentFooterContent,b=e.submit,m=(0,o.zy)(),v=r.items,d=(0,n.useMemo)((function(){return v.findIndex((function(e){return e.url===m.pathname}))}),[v,m.pathname]),O=(0,n.useMemo)((function(){return v.map((function(e,t){return fe(fe({},e),{},{disabled:t>d})}))}),[v,d]),h=(0,n.useMemo)((function(){var e=d-1;if(e<0)return null;var t=v[e];return a?n.createElement("button",{type:"button",onClick:a},t.label):n.createElement(re.N_,{to:t.url},t.label)}),[a,d,v]),g=(0,n.useMemo)((function(){var e=d+1;if(e>v.length)return null;if(e===v.length)return b||null;var t=v[e];return c?n.createElement("button",{type:"button",onClick:c},t.label):n.createElement(re.N_,{to:t.url},t.label)}),[c,d,v]),j=(0,n.useMemo)((function(){return v[d].label}),[v,d]),S=(0,n.useMemo)((function(){return void 0!==ae(y)?y:v[d].footerContent}),[v,d,y]),P=(0,n.useMemo)((function(){return{previous:h,next:g,currentContent:j,currentFooterContent:S,rootItem:r,currentIndex:d,fixed:u,hidePreviousButton:p,hideNextButton:f}}),[h,g,j,S,r,O,d,u]);return n.createElement(ne.Provider,{value:P},t)}ve.propTypes=ce,ve.Header=n.memo(pe),ve.Footer=n.memo(ye),ve.Paginator=n.memo(be),ve.VerticalMenu=n.memo(me);const de=ve},4030:(e,t,r)=>{r.d(t,{Ks:()=>o.Ks,QN:()=>n.QN,X8:()=>o.X8,Xn:()=>n.Xn,gq:()=>o.gq,mY:()=>o.mY,qK:()=>n.qK});var n=r(6474),o=r(4794)}}]);