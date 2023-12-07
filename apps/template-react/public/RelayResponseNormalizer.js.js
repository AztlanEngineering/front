"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[54],{3925:(e,t,a)=>{var r=a(1600).default,i=r(a(8636)),s=r(a(3408)),l=a(2333),n=(l.ACTOR_IDENTIFIER_FIELD_NAME,l.getActorIdentifierFromPayload),o=a(7783),c=o.ACTOR_CHANGE,_=o.CLIENT_COMPONENT,h=o.CLIENT_EDGE_TO_CLIENT_OBJECT,d=o.CLIENT_EXTENSION,u=o.CONDITION,f=o.DEFER,p=o.FRAGMENT_SPREAD,v=o.INLINE_FRAGMENT,g=o.LINKED_FIELD,y=o.LINKED_HANDLE,I=o.MODULE_IMPORT,b=o.RELAY_LIVE_RESOLVER,D=o.RELAY_RESOLVER,E=o.SCALAR_FIELD,T=o.SCALAR_HANDLE,m=o.STREAM,A=o.TYPE_DISCRIMINATOR,S=a(6190),R=S.generateClientID,L=(S.isClientID,a(378).getLocalVariables),C=a(7567),k=C.buildErrorTrie,N=C.getErrorsByKey,P=C.getNestedErrorTrieByKey,O=a(5180),V=a(4711).createNormalizationSelector,F=a(8475),z=(F.ROOT_ID,F.TYPENAME_KEY),M=F.getArgumentValues,K=F.getHandleStorageKey,w=F.getModuleComponentKey,x=F.getModuleOperationKey,H=F.getStorageKey,Y=a(8073),j=Y.TYPE_SCHEMA_TYPE,B=Y.generateTypeID,U=(a(3860),a(7677));a(6590);var G=function(){function e(e,t,a){this._actorIdentifier=a.actorIdentifier,this._getDataId=a.getDataID,this._handleFieldPayloads=[],this._treatMissingFieldsAsNull=a.treatMissingFieldsAsNull,this._incrementalPlaceholders=[],this._isClientExtension=!1,this._isUnmatchedAbstractType=!1,this._followupPayloads=[],this._path=a.path?(0,s.default)(a.path):[],this._recordSource=e,this._variables=t,this._shouldProcessClientComponents=a.shouldProcessClientComponents}var t=e.prototype;return t.normalizeResponse=function(e,t,a,r){var i=this._recordSource.get(t);return i||U(!1),this._assignClientAbstractTypes(e),this._errorTrie=k(r),this._traverseSelections(e,i,a),{errors:r,fieldPayloads:this._handleFieldPayloads,incrementalPlaceholders:this._incrementalPlaceholders,followupPayloads:this._followupPayloads,source:this._recordSource,isFinal:!1}},t._assignClientAbstractTypes=function(e){var t=e.clientAbstractTypes;if(null!=t)for(var a=0,r=Object.keys(t);a<r.length;a++){var s,l=r[a],n=(0,i.default)(t[l]);try{for(n.s();!(s=n.n()).done;){var o=s.value,c=B(o),_=this._recordSource.get(c);null==_&&(_=O.create(c,j),this._recordSource.set(c,_)),O.setValue(_,l,!0)}}catch(e){n.e(e)}finally{n.f()}}},t._getVariableValue=function(e){return this._variables.hasOwnProperty(e)||U(!1),this._variables[e]},t._getRecordType=function(e){var t=e[z];return null==t&&U(!1),t},t._traverseSelections=function(e,t,a){for(var r=0;r<e.selections.length;r++){var i=e.selections[r];switch(i.kind){case E:case g:this._normalizeField(i,t,a);break;case u:Boolean(this._getVariableValue(i.condition))===i.passingValue&&this._traverseSelections(i,t,a);break;case p:var s=this._variables;this._variables=L(this._variables,i.fragment.argumentDefinitions,i.args),this._traverseSelections(i.fragment,t,a),this._variables=s;break;case v:var l=i.abstractKey;if(null==l)O.getType(t)===i.type&&this._traverseSelections(i,t,a);else{var n=a.hasOwnProperty(l),o=O.getType(t),S=B(o),R=this._recordSource.get(S);null==R&&(R=O.create(S,j),this._recordSource.set(S,R)),O.setValue(R,l,n),n&&this._traverseSelections(i,t,a)}break;case A:var C=i.abstractKey,k=a.hasOwnProperty(C),N=O.getType(t),P=B(N),V=this._recordSource.get(P);null==V&&(V=O.create(P,j),this._recordSource.set(P,V)),O.setValue(V,C,k);break;case y:case T:var F=i.args?M(i.args,this._variables):{},z=H(i,this._variables),w=K(i,this._variables);this._handleFieldPayloads.push({args:F,dataID:O.getDataID(t),fieldKey:z,handle:i.handle,handleKey:w,handleArgs:i.handleArgs?M(i.handleArgs,this._variables):{}});break;case I:this._normalizeModuleImport(i,t,a);break;case f:this._normalizeDefer(i,t,a);break;case m:this._normalizeStream(i,t,a);break;case d:var x=this._isClientExtension;this._isClientExtension=!0,this._traverseSelections(i,t,a),this._isClientExtension=x;break;case _:if(!1===this._shouldProcessClientComponents)break;this._traverseSelections(i.fragment,t,a);break;case c:this._normalizeActorChange(i,t,a);break;case D:case b:this._normalizeResolver(i,t,a);break;case h:this._normalizeResolver(i.backingField,t,a);break;default:U(!1)}}},t._normalizeResolver=function(e,t,a){null!=e.fragment&&this._traverseSelections(e.fragment,t,a)},t._normalizeDefer=function(e,t,a){!1===(null===e.if||this._getVariableValue(e.if))?this._traverseSelections(e,t,a):this._incrementalPlaceholders.push({kind:"defer",data:a,label:e.label,path:(0,s.default)(this._path),selector:V(e,O.getDataID(t),this._variables),typeName:O.getType(t),actorIdentifier:this._actorIdentifier})},t._normalizeStream=function(e,t,a){this._traverseSelections(e,t,a),!0===(null===e.if||this._getVariableValue(e.if))&&this._incrementalPlaceholders.push({kind:"stream",label:e.label,path:(0,s.default)(this._path),parentID:O.getDataID(t),node:e,variables:this._variables,actorIdentifier:this._actorIdentifier})},t._normalizeModuleImport=function(e,t,a){"object"==typeof a&&a||U(!1);var r=O.getType(t),i=w(e.documentName),l=e.componentModuleProvider||a[i];O.setValue(t,i,null!=l?l:null);var n=x(e.documentName),o=e.operationModuleProvider||a[n];O.setValue(t,n,null!=o?o:null),null!=o&&this._followupPayloads.push({kind:"ModuleImportPayload",args:e.args,data:a,dataID:O.getDataID(t),operationReference:o,path:(0,s.default)(this._path),typeName:r,variables:this._variables,actorIdentifier:this._actorIdentifier})},t._normalizeField=function(e,t,a){"object"==typeof a&&a||U(!1);var r=e.alias||e.name,i=H(e,this._variables),s=a[r];if(null!=s)if(e.kind===E)O.setValue(t,i,s);else if(e.kind===g){this._path.push(r);var l=this._errorTrie;this._errorTrie=null==l?null:P(l,r),e.plural?this._normalizePluralLink(e,t,i,s):this._normalizeLink(e,t,i,s),this._errorTrie=l,this._path.pop()}else U(!1);else{if(void 0===s){if(this._isClientExtension||this._isUnmatchedAbstractType)return;if(!this._treatMissingFieldsAsNull)return}O.setValue(t,i,null);var n=this._errorTrie;if(null!=n){var o=N(n,r);null!=o&&O.setErrors(t,i,o)}}},t._normalizeActorChange=function(e,t,a){var r,i=e.linkedField;"object"==typeof a&&a||U(!1);var l=i.alias||i.name,o=H(i,this._variables),c=a[l];if(null!=c){var _=n(c);if(null!=_){var h=null!==(r=i.concreteType)&&void 0!==r?r:this._getRecordType(c),d=this._getDataId(c,h)||O.getLinkedRecordID(t,o)||R(O.getDataID(t),o);"string"!=typeof d&&U(!1),O.setActorLinkedRecordID(t,o,_,d),this._followupPayloads.push({kind:"ActorPayload",data:c,dataID:d,path:[].concat((0,s.default)(this._path),[l]),typeName:h,variables:this._variables,node:i,actorIdentifier:_})}else O.setValue(t,o,null)}else{if(void 0===c){if(this._isClientExtension||this._isUnmatchedAbstractType)return;if(!this._treatMissingFieldsAsNull)return}O.setValue(t,o,null)}},t._normalizeLink=function(e,t,a,r){var i;"object"==typeof r&&r||U(!1);var s=this._getDataId(r,null!==(i=e.concreteType)&&void 0!==i?i:this._getRecordType(r))||O.getLinkedRecordID(t,a)||R(O.getDataID(t),a);"string"!=typeof s&&U(!1),O.setLinkedRecordID(t,a,s);var l=this._recordSource.get(s);if(l);else{var n=e.concreteType||this._getRecordType(r);l=O.create(s,n),this._recordSource.set(s,l)}this._traverseSelections(e,l,r)},t._normalizePluralLink=function(e,t,a,r){var i=this;Array.isArray(r)||U(!1);var s=O.getLinkedRecordIDs(t,a),l=[];r.forEach((function(r,n){var o;if(null!=r){i._path.push(String(n));var c=i._errorTrie;i._errorTrie=null==c?null:P(c,n),"object"!=typeof r&&U(!1);var _=i._getDataId(r,null!==(o=e.concreteType)&&void 0!==o?o:i._getRecordType(r))||s&&s[n]||R(O.getDataID(t),a,n);"string"!=typeof _&&U(!1),l.push(_);var h=i._recordSource.get(_);if(h);else{var d=e.concreteType||i._getRecordType(r);h=O.create(_,d),i._recordSource.set(_,h)}i._traverseSelections(e,h,r),i._errorTrie=c,i._path.pop()}else l.push(r)})),O.setLinkedRecordIDs(t,a,l)},t._validateRecordType=function(e,t,a){var r;null!==(r=t.concreteType)&&void 0!==r||this._getRecordType(a),O.getDataID(e)},t._validateConflictingFieldsWithIdenticalId=function(e,t,a){},t._validateConflictingLinkedFieldsWithIdenticalId=function(e,t,a){},e}();e.exports={normalize:function(e,t,a,r,i){var s=t.dataID,l=t.node,n=t.variables;return new G(e,n,r).normalizeResponse(l,s,a,i)}}}}]);
//# sourceMappingURL=RelayResponseNormalizer.js.js.map?e98f2