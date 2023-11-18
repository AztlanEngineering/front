"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[586],{1530:(e,t,r)=>{var a=(0,r(1600).default)(r(8636)),s=r(7044),i=r(3343),n=r(1677),l=r(7783),o=r(6190).isClientID,c=r(9110),_=r(3223),u=r(378).getLocalVariables,h=r(5180),d=r(3740),v=d.EXISTENT,g=d.UNKNOWN,f=r(8475),k=r(8073),m=k.TYPE_SCHEMA_TYPE,b=k.generateTypeID,y=r(7677),A=l.ACTOR_CHANGE,S=l.CONDITION,E=l.CLIENT_COMPONENT,L=l.CLIENT_EXTENSION,I=l.CLIENT_EDGE_TO_CLIENT_OBJECT,R=l.DEFER,M=l.FRAGMENT_SPREAD,D=l.INLINE_FRAGMENT,P=l.LINKED_FIELD,T=l.LINKED_HANDLE,C=l.MODULE_IMPORT,p=l.RELAY_RESOLVER,N=l.RELAY_LIVE_RESOLVER,F=l.SCALAR_FIELD,O=l.SCALAR_HANDLE,V=l.STREAM,x=l.TYPE_DISCRIMINATOR,K=f.getModuleOperationKey,w=f.getStorageKey,H=f.getArgumentValues,W=function(){function e(e,t,r,a,s,i,n,l){this._getSourceForActor=e,this._getTargetForActor=t,this._getDataID=n,this._source=e(r),this._mutatorRecordSourceProxyCache=new Map;var o=this._getMutatorAndRecordProxyForActor(r),c=o[0],_=o[1];this._mostRecentlyInvalidatedAt=null,this._handlers=s,this._mutator=c,this._operationLoader=null!=i?i:null,this._recordSourceProxy=_,this._recordWasMissing=!1,this._variables=a,this._shouldProcessClientComponents=l}var t=e.prototype;return t._getMutatorAndRecordProxyForActor=function(e){var t=this._mutatorRecordSourceProxyCache.get(e);if(null==t){var r=this._getTargetForActor(e),a=new s(this._getSourceForActor(e),r);t=[a,new i(a,this._getDataID,void 0,this._handlers)],this._mutatorRecordSourceProxyCache.set(e,t)}return t},t.check=function(e,t){return this._assignClientAbstractTypes(e),this._traverse(e,t),!0===this._recordWasMissing?{status:"missing",mostRecentlyInvalidatedAt:this._mostRecentlyInvalidatedAt}:{status:"available",mostRecentlyInvalidatedAt:this._mostRecentlyInvalidatedAt}},t._getVariableValue=function(e){return this._variables.hasOwnProperty(e)||y(!1),this._variables[e]},t._handleMissing=function(){this._recordWasMissing=!0},t._handleMissingScalarField=function(e,t){if("id"!==e.name||null!=e.alias||!o(t)){var r,s=null!=e.args?H(e.args,this._variables):{},i=(0,a.default)(this._handlers);try{for(i.s();!(r=i.n()).done;){var n=r.value;if("scalar"===n.kind){var l=n.handle(e,this._recordSourceProxy.get(t),s,this._recordSourceProxy);if(void 0!==l)return l}}}catch(e){i.e(e)}finally{i.f()}this._handleMissing()}},t._handleMissingLinkField=function(e,t){var r,s=null!=e.args?H(e.args,this._variables):{},i=(0,a.default)(this._handlers);try{for(i.s();!(r=i.n()).done;){var n=r.value;if("linked"===n.kind){var l=n.handle(e,this._recordSourceProxy.get(t),s,this._recordSourceProxy);if(void 0!==l&&(null===l||this._mutator.getStatus(l)===v))return l}}}catch(e){i.e(e)}finally{i.f()}this._handleMissing()},t._handleMissingPluralLinkField=function(e,t){var r,s=this,i=null!=e.args?H(e.args,this._variables):{},n=(0,a.default)(this._handlers);try{for(n.s();!(r=n.n()).done;){var l=r.value;if("pluralLinked"===l.kind){var o=l.handle(e,this._recordSourceProxy.get(t),i,this._recordSourceProxy);if(null!=o){if(o.every((function(e){return null!=e&&s._mutator.getStatus(e)===v})))return o}else if(null===o)return null}}}catch(e){n.e(e)}finally{n.f()}this._handleMissing()},t._traverse=function(e,t){var r=this._mutator.getStatus(t);if(r===g&&this._handleMissing(),r===v){var a=this._source.get(t),s=h.getInvalidationEpoch(a);null!=s&&(this._mostRecentlyInvalidatedAt=null!=this._mostRecentlyInvalidatedAt?Math.max(this._mostRecentlyInvalidatedAt,s):s),this._traverseSelections(e.selections,t)}},t._traverseSelections=function(e,t){var r=this;e.forEach((function(a){switch(a.kind){case F:r._checkScalar(a,t);break;case P:a.plural?r._checkPluralLink(a,t):r._checkLink(a,t);break;case A:r._checkActorChange(a.linkedField,t);break;case S:Boolean(r._getVariableValue(a.condition))===a.passingValue&&r._traverseSelections(a.selections,t);break;case D:var s=a.abstractKey;if(null==s)r._mutator.getType(t)===a.type&&r._traverseSelections(a.selections,t);else{var i=r._mutator.getType(t);null==i&&y(!1);var n=b(i),l=r._mutator.getValue(n,s);!0===l?r._traverseSelections(a.selections,t):null==l&&r._handleMissing()}break;case T:var o=c(a,e,r._variables);o.plural?r._checkPluralLink(o,t):r._checkLink(o,t);break;case O:var h=_(a,e,r._variables);r._checkScalar(h,t);break;case C:r._checkModuleImport(a,t);break;case R:case V:r._traverseSelections(a.selections,t);break;case M:var d=r._variables;r._variables=u(r._variables,a.fragment.argumentDefinitions,a.args),r._traverseSelections(a.fragment.selections,t),r._variables=d;break;case L:var v=r._recordWasMissing;r._traverseSelections(a.selections,t),r._recordWasMissing=v;break;case x:var g=a.abstractKey,f=r._mutator.getType(t);null==f&&y(!1);var k=b(f);null==r._mutator.getValue(k,g)&&r._handleMissing();break;case E:if(!1===r._shouldProcessClientComponents)break;r._traverseSelections(a.fragment.selections,t);break;case p:case N:r._checkResolver(a,t);break;case I:r._checkResolver(a.backingField,t);break;default:y(!1)}}))},t._checkResolver=function(e,t){e.fragment&&this._traverseSelections([e.fragment],t)},t._checkModuleImport=function(e,t){var r=this._operationLoader;null===r&&y(!1);var a=K(e.documentName),s=this._mutator.getValue(t,a);if(null!=s){var i=r.get(s);if(null!=i){var l=n(i),o=this._variables;this._variables=u(this._variables,l.argumentDefinitions,e.args),this._traverse(l,t),this._variables=o}else this._handleMissing()}else void 0===s&&this._handleMissing()},t._checkScalar=function(e,t){var r=w(e,this._variables),a=this._mutator.getValue(t,r);void 0===a&&void 0!==(a=this._handleMissingScalarField(e,t))&&this._mutator.setValue(t,r,a)},t._checkLink=function(e,t){var r=w(e,this._variables),a=this._mutator.getLinkedRecordID(t,r);void 0===a&&(null!=(a=this._handleMissingLinkField(e,t))?this._mutator.setLinkedRecordID(t,r,a):null===a&&this._mutator.setValue(t,r,null)),null!=a&&this._traverse(e,a)},t._checkPluralLink=function(e,t){var r=this,a=w(e,this._variables),s=this._mutator.getLinkedRecordIDs(t,a);void 0===s&&(null!=(s=this._handleMissingPluralLinkField(e,t))?this._mutator.setLinkedRecordIDs(t,a,s):null===s&&this._mutator.setValue(t,a,null)),s&&s.forEach((function(t){null!=t&&r._traverse(e,t)}))},t._checkActorChange=function(e,t){var r=w(e,this._variables),a=this._source.get(t),s=null!=a?h.getActorLinkedRecordID(a,r):a;if(null==s)void 0===s&&this._handleMissing();else{var i=s[0],n=s[1],l=this._source,o=this._mutator,c=this._recordSourceProxy,_=this._getMutatorAndRecordProxyForActor(i),u=_[0],d=_[1];this._source=this._getSourceForActor(i),this._mutator=u,this._recordSourceProxy=d,this._assignClientAbstractTypes(e),this._traverse(e,n),this._source=l,this._mutator=o,this._recordSourceProxy=c}},t._assignClientAbstractTypes=function(e){var t=e.clientAbstractTypes;if(null!=t)for(var r=0,s=Object.keys(t);r<s.length;r++){var i,n=s[r],l=(0,a.default)(t[n]);try{for(l.s();!(i=l.n()).done;){var o=i.value,c=b(o);null==this._source.get(c)&&this._mutator.create(c,m),null==this._mutator.getValue(c,n)&&this._mutator.setValue(c,n,!0)}}catch(e){l.e(e)}finally{l.f()}}},e}();e.exports={check:function(e,t,r,a,s,i,n,l){var o=a.dataID,c=a.node,_=a.variables;return new W(e,t,r,_,s,i,n,l).check(c,o)}}}}]);
//# sourceMappingURL=DataChecker.js.js.map?36fa2