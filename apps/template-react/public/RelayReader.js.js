"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[101],{4964:(e,i,r)=>{var s=r(6824).default,t=s(r(1887)),a=s(r(6579)),n=s(r(2839)),l=r(1573),d=l.ACTOR_CHANGE,o=l.ALIASED_FRAGMENT_SPREAD,u=l.ALIASED_INLINE_FRAGMENT_SPREAD,_=l.CLIENT_EDGE_TO_CLIENT_OBJECT,h=l.CLIENT_EDGE_TO_SERVER_OBJECT,c=l.CLIENT_EXTENSION,v=l.CONDITION,g=l.DEFER,E=l.FRAGMENT_SPREAD,f=l.INLINE_DATA_FRAGMENT_SPREAD,m=l.INLINE_FRAGMENT,R=l.LINKED_FIELD,p=l.MODULE_IMPORT,D=l.RELAY_LIVE_RESOLVER,F=l.RELAY_RESOLVER,L=l.REQUIRED_FIELD,A=l.SCALAR_FIELD,I=l.STREAM,N=r(2761),T=r(3682).isSuspenseSentinel,y=r(6589),S=r(2306),b=r(8677),C=b.CLIENT_EDGE_TRAVERSAL_PATH,M=b.FRAGMENT_OWNER_KEY,k=b.FRAGMENT_PROP_NAME_KEY,O=b.FRAGMENTS_KEY,P=b.ID_KEY,w=b.MODULE_COMPONENT_KEY,G=b.ROOT_ID,q=b.getArgumentValues,V=b.getModuleComponentKey,B=b.getStorageKey,U=r(3922).NoopResolverCache,K=r(9174),W=K.RESOLVER_FRAGMENT_MISSING_DATA_SENTINEL,Y=K.withResolverContext,j=r(2980).generateTypeID,H=r(9990);function x(e,i,r){return new z(e,i,null!=r?r:new U).read()}var z=function(){function e(e,i,r){var s;this._clientEdgeTraversalPath=N.ENABLE_CLIENT_EDGES&&null!==(s=i.clientEdgeTraversalPath)&&void 0!==s&&s.length?(0,n.default)(i.clientEdgeTraversalPath):[],this._missingClientEdges=[],this._missingLiveResolverFields=[],this._isMissingData=!1,this._isWithinUnmatchedTypeRefinement=!1,this._missingRequiredFields=null,this._errorResponseFields=null,this._owner=i.owner,this._recordSource=e,this._seenRecords=new Set,this._selector=i,this._variables=i.variables,this._resolverCache=r,this._resolverErrors=[],this._fragmentName=i.node.name,this._updatedDataIDs=new Set}var i=e.prototype;return i.read=function(){var e=this._selector,i=e.node,r=e.dataID,s=e.isWithinUnmatchedTypeRefinement,t=i.abstractKey,a=this._recordSource.get(r),n=!s;if(n&&null==t&&null!=a&&S.getType(a)!==i.type&&r!==G&&(n=!1),n&&null!=t&&null!=a){var l=this._implementsInterface(a,t);!1===l?n=!1:null==l&&(this._isMissingData=!0)}this._isWithinUnmatchedTypeRefinement=!n;var d=this._traverse(i,r,null);return this._updatedDataIDs.size>0&&(this._resolverCache.notifyUpdatedSubscribers(this._updatedDataIDs),this._updatedDataIDs.clear()),{data:d,isMissingData:this._isMissingData&&n,missingClientEdges:N.ENABLE_CLIENT_EDGES&&this._missingClientEdges.length?this._missingClientEdges:null,missingLiveResolverFields:this._missingLiveResolverFields,seenRecords:this._seenRecords,selector:this._selector,missingRequiredFields:this._missingRequiredFields,relayResolverErrors:this._resolverErrors,errorResponseFields:this._errorResponseFields}},i._maybeAddErrorResponseFields=function(e,i){if(N.ENABLE_FIELD_ERROR_HANDLING){var r=S.getErrors(e,i);if(null!=r){var s=this._fragmentName;null==this._errorResponseFields&&(this._errorResponseFields=[]);var t,n=(0,a.default)(r);try{for(n.s();!(t=n.n()).done;){var l,d=t.value;this._errorResponseFields.push({owner:s,path:(null!==(l=d.path)&&void 0!==l?l:[]).join("."),error:d})}}catch(e){n.e(e)}finally{n.f()}}}},i._markDataAsMissing=function(){if(this._isMissingData=!0,N.ENABLE_CLIENT_EDGES&&this._clientEdgeTraversalPath.length){var e=this._clientEdgeTraversalPath[this._clientEdgeTraversalPath.length-1];null!==e&&this._missingClientEdges.push({request:e.readerClientEdge.operation,clientEdgeDestinationID:e.clientEdgeDestinationID})}},i._traverse=function(e,i,r){var s=this._recordSource.get(i);if(this._seenRecords.add(i),null==s)return void 0===s&&this._markDataAsMissing(),s;var t=r||{};return this._traverseSelections(e.selections,s,t)?t:null},i._getVariableValue=function(e){return this._variables.hasOwnProperty(e)||H(!1),this._variables[e]},i._maybeReportUnexpectedNull=function(e,i){var r;if("THROW"!==(null===(r=this._missingRequiredFields)||void 0===r?void 0:r.action)){var s=this._fragmentName;switch(i){case"THROW":return void(this._missingRequiredFields={action:i,field:{path:e,owner:s}});case"LOG":return void(null==this._missingRequiredFields?this._missingRequiredFields={action:i,fields:[{path:e,owner:s}]}:this._missingRequiredFields={action:i,fields:[].concat((0,n.default)(this._missingRequiredFields.fields),[{path:e,owner:s}])})}}},i._traverseSelections=function(e,i,r){for(var s=0;s<e.length;s++){var t=e[s];switch(t.kind){case L:if(null==this._readRequiredField(t,i,r)){var a=t.action;return"NONE"!==a&&this._maybeReportUnexpectedNull(t.path,a),!1}break;case A:this._readScalar(t,i,r);break;case R:t.plural?this._readPluralLink(t,i,r):this._readLink(t,i,r);break;case v:if(Boolean(this._getVariableValue(t.condition))===t.passingValue&&!this._traverseSelections(t.selections,i,r))return!1;break;case m:if(!1===this._readInlineFragment(t,i,r))return!1;break;case D:case F:if(!N.ENABLE_RELAY_RESOLVERS)throw new Error("Relay Resolver fields are not yet supported.");this._readResolverField(t,i,r);break;case E:this._createFragmentPointer(t,i,r);break;case o:r[t.name]=this._createAliasedFragmentSpread(t,i);break;case u:var n=this._readInlineFragment(t.fragment,i,{});!1===n&&(n=null),r[t.name]=n;break;case p:this._readModuleImport(t,i,r);break;case f:this._createInlineDataOrResolverFragmentPointer(t,i,r);break;case g:case c:var l=this._isMissingData,T=this._missingClientEdges.length;N.ENABLE_CLIENT_EDGES&&this._clientEdgeTraversalPath.push(null);var y=this._traverseSelections(t.selections,i,r);if(this._isMissingData=l||this._missingClientEdges.length>T||this._missingLiveResolverFields.length>0,N.ENABLE_CLIENT_EDGES&&this._clientEdgeTraversalPath.pop(),!y)return!1;break;case I:if(!this._traverseSelections(t.selections,i,r))return!1;break;case d:this._readActorChange(t,i,r);break;case _:case h:if(!N.ENABLE_CLIENT_EDGES)throw new Error("Client edges are not yet supported.");this._readClientEdge(t,i,r);break;default:H(!1)}}return!0},i._readRequiredField=function(e,i,r){switch(e.field.kind){case A:return this._readScalar(e.field,i,r);case R:return e.field.plural?this._readPluralLink(e.field,i,r):this._readLink(e.field,i,r);case F:case D:if(!N.ENABLE_RELAY_RESOLVERS)throw new Error("Relay Resolver fields are not yet supported.");return this._readResolverField(e.field,i,r);case _:case h:if(!N.ENABLE_RELAY_RESOLVERS)throw new Error("Relay Resolver fields are not yet supported.");return this._readClientEdge(e.field,i,r);default:e.field.kind,H(!1)}},i._readResolverField=function(e,i,r){var s,t=S.getDataID(i),a=this._readResolverFieldImpl(e,t);return r[null!==(s=e.alias)&&void 0!==s?s:e.name]=a,a},i._readResolverFieldImpl=function(e,i){var r,s=this,a=e.fragment,n=function(e){return null!=r?{data:r.data,isMissingData:r.isMissingData}:{data:(r=x(s._recordSource,e,s._resolverCache)).data,isMissingData:r.isMissingData}},l=this._resolverCache.readFromCacheOrEvaluate(i,e,this._variables,(function(){if(null!=a){var l={__id:i,__fragmentOwner:s._owner,__fragments:(0,t.default)({},a.name,a.args?q(a.args,s._variables):{})};return Y({getDataForResolverFragment:n},(function(){var i=J(e,s._variables,l),t=i[0],a=i[1];return{resolverResult:t,snapshot:r,error:a}}))}var d=J(e,s._variables,null);return{resolverResult:d[0],snapshot:void 0,error:d[1]}}),n),d=l[0],o=l[1],u=l[2],_=l[3],h=l[4],c=l[5];return this._propogateResolverMetadata(e.path,_,u,o,h,c),d},i._propogateResolverMetadata=function(e,i,r,s,t,n){if(null!=i){if(null!=i.missingRequiredFields&&this._addMissingRequiredFields(i.missingRequiredFields),null!=i.missingClientEdges){var l,d=(0,a.default)(i.missingClientEdges);try{for(d.s();!(l=d.n()).done;){var o=l.value;this._missingClientEdges.push(o)}}catch(e){d.e(e)}finally{d.f()}}if(null!=i.missingLiveResolverFields){this._isMissingData=this._isMissingData||i.missingLiveResolverFields.length>0;var u,_=(0,a.default)(i.missingLiveResolverFields);try{for(_.s();!(u=_.n()).done;){var h=u.value;this._missingLiveResolverFields.push(h)}}catch(e){_.e(e)}finally{_.f()}}var c,v=(0,a.default)(i.relayResolverErrors);try{for(v.s();!(c=v.n()).done;){var g=c.value;this._resolverErrors.push(g)}}catch(e){v.e(e)}finally{v.f()}this._isMissingData=this._isMissingData||i.isMissingData}if(r&&this._resolverErrors.push({field:{path:e,owner:this._fragmentName},error:r}),null!=s&&this._seenRecords.add(s),null!=t&&(this._isMissingData=!0,this._missingLiveResolverFields.push({path:"".concat(this._fragmentName,".").concat(e),liveStateID:t})),null!=n){var E,f=(0,a.default)(n);try{for(f.s();!(E=f.n()).done;){var m=E.value;this._updatedDataIDs.add(m)}}catch(e){f.e(e)}finally{f.f()}}},i._readClientEdge=function(e,i,r){var s,t=this,a=e.backingField;"ClientExtension"===a.kind&&H(!1);var n=null!==(s=a.alias)&&void 0!==s?s:a.name,l={};this._traverseSelections([a],i,l);var d=l[n];if(null==d||T(d))return r[n]=d,d;var o=function(e,i){return e.linkedField.plural?(Array.isArray(i)||H(!1),{kind:"PluralConcrete",ids:i.map((function(e){return Q(e)}))}):{kind:"SingularConcrete",id:Q(i)}}(e,d);switch(o.kind){case"PluralConcrete":var u=function(e,i,r){if(e.kind===_){if(null==e.backingField.normalizationInfo){var s=e.concreteType;return null==s&&H(!1),i.map((function(e){return r.ensureClientRecord(e,s)}))}return i}H(!1)}(e,o.ids,this._resolverCache),h=u;if(null!=e.modelResolver){var c=e.modelResolver;h=u.map((function(e){return null!=t._readResolverFieldImpl(c,e)?e:null}))}this._clientEdgeTraversalPath.push(null);var v=this._readLinkedIds(e.linkedField,h,i,r);return this._clientEdgeTraversalPath.pop(),r[n]=v,v;case"SingularConcrete":var g=function(e,i,r){if(e.kind===_){if(null==e.backingField.normalizationInfo){var s=e.concreteType;return null==s&&H(!1),[r.ensureClientRecord(i,s),null]}return[i,null]}return[i,{readerClientEdge:e,clientEdgeDestinationID:i}]}(e,o.id,this._resolverCache),E=g[0],f=g[1];if(null!=e.modelResolver&&null==this._readResolverFieldImpl(e.modelResolver,E))return r[n]=null,null;this._clientEdgeTraversalPath.push(f);var m=r[n];null!=m&&"object"!=typeof m&&H(!1);var R=this._traverse(e.linkedField,E,m);return this._clientEdgeTraversalPath.pop(),r[n]=R,R;default:o.kind}},i._readScalar=function(e,i,r){var s,t=null!==(s=e.alias)&&void 0!==s?s:e.name,a=B(e,this._variables),n=S.getValue(i,a);return null===n?this._maybeAddErrorResponseFields(i,a):void 0===n&&this._markDataAsMissing(),r[t]=n,n},i._readLink=function(e,i,r){var s,t=null!==(s=e.alias)&&void 0!==s?s:e.name,a=B(e,this._variables),n=S.getLinkedRecordID(i,a);if(null==n)return r[t]=n,null===n?this._maybeAddErrorResponseFields(i,a):void 0===n&&this._markDataAsMissing(),n;var l=r[t];null!=l&&"object"!=typeof l&&H(!1);var d=this._traverse(e,n,l);return r[t]=d,d},i._readActorChange=function(e,i,r){var s,t=null!==(s=e.alias)&&void 0!==s?s:e.name,a=B(e,this._variables),n=S.getActorLinkedRecordID(i,a);if(null==n)return r[t]=n,void 0===n?this._markDataAsMissing():null===n&&this._maybeAddErrorResponseFields(i,a),r[t];var l=n[0],d=n[1],o={};return this._createFragmentPointer(e.fragmentSpread,S.fromObject({__id:d}),o),r[t]={__fragmentRef:o,__viewer:l},r[t]},i._readPluralLink=function(e,i,r){var s=B(e,this._variables),t=S.getLinkedRecordIDs(i,s);return null===t&&this._maybeAddErrorResponseFields(i,s),this._readLinkedIds(e,t,i,r)},i._readLinkedIds=function(e,i,r,s){var t,a=this,n=null!==(t=e.alias)&&void 0!==t?t:e.name;if(null==i)return s[n]=i,void 0===i&&this._markDataAsMissing(),i;var l=s[n];null==l||Array.isArray(l)||H(!1);var d=l||[];return i.forEach((function(i,r){if(null==i)return void 0===i&&a._markDataAsMissing(),void(d[r]=i);var s=d[r];null!=s&&"object"!=typeof s&&H(!1),d[r]=a._traverse(e,i,s)})),s[n]=d,d},i._readModuleImport=function(e,i,r){var s=V(e.documentName),t=S.getValue(i,s);null!=t?(this._createFragmentPointer({kind:"FragmentSpread",name:e.fragmentName,args:e.args},i,r),r[k]=e.fragmentPropName,r[w]=t):void 0===t&&this._markDataAsMissing()},i._createAliasedFragmentSpread=function(e,i){var r=e.abstractKey;if(null==r){var s=S.getType(i);if(null==s||s!==e.type)return null}else{var t=this._implementsInterface(i,r);if(!1===t)return null;if(null==t)return void this._markDataAsMissing()}var a={};return this._createFragmentPointer(e.fragment,i,a),S.fromObject(a)},i._readInlineFragment=function(e,i,r){var s=e.abstractKey;if(null==s){var t=S.getType(i);if(null==t||t!==e.type)return null;if(!this._traverseSelections(e.selections,i,r))return!1}else{var a=this._implementsInterface(i,s),n=this._isMissingData,l=this._isWithinUnmatchedTypeRefinement;if(this._isWithinUnmatchedTypeRefinement=l||!1===a,this._traverseSelections(e.selections,i,r),this._isWithinUnmatchedTypeRefinement=l,!1===a)return void(this._isMissingData=n);if(null==a)return this._markDataAsMissing(),null}return r},i._createFragmentPointer=function(e,i,r){var s=r[O];null==s&&(s=r[O]={}),("object"!=typeof s||null==s)&&H(!1),null==r[P]&&(r[P]=S.getDataID(i)),s[e.name]=q(e.args,this._variables,this._isWithinUnmatchedTypeRefinement),r[M]=this._owner,N.ENABLE_CLIENT_EDGES&&this._clientEdgeTraversalPath.length>0&&null!==this._clientEdgeTraversalPath[this._clientEdgeTraversalPath.length-1]&&(r[C]=(0,n.default)(this._clientEdgeTraversalPath))},i._createInlineDataOrResolverFragmentPointer=function(e,i,r){var s=r[O];null==s&&(s=r[O]={}),("object"!=typeof s||null==s)&&H(!1),null==r[P]&&(r[P]=S.getDataID(i));var t={},a=this._fragmentName;this._fragmentName=e.name;var n=this._variables,l=e.args?q(e.args,this._variables):{};this._variables=y.getFragmentVariables(e,this._owner.variables,l),this._traverseSelections(e.selections,i,t),this._variables=n,this._fragmentName=a,s[e.name]=t},i._addMissingRequiredFields=function(e){null!=this._missingRequiredFields?"THROW"!==this._missingRequiredFields.action&&("THROW"!==e.action?this._missingRequiredFields={action:"LOG",fields:[].concat((0,n.default)(this._missingRequiredFields.fields),(0,n.default)(e.fields))}:this._missingRequiredFields=e):this._missingRequiredFields=e},i._implementsInterface=function(e,i){var r=S.getType(e),s=this._recordSource.get(j(r));return null!=s?S.getValue(s,i):null},e}();function J(e,i,r){var s="function"==typeof e.resolverModule?e.resolverModule:e.resolverModule.default,t=null,a=null;try{var n=[];null!=e.fragment&&n.push(r);var l=e.args?q(e.args,i):void 0;n.push(l),t=s.apply(null,n)}catch(e){e===W?t=void 0:a=e}return[t,a]}function Q(e,i){return"string"==typeof e?e:"object"==typeof e&&null!=e&&"string"==typeof e.id?e.id:void H(!1)}e.exports={read:x}}}]);
//# sourceMappingURL=RelayReader.js.js.map?886df