"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[988],{3955:(e,t,r)=>{r.d(t,{Gc:()=>S,RV:()=>F,bc:()=>M,cI:()=>xe,cl:()=>O,qo:()=>T});var s=r(2784),a=e=>"checkbox"===e.type,i=e=>e instanceof Date,n=e=>null==e;const o=e=>"object"==typeof e;var u=e=>!n(e)&&!Array.isArray(e)&&o(e)&&!i(e),l=e=>u(e)&&e.target?a(e.target)?e.target.checked:e.target.value:e,d=(e,t)=>e.has((e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e)(t)),c=e=>{const t=e.constructor&&e.constructor.prototype;return u(t)&&t.hasOwnProperty("isPrototypeOf")},f="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function m(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else{if(f&&(e instanceof Blob||e instanceof FileList)||!r&&!u(e))return e;if(t=r?[]:{},r||c(e))for(const r in e)e.hasOwnProperty(r)&&(t[r]=m(e[r]));else t=e}return t}var y=e=>Array.isArray(e)?e.filter(Boolean):[],h=e=>void 0===e,v=(e,t,r)=>{if(!t||!u(e))return r;const s=y(t.split(/[,[\].]+?/)).reduce(((e,t)=>n(e)?e:e[t]),e);return h(s)||s===e?h(e[t])?r:e[t]:s},g=e=>"boolean"==typeof e;const _={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},b={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},p="pattern",V="required",A=s.createContext(null),S=()=>s.useContext(A),F=e=>{const{children:t,...r}=e;return s.createElement(A.Provider,{value:r},t)};var x=(e,t,r,s=!0)=>{const a={defaultValues:t._defaultValues};for(const i in e)Object.defineProperty(a,i,{get:()=>{const a=i;return t._proxyFormState[a]!==b.all&&(t._proxyFormState[a]=!s||b.all),r&&(r[a]=!0),e[a]}});return a},D=e=>u(e)&&!Object.keys(e).length,w=(e,t,r,s)=>{r(e);const{name:a,...i}=e;return D(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find((e=>t[e]===(!s||b.all)))},k=e=>Array.isArray(e)?e:[e],E=(e,t,r)=>!e||!t||e===t||k(e).some((e=>e&&(r?e===t:e.startsWith(t)||t.startsWith(e))));function C(e){const t=s.useRef(e);t.current=e,s.useEffect((()=>{const r=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}}),[e.disabled])}function O(e){const t=S(),{control:r=t.control,disabled:a,name:i,exact:n}=e||{},[o,u]=s.useState(r._formState),l=s.useRef(!0),d=s.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),c=s.useRef(i);return c.current=i,C({disabled:a,next:e=>l.current&&E(c.current,e.name,n)&&w(e,d.current,r._updateFormState)&&u({...r._formState,...e}),subject:r._subjects.state}),s.useEffect((()=>(l.current=!0,d.current.isValid&&r._updateValid(!0),()=>{l.current=!1})),[r]),x(o,r,d.current,!1)}var L=e=>"string"==typeof e,U=(e,t,r,s,a)=>L(e)?(s&&t.watch.add(e),v(r,e,a)):Array.isArray(e)?e.map((e=>(s&&t.watch.add(e),v(r,e)))):(s&&(t.watchAll=!0),r);function T(e){const t=S(),{control:r=t.control,name:a,defaultValue:i,disabled:n,exact:o}=e||{},u=s.useRef(a);u.current=a,C({disabled:n,subject:r._subjects.values,next:e=>{E(u.current,e.name,o)&&d(m(U(u.current,r._names,e.values||r._formValues,!1,i)))}});const[l,d]=s.useState(r._getWatch(a,i));return s.useEffect((()=>r._removeUnmounted())),l}var j=e=>/^\w*$/.test(e),B=e=>y(e.replace(/["|']|\]/g,"").split(/\.|\[/)),N=(e,t,r)=>{let s=-1;const a=j(t)?[t]:B(t),i=a.length,n=i-1;for(;++s<i;){const t=a[s];let i=r;if(s!==n){const r=e[t];i=u(r)||Array.isArray(r)?r:isNaN(+a[s+1])?{}:[]}e[t]=i,e=e[t]}return e};function M(e){const t=S(),{name:r,disabled:a,control:i=t.control,shouldUnregister:n}=e,o=d(i._names.array,r),u=T({control:i,name:r,defaultValue:v(i._formValues,r,v(i._defaultValues,r,e.defaultValue)),exact:!0}),c=O({control:i,name:r}),f=s.useRef(i.register(r,{...e.rules,value:u,...g(e.disabled)?{disabled:e.disabled}:{}}));return s.useEffect((()=>{const e=i._options.shouldUnregister||n,t=(e,t)=>{const r=v(i._fields,e);r&&(r._f.mount=t)};if(t(r,!0),e){const e=m(v(i._options.defaultValues,r));N(i._defaultValues,r,e),h(v(i._formValues,r))&&N(i._formValues,r,e)}return()=>{(o?e&&!i._state.action:e)?i.unregister(r):t(r,!1)}}),[r,i,o,n]),s.useEffect((()=>{v(i._fields,r)&&i._updateDisabledField({disabled:a,fields:i._fields,name:r,value:v(i._fields,r)._f.value})}),[a,r,i]),{field:{name:r,value:u,...g(a)||c.disabled?{disabled:c.disabled||a}:{},onChange:s.useCallback((e=>f.current.onChange({target:{value:l(e),name:r},type:_.CHANGE})),[r]),onBlur:s.useCallback((()=>f.current.onBlur({target:{value:v(i._formValues,r),name:r},type:_.BLUR})),[r,i]),ref:e=>{const t=v(i._fields,r);t&&e&&(t._f.ref={focus:()=>e.focus(),select:()=>e.select(),setCustomValidity:t=>e.setCustomValidity(t),reportValidity:()=>e.reportValidity()})}},formState:c,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!v(c.errors,r)},isDirty:{enumerable:!0,get:()=>!!v(c.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!v(c.touchedFields,r)},error:{enumerable:!0,get:()=>v(c.errors,r)}})}}var R=(e,t,r,s,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[s]:a||!0}}:{},q=e=>({isOnSubmit:!e||e===b.onSubmit,isOnBlur:e===b.onBlur,isOnChange:e===b.onChange,isOnAll:e===b.all,isOnTouch:e===b.onTouched}),P=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some((t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))));const H=(e,t,r,s)=>{for(const a of r||Object.keys(e)){const r=v(e,a);if(r){const{_f:e,...i}=r;if(e){if(e.refs&&e.refs[0]&&t(e.refs[0],a)&&!s)break;if(e.ref&&t(e.ref,e.name)&&!s)break;H(i,t)}else u(i)&&H(i,t)}}};var I=(e,t,r)=>{const s=y(v(e,r));return N(s,"root",t[r]),N(e,r,s),e},W=e=>"file"===e.type,$=e=>"function"==typeof e,G=e=>{if(!f)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},K=e=>L(e),z=e=>"radio"===e.type,J=e=>e instanceof RegExp;const Q={value:!1,isValid:!1},X={value:!0,isValid:!0};var Y=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter((e=>e&&e.checked&&!e.disabled)).map((e=>e.value));return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!h(e[0].attributes.value)?h(e[0].value)||""===e[0].value?X:{value:e[0].value,isValid:!0}:X:Q}return Q};const Z={isValid:!1,value:null};var ee=e=>Array.isArray(e)?e.reduce(((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e),Z):Z;function te(e,t,r="validate"){if(K(e)||Array.isArray(e)&&e.every(K)||g(e)&&!e)return{type:r,message:K(e)?e:"",ref:t}}var re=e=>u(e)&&!J(e)?e:{value:e,message:""},se=async(e,t,r,s,i)=>{const{ref:o,refs:l,required:d,maxLength:c,minLength:f,min:m,max:y,pattern:_,validate:b,name:A,valueAsNumber:S,mount:F,disabled:x}=e._f,w=v(t,A);if(!F||x)return{};const k=l?l[0]:o,E=e=>{s&&k.reportValidity&&(k.setCustomValidity(g(e)?"":e||""),k.reportValidity())},C={},O=z(o),U=a(o),T=O||U,j=(S||W(o))&&h(o.value)&&h(w)||G(o)&&""===o.value||""===w||Array.isArray(w)&&!w.length,B=R.bind(null,A,r,C),N=(e,t,r,s="maxLength",a="minLength")=>{const i=e?t:r;C[A]={type:e?s:a,message:i,ref:o,...B(e?s:a,i)}};if(i?!Array.isArray(w)||!w.length:d&&(!T&&(j||n(w))||g(w)&&!w||U&&!Y(l).isValid||O&&!ee(l).isValid)){const{value:e,message:t}=K(d)?{value:!!d,message:d}:re(d);if(e&&(C[A]={type:V,message:t,ref:k,...B(V,t)},!r))return E(t),C}if(!(j||n(m)&&n(y))){let e,t;const s=re(y),a=re(m);if(n(w)||isNaN(w)){const r=o.valueAsDate||new Date(w),i=e=>new Date((new Date).toDateString()+" "+e),n="time"==o.type,u="week"==o.type;L(s.value)&&w&&(e=n?i(w)>i(s.value):u?w>s.value:r>new Date(s.value)),L(a.value)&&w&&(t=n?i(w)<i(a.value):u?w<a.value:r<new Date(a.value))}else{const r=o.valueAsNumber||(w?+w:w);n(s.value)||(e=r>s.value),n(a.value)||(t=r<a.value)}if((e||t)&&(N(!!e,s.message,a.message,"max","min"),!r))return E(C[A].message),C}if((c||f)&&!j&&(L(w)||i&&Array.isArray(w))){const e=re(c),t=re(f),s=!n(e.value)&&w.length>+e.value,a=!n(t.value)&&w.length<+t.value;if((s||a)&&(N(s,e.message,t.message),!r))return E(C[A].message),C}if(_&&!j&&L(w)){const{value:e,message:t}=re(_);if(J(e)&&!w.match(e)&&(C[A]={type:p,message:t,ref:o,...B(p,t)},!r))return E(t),C}if(b)if($(b)){const e=te(await b(w,t),k);if(e&&(C[A]={...e,...B("validate",e.message)},!r))return E(e.message),C}else if(u(b)){let e={};for(const s in b){if(!D(e)&&!r)break;const a=te(await b[s](w,t),k,s);a&&(e={...a,...B(s,a.message)},E(a.message),r&&(C[A]=e))}if(!D(e)&&(C[A]={ref:k,...e},!r))return C}return E(!0),C};function ae(e,t){const r=Array.isArray(t)?t:j(t)?[t]:B(t),s=1===r.length?e:function(e,t){const r=t.slice(0,-1).length;let s=0;for(;s<r;)e=h(e)?s++:e[t[s++]];return e}(e,r),a=r.length-1,i=r[a];return s&&delete s[i],0!==a&&(u(s)&&D(s)||Array.isArray(s)&&function(e){for(const t in e)if(e.hasOwnProperty(t)&&!h(e[t]))return!1;return!0}(s))&&ae(e,r.slice(0,-1)),e}var ie=()=>{let e=[];return{get observers(){return e},next:t=>{for(const r of e)r.next&&r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter((e=>e!==t))}}),unsubscribe:()=>{e=[]}}},ne=e=>n(e)||!o(e);function oe(e,t){if(ne(e)||ne(t))return e===t;if(i(e)&&i(t))return e.getTime()===t.getTime();const r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(const a of r){const r=e[a];if(!s.includes(a))return!1;if("ref"!==a){const e=t[a];if(i(r)&&i(e)||u(r)&&u(e)||Array.isArray(r)&&Array.isArray(e)?!oe(r,e):r!==e)return!1}}return!0}var ue=e=>"select-multiple"===e.type,le=e=>z(e)||a(e),de=e=>G(e)&&e.isConnected,ce=e=>{for(const t in e)if($(e[t]))return!0;return!1};function fe(e,t={}){const r=Array.isArray(e);if(u(e)||r)for(const r in e)Array.isArray(e[r])||u(e[r])&&!ce(e[r])?(t[r]=Array.isArray(e[r])?[]:{},fe(e[r],t[r])):n(e[r])||(t[r]=!0);return t}function me(e,t,r){const s=Array.isArray(e);if(u(e)||s)for(const s in e)Array.isArray(e[s])||u(e[s])&&!ce(e[s])?h(t)||ne(r[s])?r[s]=Array.isArray(e[s])?fe(e[s],[]):{...fe(e[s])}:me(e[s],n(t)?{}:t[s],r[s]):r[s]=!oe(e[s],t[s]);return r}var ye=(e,t)=>me(e,t,fe(t)),he=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:s})=>h(e)?e:t?""===e?NaN:e?+e:e:r&&L(e)?new Date(e):s?s(e):e;function ve(e){const t=e.ref;if(!(e.refs?e.refs.every((e=>e.disabled)):t.disabled))return W(t)?t.files:z(t)?ee(e.refs).value:ue(t)?[...t.selectedOptions].map((({value:e})=>e)):a(t)?Y(e.refs).value:he(h(t.value)?e.ref.value:t.value,e)}var ge=(e,t,r,s)=>{const a={};for(const r of e){const e=v(t,r);e&&N(a,r,e._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:s}},_e=e=>h(e)?e:J(e)?e.source:u(e)?J(e.value)?e.value.source:e.value:e,be=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function pe(e,t,r){const s=v(e,r);if(s||j(r))return{error:s,name:r};const a=r.split(".");for(;a.length;){const s=a.join("."),i=v(t,s),n=v(e,s);if(i&&!Array.isArray(i)&&r!==s)return{name:r};if(n&&n.type)return{name:s,error:n};a.pop()}return{name:r}}var Ve=(e,t,r,s,a)=>!a.isOnAll&&(!r&&a.isOnTouch?!(t||e):(r?s.isOnBlur:a.isOnBlur)?!e:!(r?s.isOnChange:a.isOnChange)||e),Ae=(e,t)=>!y(v(e,t)).length&&ae(e,t);const Se={mode:b.onSubmit,reValidateMode:b.onChange,shouldFocusError:!0};function Fe(e={},t){let r,s={...Se,...e},o={submitCount:0,isDirty:!1,isLoading:$(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:s.errors||{},disabled:s.disabled||!1},c={},p=(u(s.defaultValues)||u(s.values))&&m(s.defaultValues||s.values)||{},V=s.shouldUnregister?{}:m(p),A={action:!1,mount:!1,watch:!1},S={mount:new Set,unMount:new Set,array:new Set,watch:new Set},F=0;const x={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},w={values:ie(),array:ie(),state:ie()},E=q(s.mode),C=q(s.reValidateMode),O=s.criteriaMode===b.all,T=async e=>{if(x.isValid||e){const e=s.resolver?D((await R()).errors):await K(c,!0);e!==o.isValid&&w.state.next({isValid:e})}},j=e=>x.isValidating&&w.state.next({isValidating:e}),B=(e,t,r,s)=>{const a=v(c,e);if(a){const i=v(V,e,h(r)?v(p,e):r);h(i)||s&&s.defaultChecked||t?N(V,e,t?i:ve(a._f)):Q(e,i),A.mount&&T()}},M=(e,t,r,s,a)=>{let i=!1,n=!1;const u={name:e},l=!(!v(c,e)||!v(c,e)._f.disabled);if(!r||s){x.isDirty&&(n=o.isDirty,o.isDirty=u.isDirty=z(),i=n!==u.isDirty);const r=l||oe(v(p,e),t);n=!(l||!v(o.dirtyFields,e)),r||l?ae(o.dirtyFields,e):N(o.dirtyFields,e,!0),u.dirtyFields=o.dirtyFields,i=i||x.dirtyFields&&n!==!r}if(r){const t=v(o.touchedFields,e);t||(N(o.touchedFields,e,r),u.touchedFields=o.touchedFields,i=i||x.touchedFields&&t!==r)}return i&&a&&w.state.next(u),i?u:{}},R=async e=>s.resolver(V,s.context,ge(e||S.mount,c,s.criteriaMode,s.shouldUseNativeValidation)),K=async(e,t,r={valid:!0})=>{for(const a in e){const i=e[a];if(i){const{_f:e,...a}=i;if(e){const a=S.array.has(e.name),n=await se(i,V,O,s.shouldUseNativeValidation&&!t,a);if(n[e.name]&&(r.valid=!1,t))break;!t&&(v(n,e.name)?a?I(o.errors,n,e.name):N(o.errors,e.name,n[e.name]):ae(o.errors,e.name))}a&&await K(a,t,r)}}return r.valid},z=(e,t)=>(e&&t&&N(V,e,t),!oe(re(),p)),J=(e,t,r)=>U(e,S,{...A.mount?V:h(t)?p:L(e)?{[e]:t}:t},r,t),Q=(e,t,r={})=>{const s=v(c,e);let i=t;if(s){const r=s._f;r&&(!r.disabled&&N(V,e,he(t,r)),i=G(r.ref)&&n(t)?"":t,ue(r.ref)?[...r.ref.options].forEach((e=>e.selected=i.includes(e.value))):r.refs?a(r.ref)?r.refs.length>1?r.refs.forEach((e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(i)?!!i.find((t=>t===e.value)):i===e.value))):r.refs[0]&&(r.refs[0].checked=!!i):r.refs.forEach((e=>e.checked=e.value===i)):W(r.ref)?r.ref.value="":(r.ref.value=i,r.ref.type||w.values.next({name:e,values:{...V}})))}(r.shouldDirty||r.shouldTouch)&&M(e,i,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&te(e)},X=(e,t,r)=>{for(const s in t){const a=t[s],n=`${e}.${s}`,o=v(c,n);!S.array.has(e)&&ne(a)&&(!o||o._f)||i(a)?Q(n,a,r):X(n,a,r)}},Y=(e,r,s={})=>{const a=v(c,e),i=S.array.has(e),u=m(r);N(V,e,u),i?(w.array.next({name:e,values:{...V}}),(x.isDirty||x.dirtyFields)&&s.shouldDirty&&w.state.next({name:e,dirtyFields:ye(p,V),isDirty:z(e,u)})):!a||a._f||n(u)?Q(e,u,s):X(e,u,s),P(e,S)&&w.state.next({...o}),w.values.next({name:e,values:{...V}}),!A.mount&&t()},Z=async t=>{const a=t.target;let i=a.name,n=!0;const u=v(c,i),d=e=>{n=Number.isNaN(e)||e===v(V,i,e)};if(u){let f,m;const y=a.type?ve(u._f):l(t),h=t.type===_.BLUR||t.type===_.FOCUS_OUT,b=!be(u._f)&&!s.resolver&&!v(o.errors,i)&&!u._f.deps||Ve(h,v(o.touchedFields,i),o.isSubmitted,C,E),p=P(i,S,h);N(V,i,y),h?(u._f.onBlur&&u._f.onBlur(t),r&&r(0)):u._f.onChange&&u._f.onChange(t);const A=M(i,y,h,!1),k=!D(A)||p;if(!h&&w.values.next({name:i,type:t.type,values:{...V}}),b)return x.isValid&&T(),k&&w.state.next({name:i,...p?{}:A});if(!h&&p&&w.state.next({...o}),j(!0),s.resolver){const{errors:e}=await R([i]);if(d(y),n){const t=pe(o.errors,c,i),r=pe(e,c,t.name||i);f=r.error,i=r.name,m=D(e)}}else f=(await se(u,V,O,s.shouldUseNativeValidation))[i],d(y),n&&(f?m=!1:x.isValid&&(m=await K(c,!0)));n&&(u._f.deps&&te(u._f.deps),((t,s,a,i)=>{const n=v(o.errors,t),u=x.isValid&&g(s)&&o.isValid!==s;var l;if(e.delayError&&a?(l=()=>((e,t)=>{N(o.errors,e,t),w.state.next({errors:o.errors})})(t,a),r=e=>{clearTimeout(F),F=setTimeout(l,e)},r(e.delayError)):(clearTimeout(F),r=null,a?N(o.errors,t,a):ae(o.errors,t)),(a?!oe(n,a):n)||!D(i)||u){const e={...i,...u&&g(s)?{isValid:s}:{},errors:o.errors,name:t};o={...o,...e},w.state.next(e)}j(!1)})(i,m,f,A))}},ee=(e,t)=>{if(v(o.errors,t)&&e.focus)return e.focus(),1},te=async(e,t={})=>{let r,a;const i=k(e);if(j(!0),s.resolver){const t=await(async e=>{const{errors:t}=await R(e);if(e)for(const r of e){const e=v(t,r);e?N(o.errors,r,e):ae(o.errors,r)}else o.errors=t;return t})(h(e)?e:i);r=D(t),a=e?!i.some((e=>v(t,e))):r}else e?(a=(await Promise.all(i.map((async e=>{const t=v(c,e);return await K(t&&t._f?{[e]:t}:t)})))).every(Boolean),(a||o.isValid)&&T()):a=r=await K(c);return w.state.next({...!L(e)||x.isValid&&r!==o.isValid?{}:{name:e},...s.resolver||!e?{isValid:r}:{},errors:o.errors,isValidating:!1}),t.shouldFocus&&!a&&H(c,ee,e?i:S.mount),a},re=e=>{const t={...p,...A.mount?V:{}};return h(e)?t:L(e)?v(t,e):e.map((e=>v(t,e)))},ce=(e,t)=>({invalid:!!v((t||o).errors,e),isDirty:!!v((t||o).dirtyFields,e),isTouched:!!v((t||o).touchedFields,e),error:v((t||o).errors,e)}),fe=(e,t,r)=>{const s=(v(c,e,{_f:{}})._f||{}).ref;N(o.errors,e,{...t,ref:s}),w.state.next({name:e,errors:o.errors,isValid:!1}),r&&r.shouldFocus&&s&&s.focus&&s.focus()},me=(e,t={})=>{for(const r of e?k(e):S.mount)S.mount.delete(r),S.array.delete(r),t.keepValue||(ae(c,r),ae(V,r)),!t.keepError&&ae(o.errors,r),!t.keepDirty&&ae(o.dirtyFields,r),!t.keepTouched&&ae(o.touchedFields,r),!s.shouldUnregister&&!t.keepDefaultValue&&ae(p,r);w.values.next({values:{...V}}),w.state.next({...o,...t.keepDirty?{isDirty:z()}:{}}),!t.keepIsValid&&T()},Fe=({disabled:e,name:t,field:r,fields:s,value:a})=>{if(g(e)){const i=e?void 0:h(a)?ve(r?r._f:v(s,t)._f):a;N(V,t,i),M(t,i,!1,!1,!0)}},xe=(e,t={})=>{let r=v(c,e);const a=g(t.disabled);return N(c,e,{...r||{},_f:{...r&&r._f?r._f:{ref:{name:e}},name:e,mount:!0,...t}}),S.mount.add(e),r?Fe({field:r,disabled:t.disabled,name:e,value:t.value}):B(e,!0,t.value),{...a?{disabled:t.disabled}:{},...s.progressive?{required:!!t.required,min:_e(t.min),max:_e(t.max),minLength:_e(t.minLength),maxLength:_e(t.maxLength),pattern:_e(t.pattern)}:{},name:e,onChange:Z,onBlur:Z,ref:a=>{if(a){xe(e,t),r=v(c,e);const s=h(a.value)&&a.querySelectorAll&&a.querySelectorAll("input,select,textarea")[0]||a,i=le(s),n=r._f.refs||[];if(i?n.find((e=>e===s)):s===r._f.ref)return;N(c,e,{_f:{...r._f,...i?{refs:[...n.filter(de),s,...Array.isArray(v(p,e))?[{}]:[]],ref:{type:s.type,name:e}}:{ref:s}}}),B(e,!1,void 0,s)}else r=v(c,e,{}),r._f&&(r._f.mount=!1),(s.shouldUnregister||t.shouldUnregister)&&(!d(S.array,e)||!A.action)&&S.unMount.add(e)}}},De=()=>s.shouldFocusError&&H(c,ee,S.mount),we=(e,t)=>async r=>{r&&(r.preventDefault&&r.preventDefault(),r.persist&&r.persist());let a=m(V);if(w.state.next({isSubmitting:!0}),s.resolver){const{errors:e,values:t}=await R();o.errors=e,a=t}else await K(c);ae(o.errors,"root"),D(o.errors)?(w.state.next({errors:{}}),await e(a,r)):(t&&await t({...o.errors},r),De(),setTimeout(De)),w.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:D(o.errors),submitCount:o.submitCount+1,errors:o.errors})},ke=(r,s={})=>{const a=r?m(r):p,i=m(a),n=r&&!D(r)?i:p;if(s.keepDefaultValues||(p=a),!s.keepValues){if(s.keepDirtyValues)for(const e of S.mount)v(o.dirtyFields,e)?N(n,e,v(V,e)):Y(e,v(n,e));else{if(f&&h(r))for(const e of S.mount){const t=v(c,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(G(e)){const t=e.closest("form");if(t){t.reset();break}}}}c={}}V=e.shouldUnregister?s.keepDefaultValues?m(p):{}:m(n),w.array.next({values:{...n}}),w.values.next({values:{...n}})}S={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!A.mount&&t(),A.mount=!x.isValid||!!s.keepIsValid,A.watch=!!e.shouldUnregister,w.state.next({submitCount:s.keepSubmitCount?o.submitCount:0,isDirty:s.keepDirty?o.isDirty:!(!s.keepDefaultValues||oe(r,p)),isSubmitted:!!s.keepIsSubmitted&&o.isSubmitted,dirtyFields:s.keepDirtyValues?o.dirtyFields:s.keepDefaultValues&&r?ye(p,r):{},touchedFields:s.keepTouched?o.touchedFields:{},errors:s.keepErrors?o.errors:{},isSubmitSuccessful:!!s.keepIsSubmitSuccessful&&o.isSubmitSuccessful,isSubmitting:!1})},Ee=(e,t)=>ke($(e)?e(V):e,t);return{control:{register:xe,unregister:me,getFieldState:ce,handleSubmit:we,setError:fe,_executeSchema:R,_getWatch:J,_getDirty:z,_updateValid:T,_removeUnmounted:()=>{for(const e of S.unMount){const t=v(c,e);t&&(t._f.refs?t._f.refs.every((e=>!de(e))):!de(t._f.ref))&&me(e)}S.unMount=new Set},_updateFieldArray:(e,t=[],r,s,a=!0,i=!0)=>{if(s&&r){if(A.action=!0,i&&Array.isArray(v(c,e))){const t=r(v(c,e),s.argA,s.argB);a&&N(c,e,t)}if(i&&Array.isArray(v(o.errors,e))){const t=r(v(o.errors,e),s.argA,s.argB);a&&N(o.errors,e,t),Ae(o.errors,e)}if(x.touchedFields&&i&&Array.isArray(v(o.touchedFields,e))){const t=r(v(o.touchedFields,e),s.argA,s.argB);a&&N(o.touchedFields,e,t)}x.dirtyFields&&(o.dirtyFields=ye(p,V)),w.state.next({name:e,isDirty:z(e,t),dirtyFields:o.dirtyFields,errors:o.errors,isValid:o.isValid})}else N(V,e,t)},_updateDisabledField:Fe,_getFieldArray:t=>y(v(A.mount?V:p,t,e.shouldUnregister?v(p,t,[]):[])),_reset:ke,_resetDefaultValues:()=>$(s.defaultValues)&&s.defaultValues().then((e=>{Ee(e,s.resetOptions),w.state.next({isLoading:!1})})),_updateFormState:e=>{o={...o,...e}},_disableForm:e=>{g(e)&&(w.state.next({disabled:e}),H(c,((t,r)=>{let s=e;const a=v(c,r);a&&g(a._f.disabled)&&(s||(s=a._f.disabled)),t.disabled=s}),0,!1))},_subjects:w,_proxyFormState:x,_setErrors:e=>{o.errors=e,w.state.next({errors:o.errors,isValid:!1})},get _fields(){return c},get _formValues(){return V},get _state(){return A},set _state(e){A=e},get _defaultValues(){return p},get _names(){return S},set _names(e){S=e},get _formState(){return o},set _formState(e){o=e},get _options(){return s},set _options(e){s={...s,...e}}},trigger:te,register:xe,handleSubmit:we,watch:(e,t)=>$(e)?w.values.subscribe({next:r=>e(J(void 0,t),r)}):J(e,t,!0),setValue:Y,getValues:re,reset:Ee,resetField:(e,t={})=>{v(c,e)&&(h(t.defaultValue)?Y(e,m(v(p,e))):(Y(e,t.defaultValue),N(p,e,m(t.defaultValue))),t.keepTouched||ae(o.touchedFields,e),t.keepDirty||(ae(o.dirtyFields,e),o.isDirty=t.defaultValue?z(e,m(v(p,e))):z()),t.keepError||(ae(o.errors,e),x.isValid&&T()),w.state.next({...o}))},clearErrors:e=>{e&&k(e).forEach((e=>ae(o.errors,e))),w.state.next({errors:e?o.errors:{}})},unregister:me,setError:fe,setFocus:(e,t={})=>{const r=v(c,e),s=r&&r._f;if(s){const e=s.refs?s.refs[0]:s.ref;e.focus&&(e.focus(),t.shouldSelect&&e.select())}},getFieldState:ce}}function xe(e={}){const t=s.useRef(),r=s.useRef(),[a,i]=s.useState({isDirty:!1,isValidating:!1,isLoading:$(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:$(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...Fe(e,(()=>i((e=>({...e}))))),formState:a});const n=t.current.control;return n._options=e,C({subject:n._subjects.state,next:e=>{w(e,n._proxyFormState,n._updateFormState,!0)&&i({...n._formState})}}),s.useEffect((()=>n._disableForm(e.disabled)),[n,e.disabled]),s.useEffect((()=>{if(n._proxyFormState.isDirty){const e=n._getDirty();e!==a.isDirty&&n._subjects.state.next({isDirty:e})}}),[n,a.isDirty]),s.useEffect((()=>{e.values&&!oe(e.values,r.current)?(n._reset(e.values,n._options.resetOptions),r.current=e.values,i((e=>({...e})))):n._resetDefaultValues()}),[e.values,n]),s.useEffect((()=>{e.errors&&n._setErrors(e.errors)}),[e.errors,n]),s.useEffect((()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()})),t.current.formState=x(a,n),t.current}}}]);
//# sourceMappingURL=index.esm.mjs.js.map?e8698