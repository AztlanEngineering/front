"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[101],{8076:(e,i,t)=>{var r=t(1600).default,s=r(t(8636)),a=r(t(6290)),n=r(t(3408)),l=t(7783),d=l.ACTOR_CHANGE,o=l.ALIASED_FRAGMENT_SPREAD,_=l.ALIASED_INLINE_FRAGMENT_SPREAD,u=l.CLIENT_EDGE_TO_CLIENT_OBJECT,h=l.CLIENT_EDGE_TO_SERVER_OBJECT,c=l.CLIENT_EXTENSION,v=l.CONDITION,g=l.DEFER,E=l.FRAGMENT_SPREAD,f=l.INLINE_DATA_FRAGMENT_SPREAD,m=l.INLINE_FRAGMENT,R=l.LINKED_FIELD,p=l.MODULE_IMPORT,D=l.RELAY_LIVE_RESOLVER,L=l.RELAY_RESOLVER,A=l.REQUIRED_FIELD,T=l.SCALAR_FIELD,F=l.STREAM,I=t(1362),N=t(8452).isSuspenseSentinel,S=t(378),y=t(5180),C=t(8475),M=C.CLIENT_EDGE_TRAVERSAL_PATH,b=C.FRAGMENT_OWNER_KEY,k=C.FRAGMENT_PROP_NAME_KEY,O=C.FRAGMENTS_KEY,P=C.ID_KEY,w=C.MODULE_COMPONENT_KEY,G=C.ROOT_ID,q=C.getArgumentValues,V=C.getModuleComponentKey,B=C.getStorageKey,U=t(587).NoopResolverCache,K=t(6932),W=K.RESOLVER_FRAGMENT_MISSING_DATA_SENTINEL,Y=K.withResolverContext,j=t(8073).generateTypeID,H=t(7677);function x(e,i,t){return new z(e,i,null!=t?t:new U).read()}var z=function(){function e(e,i,t){var r;this._clientEdgeTraversalPath=I.ENABLE_CLIENT_EDGES&&null!==(r=i.clientEdgeTraversalPath)&&void 0!==r&&r.length?(0,n.default)(i.clientEdgeTraversalPath):[],this._missingClientEdges=[],this._missingLiveResolverFields=[],this._isMissingData=!1,this._isWithinUnmatchedTypeRefinement=!1,this._missingRequiredFields=null,this._owner=i.owner,this._recordSource=e,this._seenRecords=new Set,this._selector=i,this._variables=i.variables,this._resolverCache=t,this._resolverErrors=[],this._fragmentName=i.node.name,this._updatedDataIDs=new Set}var i=e.prototype;return i.read=function(){var e=this._selector,i=e.node,t=e.dataID,r=e.isWithinUnmatchedTypeRefinement,s=i.abstractKey,a=this._recordSource.get(t),n=!r;if(n&&null==s&&null!=a&&y.getType(a)!==i.type&&t!==G&&(n=!1),n&&null!=s&&null!=a){var l=this._implementsInterface(a,s);!1===l?n=!1:null==l&&(this._isMissingData=!0)}this._isWithinUnmatchedTypeRefinement=!n;var d=this._traverse(i,t,null);return this._updatedDataIDs.size>0&&(this._resolverCache.notifyUpdatedSubscribers(this._updatedDataIDs),this._updatedDataIDs.clear()),{data:d,isMissingData:this._isMissingData&&n,missingClientEdges:I.ENABLE_CLIENT_EDGES&&this._missingClientEdges.length?this._missingClientEdges:null,missingLiveResolverFields:this._missingLiveResolverFields,seenRecords:this._seenRecords,selector:this._selector,missingRequiredFields:this._missingRequiredFields,relayResolverErrors:this._resolverErrors}},i._markDataAsMissing=function(){if(this._isMissingData=!0,I.ENABLE_CLIENT_EDGES&&this._clientEdgeTraversalPath.length){var e=this._clientEdgeTraversalPath[this._clientEdgeTraversalPath.length-1];null!==e&&this._missingClientEdges.push({request:e.readerClientEdge.operation,clientEdgeDestinationID:e.clientEdgeDestinationID})}},i._traverse=function(e,i,t){var r=this._recordSource.get(i);if(this._seenRecords.add(i),null==r)return void 0===r&&this._markDataAsMissing(),r;var s=t||{};return this._traverseSelections(e.selections,r,s)?s:null},i._getVariableValue=function(e){return this._variables.hasOwnProperty(e)||H(!1),this._variables[e]},i._maybeReportUnexpectedNull=function(e,i){var t;if("THROW"!==(null===(t=this._missingRequiredFields)||void 0===t?void 0:t.action)){var r=this._fragmentName;switch(i){case"THROW":return void(this._missingRequiredFields={action:i,field:{path:e,owner:r}});case"LOG":return void(null==this._missingRequiredFields?this._missingRequiredFields={action:i,fields:[{path:e,owner:r}]}:this._missingRequiredFields={action:i,fields:[].concat((0,n.default)(this._missingRequiredFields.fields),[{path:e,owner:r}])})}}},i._traverseSelections=function(e,i,t){for(var r=0;r<e.length;r++){var s=e[r];switch(s.kind){case A:if(null==this._readRequiredField(s,i,t)){var a=s.action;return"NONE"!==a&&this._maybeReportUnexpectedNull(s.path,a),!1}break;case T:this._readScalar(s,i,t);break;case R:s.plural?this._readPluralLink(s,i,t):this._readLink(s,i,t);break;case v:if(Boolean(this._getVariableValue(s.condition))===s.passingValue&&!this._traverseSelections(s.selections,i,t))return!1;break;case m:if(!1===this._readInlineFragment(s,i,t))return!1;break;case D:case L:if(!I.ENABLE_RELAY_RESOLVERS)throw new Error("Relay Resolver fields are not yet supported.");this._readResolverField(s,i,t);break;case E:this._createFragmentPointer(s,i,t);break;case o:t[s.name]=this._createAliasedFragmentSpread(s,i);break;case _:var n=this._readInlineFragment(s.fragment,i,{});!1===n&&(n=null),t[s.name]=n;break;case p:this._readModuleImport(s,i,t);break;case f:this._createInlineDataOrResolverFragmentPointer(s,i,t);break;case g:case c:var l=this._isMissingData,N=this._missingClientEdges.length;I.ENABLE_CLIENT_EDGES&&this._clientEdgeTraversalPath.push(null);var S=this._traverseSelections(s.selections,i,t);if(this._isMissingData=l||this._missingClientEdges.length>N||this._missingLiveResolverFields.length>0,I.ENABLE_CLIENT_EDGES&&this._clientEdgeTraversalPath.pop(),!S)return!1;break;case F:if(!this._traverseSelections(s.selections,i,t))return!1;break;case d:this._readActorChange(s,i,t);break;case u:case h:if(!I.ENABLE_CLIENT_EDGES)throw new Error("Client edges are not yet supported.");this._readClientEdge(s,i,t);break;default:H(!1)}}return!0},i._readRequiredField=function(e,i,t){switch(e.field.kind){case T:return this._readScalar(e.field,i,t);case R:return e.field.plural?this._readPluralLink(e.field,i,t):this._readLink(e.field,i,t);case L:case D:if(!I.ENABLE_RELAY_RESOLVERS)throw new Error("Relay Resolver fields are not yet supported.");return this._readResolverField(e.field,i,t);case u:case h:if(!I.ENABLE_RELAY_RESOLVERS)throw new Error("Relay Resolver fields are not yet supported.");return this._readClientEdge(e.field,i,t);default:e.field.kind,H(!1)}},i._readResolverField=function(e,i,t){var r,s,n=this,l=e.fragment,d=y.getDataID(i),o=function(e){return null!=s?{data:s.data,isMissingData:s.isMissingData}:{data:(s=x(n._recordSource,e,n._resolverCache)).data,isMissingData:s.isMissingData}},_=this._resolverCache.readFromCacheOrEvaluate(d,e,this._variables,(function(){if(null!=l){var i={__id:d,__fragmentOwner:n._owner,__fragments:(0,a.default)({},l.name,l.args?q(l.args,n._variables):{})};return Y({getDataForResolverFragment:o},(function(){var t=J(e,n._variables,i),r=t[0],a=t[1];return{resolverResult:r,snapshot:s,error:a}}))}var t=J(e,n._variables,null);return{resolverResult:t[0],snapshot:void 0,error:t[1]}}),o),u=_[0],h=_[1],c=_[2],v=_[3],g=_[4],E=_[5];return this._propogateResolverMetadata(e.path,v,c,h,g,E),t[null!==(r=e.alias)&&void 0!==r?r:e.name]=u,u},i._propogateResolverMetadata=function(e,i,t,r,a,n){if(null!=i){if(null!=i.missingRequiredFields&&this._addMissingRequiredFields(i.missingRequiredFields),null!=i.missingClientEdges){var l,d=(0,s.default)(i.missingClientEdges);try{for(d.s();!(l=d.n()).done;){var o=l.value;this._missingClientEdges.push(o)}}catch(e){d.e(e)}finally{d.f()}}if(null!=i.missingLiveResolverFields){this._isMissingData=this._isMissingData||i.missingLiveResolverFields.length>0;var _,u=(0,s.default)(i.missingLiveResolverFields);try{for(u.s();!(_=u.n()).done;){var h=_.value;this._missingLiveResolverFields.push(h)}}catch(e){u.e(e)}finally{u.f()}}var c,v=(0,s.default)(i.relayResolverErrors);try{for(v.s();!(c=v.n()).done;){var g=c.value;this._resolverErrors.push(g)}}catch(e){v.e(e)}finally{v.f()}this._isMissingData=this._isMissingData||i.isMissingData}if(t&&this._resolverErrors.push({field:{path:e,owner:this._fragmentName},error:t}),null!=r&&this._seenRecords.add(r),null!=a&&(this._isMissingData=!0,this._missingLiveResolverFields.push({path:"".concat(this._fragmentName,".").concat(e),liveStateID:a})),null!=n){var E,f=(0,s.default)(n);try{for(f.s();!(E=f.n()).done;){var m=E.value;this._updatedDataIDs.add(m)}}catch(e){f.e(e)}finally{f.f()}}},i._readClientEdge=function(e,i,t){var r,s=e.backingField;"ClientExtension"===s.kind&&H(!1);var a=null!==(r=s.alias)&&void 0!==r?r:s.name,n={};this._traverseSelections([s],i,n);var l=n[a];if(null==l||N(l))return t[a]=l,l;var d=function(e,i){return e.linkedField.plural?(Array.isArray(i)||H(!1),{kind:"PluralConcrete",ids:i.map((function(e){return Q(e)}))}):{kind:"SingularConcrete",id:Q(i)}}(e,l);switch(d.kind){case"PluralConcrete":var o=function(e,i,t){if(e.kind===u){if(null==e.backingField.normalizationInfo){var r=e.concreteType;return null==r&&H(!1),i.map((function(e){return t.ensureClientRecord(e,r)}))}return i}H(!1)}(e,d.ids,this._resolverCache);this._clientEdgeTraversalPath.push(null);var _=this._readLinkedIds(e.linkedField,o,i,t);return this._clientEdgeTraversalPath.pop(),t[a]=_,_;case"SingularConcrete":var h=function(e,i,t){if(e.kind===u){if(null==e.backingField.normalizationInfo){var r=e.concreteType;return null==r&&H(!1),[t.ensureClientRecord(i,r),null]}return[i,null]}return[i,{readerClientEdge:e,clientEdgeDestinationID:i}]}(e,d.id,this._resolverCache),c=h[0],v=h[1];this._clientEdgeTraversalPath.push(v);var g=t[a];null!=g&&"object"!=typeof g&&H(!1);var E=this._traverse(e.linkedField,c,g);return this._clientEdgeTraversalPath.pop(),t[a]=E,E;default:d.kind}},i._readScalar=function(e,i,t){var r,s=null!==(r=e.alias)&&void 0!==r?r:e.name,a=B(e,this._variables),n=y.getValue(i,a);return void 0===n&&this._markDataAsMissing(),t[s]=n,n},i._readLink=function(e,i,t){var r,s=null!==(r=e.alias)&&void 0!==r?r:e.name,a=B(e,this._variables),n=y.getLinkedRecordID(i,a);if(null==n)return t[s]=n,void 0===n&&this._markDataAsMissing(),n;var l=t[s];null!=l&&"object"!=typeof l&&H(!1);var d=this._traverse(e,n,l);return t[s]=d,d},i._readActorChange=function(e,i,t){var r,s=null!==(r=e.alias)&&void 0!==r?r:e.name,a=B(e,this._variables),n=y.getActorLinkedRecordID(i,a);if(null==n)return t[s]=n,void 0===n&&this._markDataAsMissing(),t[s];var l=n[0],d=n[1],o={};return this._createFragmentPointer(e.fragmentSpread,y.fromObject({__id:d}),o),t[s]={__fragmentRef:o,__viewer:l},t[s]},i._readPluralLink=function(e,i,t){var r=B(e,this._variables),s=y.getLinkedRecordIDs(i,r);return this._readLinkedIds(e,s,i,t)},i._readLinkedIds=function(e,i,t,r){var s,a=this,n=null!==(s=e.alias)&&void 0!==s?s:e.name;if(null==i)return r[n]=i,void 0===i&&this._markDataAsMissing(),i;var l=r[n];null==l||Array.isArray(l)||H(!1);var d=l||[];return i.forEach((function(i,t){if(null==i)return void 0===i&&a._markDataAsMissing(),void(d[t]=i);var r=d[t];null!=r&&"object"!=typeof r&&H(!1),d[t]=a._traverse(e,i,r)})),r[n]=d,d},i._readModuleImport=function(e,i,t){var r=V(e.documentName),s=y.getValue(i,r);null!=s?(this._createFragmentPointer({kind:"FragmentSpread",name:e.fragmentName,args:e.args},i,t),t[k]=e.fragmentPropName,t[w]=s):void 0===s&&this._markDataAsMissing()},i._createAliasedFragmentSpread=function(e,i){var t=e.abstractKey;if(null==t){var r=y.getType(i);if(null==r||r!==e.type)return null}else{var s=this._implementsInterface(i,t);if(!1===s)return null;if(null==s)return void this._markDataAsMissing()}var a={};return this._createFragmentPointer(e.fragment,i,a),y.fromObject(a)},i._readInlineFragment=function(e,i,t){var r=e.abstractKey;if(null==r){var s=y.getType(i);if(null==s||s!==e.type)return null;if(!this._traverseSelections(e.selections,i,t))return!1}else{var a=this._implementsInterface(i,r),n=this._isMissingData,l=this._isWithinUnmatchedTypeRefinement;if(this._isWithinUnmatchedTypeRefinement=l||!1===a,this._traverseSelections(e.selections,i,t),this._isWithinUnmatchedTypeRefinement=l,!1===a)return void(this._isMissingData=n);if(null==a)return this._markDataAsMissing(),null}return t},i._createFragmentPointer=function(e,i,t){var r=t[O];null==r&&(r=t[O]={}),("object"!=typeof r||null==r)&&H(!1),null==t[P]&&(t[P]=y.getDataID(i)),r[e.name]=q(e.args,this._variables,this._isWithinUnmatchedTypeRefinement),t[b]=this._owner,I.ENABLE_CLIENT_EDGES&&this._clientEdgeTraversalPath.length>0&&null!==this._clientEdgeTraversalPath[this._clientEdgeTraversalPath.length-1]&&(t[M]=(0,n.default)(this._clientEdgeTraversalPath))},i._createInlineDataOrResolverFragmentPointer=function(e,i,t){var r=t[O];null==r&&(r=t[O]={}),("object"!=typeof r||null==r)&&H(!1),null==t[P]&&(t[P]=y.getDataID(i));var s={},a=this._fragmentName;this._fragmentName=e.name;var n=this._variables,l=e.args?q(e.args,this._variables):{};this._variables=S.getFragmentVariables(e,this._owner.variables,l),this._traverseSelections(e.selections,i,s),this._variables=n,this._fragmentName=a,r[e.name]=s},i._addMissingRequiredFields=function(e){null!=this._missingRequiredFields?"THROW"!==this._missingRequiredFields.action&&("THROW"!==e.action?this._missingRequiredFields={action:"LOG",fields:[].concat((0,n.default)(this._missingRequiredFields.fields),(0,n.default)(e.fields))}:this._missingRequiredFields=e):this._missingRequiredFields=e},i._implementsInterface=function(e,i){var t=y.getType(e),r=this._recordSource.get(j(t));return null!=r?y.getValue(r,i):null},e}();function J(e,i,t){var r="function"==typeof e.resolverModule?e.resolverModule:e.resolverModule.default,s=null,a=null;try{var n=[];null!=e.fragment&&n.push(t);var l=e.args?q(e.args,i):void 0;n.push(l),s=r.apply(null,n)}catch(e){e===W?s=void 0:a=e}return[s,a]}function Q(e,i){return"string"==typeof e?e:"object"==typeof e&&null!=e&&"string"==typeof e.id?e.id:void H(!1)}e.exports={read:x}}}]);
//# sourceMappingURL=RelayReader.js.js.map?d9542