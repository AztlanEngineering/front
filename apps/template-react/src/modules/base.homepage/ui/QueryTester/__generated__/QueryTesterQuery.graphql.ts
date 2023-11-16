/**
 * @generated SignedSource<<4860e46dc31a9f9907d14a20db26a4fe>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type QueryTesterQuery$variables = Record<PropertyKey, never>;
export type QueryTesterQuery$data = {
  readonly time: any | null | undefined;
};
export type QueryTesterQuery = {
  response: QueryTesterQuery$data;
  variables: QueryTesterQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "time",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "QueryTesterQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "QueryTesterQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "8820dccf9d28f9ce29f67dc0c4c25fb3",
    "id": null,
    "metadata": {},
    "name": "QueryTesterQuery",
    "operationKind": "query",
    "text": "query QueryTesterQuery {\n  time\n}\n"
  }
};
})();

(node as any).hash = "ad11e00a441dbff4fcb2811ce195e783";

export default node;
