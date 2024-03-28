(()=>{"use strict";var e,r,t,n,a,o={5290:(e,r,t)=>{t.r(r),t.d(r,{default:()=>s});var n=t(2854),a=t(6963),o=t(7920),l=t(3966),i=(0,a.YK)({notFound:{id:"M/1qd7",defaultMessage:[{type:0,value:"The page you requested is not found."}]}});const s=function(e){var r=e.staticContext,t=(0,o.A)().formatMessage;return r&&(r.status=404),console.log("Status404"),n.createElement(l.A,{title:"Error 404"},n.createElement("p",{className:"container"},t(i.notFound)))}},8713:(e,r,t)=>{t.d(r,{A:()=>a});var n=t(7668);const a=[{path:"/404",component:(0,n.R)({resolved:{},chunkName:function(){return"common"},isReady:function(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:function(){return t.e(2076).then(t.bind(t,5290))},requireAsync:function(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function(e){var r=this.resolve(e);return t(r)},resolve:function(){return 5290}}),exact:!0},{path:"/maintenance",component:(0,n.R)({resolved:{},chunkName:function(){return"common"},isReady:function(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:function(){return t.e(2076).then(t.bind(t,1417))},requireAsync:function(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function(e){var r=this.resolve(e);return t(r)},resolve:function(){return 1417}}),exact:!0},{path:"/login",component:(0,n.R)({resolved:{},chunkName:function(){return"common"},isReady:function(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:function(){return t.e(2076).then(t.bind(t,3818))},requireAsync:function(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function(e){var r=this.resolve(e);return t(r)},resolve:function(){return 3818}}),exact:!0},{path:"/profile",component:(0,n.R)({resolved:{},chunkName:function(){return"common"},isReady:function(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:function(){return t.e(2076).then(t.bind(t,2050))},requireAsync:function(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function(e){var r=this.resolve(e);return t(r)},resolve:function(){return 2050}}),exact:!0,isPrivate:!0}]},3966:(e,r,t)=>{t.d(r,{A:()=>m});var n=t(2854),a=t(2366),o=t(8223),l=t(424),i=t(7813),s=[{path:"",title:"Homepage"},{path:"maintenance",title:"Maintenance"},{path:"login",title:"Login"},{path:"profile",title:"Profile"},{path:"formtest",title:"Form Test"},{path:"fileupload",title:"File Upload"},{path:"404",title:"Test 404"}];function u(){return n.createElement("ul",{className:""},s.map((function(e){var r=e.path,t=e.title;return n.createElement("li",{key:r},n.createElement(o.N_,{to:r},t))})))}var c=[{url:"/",label:"Home"},{url:"/maintenance",label:"Maintenance"},{url:"/login",label:"Login"},{url:"/profile",label:"Profile"},{url:"/formtest",label:"Form Test"},{url:"/fileupload",label:"File Upload"},{url:"/404",label:"Test 404"}];function d(e){var r=e.title,t=e.children,a=e.sidebar,o=(0,l.pB)(),s=o.logout,d=o.isLogoutInFlight;return n.createElement("main",{className:"grid",style:{padding:"0 1em"}},n.createElement("div",{className:"container"},n.createElement(l.DL,{FRAGMENT:i.IC}),n.createElement(l.X8,{className:"container",items:c})),n.createElement("div",{className:"background near span-8 md-span-3 fit-content"},n.createElement("h1",null,r),a,n.createElement(u,null),n.createElement(l.HP,null),n.createElement(l.Q$,null),n.createElement("button",{onClick:s,disabled:d,type:"button"},"Logout",d&&"...")),n.createElement("div",{className:"background near span-8 md-span-9 fit-content grid"},t))}function f(e){var r=e.title,t=e.wireframe,a=e.wireframeTitle,o=e.children;return t?n.createElement(d,{title:a||r},n.createElement("div",{style:{minHeight:"300px"}},"WIREFRAME MODE")):n.createElement(d,{title:r},o)}d.propTypes={title:a.node,children:a.node,sidebar:a.node},f.propTypes={title:a.node,wireframe:a.bool,wireframeTitle:a.node,children:a.node};const m=f},7668:(e,r,t)=>{t.d(r,{R:()=>l});var n=t(2854),a=t(6500),o=t(3966);function l(e){return(0,a.Ay)(e,{fallback:n.createElement(o.A,{wireframe:!0,wireframeTitle:"Loading"})})}},381:(e,r,t)=>{t.d(r,{M0:()=>f,JP:()=>x,Vx:()=>U,lB:()=>m});var n=t(2854);const a=n.createContext({});var o=t(2366),l=t(9641),i=t(7206),s=t(424);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},u.apply(this,arguments)}function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function d(e){var r,t,o=e.children,s=e.FRAGMENT,u=e.data,d=e.basePath,f=e.baseBoardPath,m=(0,l.zy)(),p=(0,l.B6)(m.pathname,{path:f}),h=null==p?void 0:p.params.board,y=function(e){if(!function(e){return/^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(e)}(e))return!1;try{return atob(e).includes(":")}catch(e){return!1}}(h)?h:null,b=(r=(0,i.useRefetchableFragment)(s,u),t=2,function(e){if(Array.isArray(e))return e}(r)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,o,l,i=[],s=!0,u=!1;try{if(o=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;s=!1}else for(;!(s=(n=o.call(t)).done)&&(i.push(n.value),i.length!==r);s=!0);}catch(e){u=!0,a=e}finally{try{if(!s&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(u)throw a}}return i}}(r,t)||function(e,r){if(e){if("string"==typeof e)return c(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(e,r):void 0}}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),v=b[0],g=b[1],A=v.board;(0,n.useEffect)((function(){y&&y!==(null==A?void 0:A.id)&&g({id:y})}),[y]);var E=(0,n.useMemo)((function(){return{data:A,id:null==A?void 0:A.id,uuid:A&&atob(A.id).split(":")[1],currentBoardId:y,basePath:d,baseBoardPath:f}}),[f,d,A,y,u]);return n.createElement(a.Provider,{value:E},o)}d.propTypes={children:o.node,FRAGMENT:o.object,basePath:o.string,baseBoardPath:o.string,data:o.any};const f=function(e){var r=(0,s.Xn)().data;return n.createElement(d,u({data:r},e))},m=function(){return(0,n.useContext)(a)};var p=t(824),h=t(5566),y=t.n(h),b=y().base,v="search-header";function g(e){var r=e.id,a=e.className,o=e.style,i=e.QUERY,u=e.accessor;(0,n.useInsertionEffect)((function(){Promise.all([t.e(1771),t.e(191)]).then(t.bind(t,191))}),[]);var c=m().baseBoardPath,d=(0,(0,p.xW)().watch)("search"),f=(0,l.W6)();return(0,n.useEffect)((function(){(null==d?void 0:d.length)>2&&f.push((0,l.tW)(c,{board:d}))}),[d]),n.createElement(s.gq,{id:r,className:[b,v,a].filter((function(e){return e})).join(" "),style:o,left:n.createElement("strong",null,"*board")},n.createElement("div",{className:"grid container"},n.createElement(s.D0,{name:"search",type:"combobox",optional:!0,spanLabel:3,spanLabelDesktop:3,spanContent:4,spanContentDesktop:4,extensions:[(0,s.kz)(i,u,{minLength:2,transform:function(e){return e.edges.map((function(e){return{label:e.node.name,value:e.node.id}}))}})],options:[{label:"Start typing to search",value:"1",disabled:!0}]})))}g.propTypes={id:o.string,className:o.string,style:o.objectOf(o.string),QUERY:o.object.isRequired,accessor:o.string.isRequired};const A=function(e){var r=(0,p.mN)({mode:"onChange"});return n.createElement(p.Op,r,n.createElement(g,e))};var E=["id","className","style","children","FRAGMENT","data"];function O(){return O=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},O.apply(this,arguments)}function k(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var S=y().base,N="select-header";function P(e){var r=e.id,a=e.className,o=e.style,u=(e.children,e.FRAGMENT),c=e.data,d=function(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}(e,E);(0,n.useInsertionEffect)((function(){Promise.all([t.e(9947),t.e(7503)]).then(t.bind(t,7503))}),[]);var f,p,h=m(),y=h.basePath,b=h.baseBoardPath,v=h.currentBoardId,g=(0,i.useFragment)(u,c),A=(f=(0,n.useState)(v),p=2,function(e){if(Array.isArray(e))return e}(f)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,o,l,i=[],s=!0,u=!1;try{if(o=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;s=!1}else for(;!(s=(n=o.call(t)).done)&&(i.push(n.value),i.length!==r);s=!0);}catch(e){u=!0,a=e}finally{try{if(!s&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(u)throw a}}return i}}(f,p)||function(e,r){if(e){if("string"==typeof e)return k(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?k(e,r):void 0}}(f,p)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),P=A[0],j=A[1],F=(null==g?void 0:g.edges)||{},M=(0,l.W6)(),B=(0,n.useCallback)((function(e){var r=e.target.value;"null"===r?(j("null"),M.push(y)):(j(r),M.push((0,l.tW)(b,{board:r})))}),[M]);return(0,n.useEffect)((function(){console.log("currentBoardId",v),P!==v&&j(v)}),[v]),n.createElement(s.gq,O({id:r,className:[S,N,a].filter((function(e){return e})).join(" "),style:o,content:"Select",left:n.createElement("strong",null,"Board"),desktop:!0},d),n.createElement("select",{id:"_board",name:"_board",onChange:B,value:null!=P?P:"null"},n.createElement("option",{value:"null"},"Select a board"),F.map((function(e){var r=e.node;return n.createElement("option",{key:r.id,value:r.board.id},r.board.name," ","- (",r.role,")")}))))}P.propTypes={id:o.string,className:o.string,style:o.objectOf(o.string),children:o.node,FRAGMENT:o.any,data:o.any};const j=function(e){var r=(0,s.ur)().data;return n.createElement(P,O({data:r.boardMemberships},e))};var F,M,B={fragment:{argumentDefinitions:F=[{defaultValue:null,kind:"LocalArgument",name:"value"}],kind:"Fragment",metadata:null,name:"HeaderGroupSearchBoardQuery",selections:M=[{alias:null,args:[{kind:"Variable",name:"search",variableName:"value"}],concreteType:"BoardNodeConnection",kind:"LinkedField",name:"boards",plural:!1,selections:[{alias:null,args:null,concreteType:"BoardNodeEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"BoardNode",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:F,kind:"Operation",name:"HeaderGroupSearchBoardQuery",selections:M},params:{cacheID:"ef74d6c924d5ab021459ac68de2d204f",id:null,metadata:{},name:"HeaderGroupSearchBoardQuery",operationKind:"query",text:"query HeaderGroupSearchBoardQuery(\n  $value: String!\n) {\n  boards(search: $value) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n"},hash:"cab6287b30363ee3413b91443c5f2b01"};const w=B;var R=function(){var e={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"HeaderGroupViewerBoardMembershipsFragment",selections:[{alias:null,args:null,concreteType:"BoardMembershipNodeEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"BoardMembershipNode",kind:"LinkedField",name:"node",plural:!1,selections:[e,{alias:null,args:null,kind:"ScalarField",name:"role",storageKey:null},{alias:null,args:null,concreteType:"BoardNode",kind:"LinkedField",name:"board",plural:!1,selections:[e,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"BoardMembershipNodeConnection",abstractKey:null}}();R.hash="d09e0f915d4c780d53fcfc7e74d40ca4";const T=R;var L=[{url:"/",label:"Homepage"},{url:"/login",label:"Login"},{url:"/profile",label:"Profile"},{url:"/d",label:"Dashboard"},{url:"/maintenance",label:"Maintenance"},{url:"/formtest",label:"DebugForm"},{url:"/404",label:"Status404"}],D=t(7813),_=(T.hash&&"d09e0f915d4c780d53fcfc7e74d40ca4"!==T.hash&&console.error("The definition of 'HeaderGroupViewerBoardMembershipsFragment' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data."),T),I=(w.hash&&"cab6287b30363ee3413b91443c5f2b01"!==w.hash&&console.error("The definition of 'HeaderGroupSearchBoardQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data."),w);function K(e){var r=e.wireframe,t=e.before,a=e.after;return n.createElement("div",{className:"container"},t,n.createElement(A,{QUERY:I,accessor:"boards"}),r?n.createElement(s.gq,{left:"viewer"},"User not connected"):n.createElement(s.DL,{FRAGMENT:D.IC}),n.createElement(s.X8,{items:L,className:"container"}),n.createElement(j,{FRAGMENT:_}),n.createElement(s.Ks.Header,null),a)}K.propTypes={wireframe:o.bool,before:o.node,after:o.node};const x=K;var C=function(){var e={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"NavigationBoardMembershipsFragment",selections:[{alias:null,args:null,concreteType:"BoardMembershipNodeEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"BoardMembershipNode",kind:"LinkedField",name:"node",plural:!1,selections:[e,{alias:null,args:null,kind:"ScalarField",name:"role",storageKey:null},{alias:null,args:null,concreteType:"BoardNode",kind:"LinkedField",name:"board",plural:!1,selections:[e,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"BoardMembershipNodeConnection",abstractKey:null}}();C.hash="8c031f3c558c227203a5b84b9db38b86";const q=C;var H=t(7050),G=(q.hash&&"8c031f3c558c227203a5b84b9db38b86"!==q.hash&&console.error("The definition of 'NavigationBoardMembershipsFragment' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data."),q);function Q(e){var r=e.children,t=(0,s.ur)().data,a=(0,s.pB)().logout,o=(0,i.useFragment)(G,t.boardMemberships),l=(0,n.useMemo)((function(){return{label:"Navigation",url:H.Ay.generatePath("HOME"),items:[{label:"Home",url:H.Ay.generatePath("HOME2")},{displayItemsAs:"group",items:[{label:"*New Board",url:H.Ay.generatePath("NEW_BOARD")}]},{label:"Boards",displayItemsAs:"group",items:(null==o?void 0:o.edges.map((function(e){var r=e.node;return{label:r.board.name,url:H.Ay.generatePath("BOARD_HOME",{board:r.board.id}),items:[{displayItemsAs:"group",items:[{label:"Board",url:H.Ay.generatePath("BOARD_HOME2",{board:r.board.id})}]},{label:"Settings",url:H.Ay.generatePath("BOARD_SETTINGS",{board:r.board.id})}]}})))||[]},{label:"Profile",url:H.Ay.generatePath("PROFILE")},{label:"Logout",Component:function(){return n.createElement("button",{onClick:a},"Logout")}}]}}),[]);return n.createElement(s.Ks,{rootItem:l},r)}Q.propTypes={children:o.node,rootItem:o.object};const U=Q},4294:(e,r,t)=>{t.d(r,{A:()=>b});var n,a,o={fragment:{argumentDefinitions:n=[{defaultValue:null,kind:"LocalArgument",name:"id"}],kind:"Fragment",metadata:null,name:"MainLayerBoardProviderRefetchQuery",selections:[{args:a=[{kind:"Variable",name:"id",variableName:"id"}],kind:"FragmentSpread",name:"MainLayerBoardProviderFragment"}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:n,kind:"Operation",name:"MainLayerBoardProviderRefetchQuery",selections:[{alias:null,args:a,concreteType:"BoardNode",kind:"LinkedField",name:"board",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"created",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"updated",storageKey:null}],storageKey:null}]},params:{cacheID:"c91e212f307106db41567d9dbd15b4e2",id:null,metadata:{},name:"MainLayerBoardProviderRefetchQuery",operationKind:"query",text:"query MainLayerBoardProviderRefetchQuery(\n  $id: ID\n) {\n  ...MainLayerBoardProviderFragment_1Bmzm5\n}\n\nfragment MainLayerBoardProviderFragment_1Bmzm5 on Query {\n  board(id: $id) {\n    id\n    name\n    created\n    updated\n  }\n}\n"},hash:"941d8fd3c616c8bf0eb0e5e1632390d4"};const l={argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"id"}],kind:"Fragment",metadata:{refetch:{connection:null,fragmentPathInResult:[],operation:o}},name:"MainLayerBoardProviderFragment",selections:[{alias:null,args:[{kind:"Variable",name:"id",variableName:"id"}],concreteType:"BoardNode",kind:"LinkedField",name:"board",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"created",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"updated",storageKey:null}],storageKey:null}],type:"Query",abstractKey:null,hash:"941d8fd3c616c8bf0eb0e5e1632390d4"};var i=t(2854),s=t(2366),u=t(424),c=(t(7206),t(381)),d=t(7050),f=["children","wireframe"];function m(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var p=(l.hash&&"941d8fd3c616c8bf0eb0e5e1632390d4"!==l.hash&&console.error("The definition of 'MainLayerBoardProviderFragment' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data."),l);function h(e){var r=e.children,t=(e.wireframe,function(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}(e,f));return i.createElement(c.M0,{FRAGMENT:p,basePath:d.Ay.absolute.HOME,baseBoardPath:d.Ay.absolute.BOARD_HOME},i.createElement(c.Vx,t,r))}function y(e){e.title,e.children,e.sidebar;var r,t,n=e.wireframe,a=e.footer,o=e.routes,l=(r=(0,i.useMemo)((function(){return n?[c.Vx,{wireframe:n}]:[h,{wireframe:n}]}),[n]),t=2,function(e){if(Array.isArray(e))return e}(r)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,o,l,i=[],s=!0,u=!1;try{if(o=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;s=!1}else for(;!(s=(n=o.call(t)).done)&&(i.push(n.value),i.length!==r);s=!0);}catch(e){u=!0,a=e}finally{try{if(!s&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(u)throw a}}return i}}(r,t)||function(e,r){if(e){if("string"==typeof e)return m(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?m(e,r):void 0}}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=l[0],d=l[1];return i.createElement(s,d,i.createElement(c.JP,{wireframe:n}),i.createElement(u.Ks.Canvas,{className:"md-span-10 background near",desktopVerticalMenuGroupSpan:4,desktopVerticalMenuSingleSpan:2,verticalMenuProps:{hideRootItem:!0}},i.createElement("div",{className:"container"},i.createElement(u.z4,{items:o,wireframe:n}))),i.createElement(u.mY,{className:"background near container",content:a||"Footer"}))}y.propTypes={title:s.node,children:s.node,sidebar:s.node};const b=y},7050:(e,r,t)=>{t.d(r,{Ay:()=>a});var n=":board([0-9a-z-=.]{3,80})";const a=(0,t(424).X5)("/d",{HOME:"/",HOME2:"/home",PROFILE:"/profile",NEW_BOARD:"/new-board",BOARD_HOME:"/".concat(n),BOARD_HOME2:"/".concat(n,"/home"),BOARD_SETTINGS:"/".concat(n,"/settings")})},5650:(e,r,t)=>{t.d(r,{Ay:()=>m,E3:()=>p});var n=t(2854),a=t(7668),o=t(7050),l=t(4294);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}var s=["children"];function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){var n,a,o;n=e,a=r,o=t[r],(a=function(e){var r=function(e,r){if("object"!=i(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!=i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==i(r)?r:String(r)}(a))in n?Object.defineProperty(n,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[a]=o})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var f=[{path:[o.Ay.absolute.HOME,o.Ay.absolute.HOME2],component:(0,a.R)({resolved:{},chunkName:function(){return"app.dashboard"},isReady:function(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:function(){return t.e(7426).then(t.bind(t,5174))},requireAsync:function(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function(e){var r=this.resolve(e);return t(r)},resolve:function(){return 5174}}),exact:!0,isPrivate:!0},{path:[o.Ay.absolute.PROFILE],component:(0,a.R)({resolved:{},chunkName:function(){return"app.dashboard"},isReady:function(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:function(){return t.e(7426).then(t.bind(t,6101))},requireAsync:function(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function(e){var r=this.resolve(e);return t(r)},resolve:function(){return 6101}}),exact:!0,isPrivate:!0},{path:[o.Ay.absolute.NEW_BOARD],component:(0,a.R)({resolved:{},chunkName:function(){return"app.dashboard"},isReady:function(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:function(){return t.e(7426).then(t.bind(t,385))},requireAsync:function(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function(e){var r=this.resolve(e);return t(r)},resolve:function(){return 385}}),exact:!0,isPrivate:!0},{path:[o.Ay.absolute.BOARD_SETTINGS],component:(0,a.R)({resolved:{},chunkName:function(){return"app.dashboard"},isReady:function(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:function(){return t.e(7426).then(t.bind(t,88))},requireAsync:function(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function(e){var r=this.resolve(e);return t(r)},resolve:function(){return 88}}),exact:!0,isPrivate:!0},{path:[o.Ay.absolute.BOARD_HOME,o.Ay.absolute.BOARD_HOME2],component:(0,a.R)({resolved:{},chunkName:function(){return"app.dashboard"},isReady:function(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:function(){return t.e(7426).then(t.bind(t,9703))},requireAsync:function(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function(e){var r=this.resolve(e);return t(r)},resolve:function(){return 9703}}),exact:!0,isPrivate:!0}];const m=[{path:["".concat(o.Ay.absolute.HOME)],component:function(e){var r=e.children,t=d(e,s);return n.createElement(l.A,c({routes:f},t),r)},isPrivate:!0}];var p=f},4315:(e,r,t)=>{t.d(r,{A:()=>u,E:()=>c});var n=t(8713),a=t(6601),o=t(8361),l=t(5650);function i(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"==typeof e)return s(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}const u=[].concat(i(a.A),i(o.A),i(l.Ay),i(n.A));var c=[].concat(i(a.A),i(o.A),i(l.E3),i(n.A))}},l={};function i(e){var r=l[e];if(void 0!==r)return r.exports;var t=l[e]={exports:{}};return o[e](t,t.exports,i),t.exports}i.m=o,e=[],i.O=(r,t,n,a)=>{if(!t){var o=1/0;for(c=0;c<e.length;c++){for(var[t,n,a]=e[c],l=!0,s=0;s<t.length;s++)(!1&a||o>=a)&&Object.keys(i.O).every((e=>i.O[e](t[s])))?t.splice(s--,1):(l=!1,a<o&&(o=a));if(l){e.splice(c--,1);var u=n();void 0!==u&&(r=u)}}return r}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[t,n,a]},i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var a=Object.create(null);i.r(a);var o={};r=r||[null,t({}),t([]),t(t)];for(var l=2&n&&e;"object"==typeof l&&!~r.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((r=>o[r]=()=>e[r]));return o.default=()=>e,i.d(a,o),a},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((r,t)=>(i.f[t](e,r),r)),[])),i.u=e=>(({2076:"common",3082:"base.homepage",4942:"en",6763:"es",7426:"app.dashboard"}[e]||e)+".js?"+{188:"e458f",191:"40831",256:"9ddbe",400:"d879b",837:"74884",1057:"06d55",1062:"bee93",1099:"43d2b",1442:"225b8",1771:"28762",1835:"e2c03",2076:"c753a",2455:"39cc7",2719:"54c9b",2937:"dc574",3082:"310d8",3429:"5c658",3713:"4f593",3854:"9fa21",4025:"51ce4",4359:"09bd1",4942:"e8082",5282:"4fbae",5547:"3178b",5618:"f8c06",5740:"894df",6374:"215d0",6763:"6ab81",6918:"22553",7125:"3acdc",7426:"4b11e",7503:"0c379",7727:"019bc",7919:"531d3",8113:"6a751",8323:"3ea69",8733:"984f5",9186:"45f5e",9365:"213c8",9437:"ee07a",9567:"20b8b",9645:"66de7",9947:"c97d7"}[e]),i.miniCssF=e=>e+".css",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n={},a="@aztlan/idioma:",i.l=(e,r,t,o)=>{if(n[e])n[e].push(r);else{var l,s;if(void 0!==t)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==a+t){l=d;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.setAttribute("data-webpack",a+t),l.src=e),n[e]=[r];var f=(r,t)=>{l.onerror=l.onload=null,clearTimeout(m);var a=n[e];if(delete n[e],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((e=>e(t))),r)return r(t)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),s&&document.head.appendChild(l)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/",(()=>{if("undefined"!=typeof document){var e={5284:0};i.f.miniCss=(r,t)=>{e[r]?t.push(e[r]):0!==e[r]&&{400:1,837:1,1057:1,1062:1,1099:1,1442:1,1771:1,1835:1,2455:1,2719:1,2937:1,3854:1,4025:1,4359:1,5547:1,5618:1,6374:1,6918:1,7125:1,7727:1,7919:1,8733:1,9186:1,9437:1,9947:1}[r]&&t.push(e[r]=(e=>new Promise(((r,t)=>{var n=i.miniCssF(e),a=i.p+n;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var a=(l=t[n]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(a===e||a===r))return l}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){var l;if((a=(l=o[n]).getAttribute("data-href"))===e||a===r)return l}})(n,a))return r();((e,r,t,n,a)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",i.nc&&(o.nonce=i.nc),o.onerror=o.onload=t=>{if(o.onerror=o.onload=null,"load"===t.type)n();else{var l=t&&t.type,i=t&&t.target&&t.target.href||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+": "+i+")");s.name="ChunkLoadError",s.code="CSS_CHUNK_LOAD_FAILED",s.type=l,s.request=i,o.parentNode&&o.parentNode.removeChild(o),a(s)}},o.href=r,document.head.appendChild(o)})(e,a,0,r,t)})))(r).then((()=>{e[r]=0}),(t=>{throw delete e[r],t})))}}})(),(()=>{var e={5284:0,4007:0};i.f.j=(r,t)=>{var n=i.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(4(0(0|07|25)|359)|9(186|437|947)|(293|554|83)7|1062|1771|6374|7125)$/.test(r))e[r]=0;else{var a=new Promise(((t,a)=>n=e[r]=[t,a]));t.push(n[2]=a);var o=i.p+i.u(r),l=new Error;i.l(o,(t=>{if(i.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,n[1](l)}}),"chunk-"+r,r)}},i.O.j=r=>0===e[r];var r=(r,t)=>{var n,a,[o,l,s]=t,u=0;if(o.some((r=>0!==e[r]))){for(n in l)i.o(l,n)&&(i.m[n]=l[n]);if(s)var c=s(i)}for(r&&r(t);u<o.length;u++)a=o[u],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(c)},t=self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var s=i.O(void 0,[558,4444,948,9242,9793,5873,2633,854,6353,0,8567,4156,5285,8161,7983,6932,3910,8053,195,8102,6131,4138,3261,8260,3111,2803,4612,6193,9494,4412,9827,702,4453,2395,4315,2307,5638,1799,6438,7389,7186,4007,8517,9183,2275,3984,4732,8094,170,2497,5977,5813,1757,774],(()=>i(5225)));s=i.O(s)})();