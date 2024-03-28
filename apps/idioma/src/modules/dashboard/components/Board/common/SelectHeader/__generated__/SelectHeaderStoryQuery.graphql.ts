/**
 * @generated SignedSource<<0c56cc5f281f4148548d9b44eb49060f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type SelectHeaderStoryQuery$variables = Record<PropertyKey, never>;
export type SelectHeaderStoryQuery$data = {
  readonly time: any | null | undefined;
};
export type SelectHeaderStoryQuery = {
  response: SelectHeaderStoryQuery$data;
  variables: SelectHeaderStoryQuery$variables;
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
    "name": "SelectHeaderStoryQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SelectHeaderStoryQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "9f385b0d7261189f5ed0e0e22deb58a9",
    "id": null,
    "metadata": {},
    "name": "SelectHeaderStoryQuery",
    "operationKind": "query",
    "text": "query SelectHeaderStoryQuery {\n  time\n}\n"
  }
};
})();

(node as any).hash = "3ca55dffff678919d98c27aca87de1aa";

export default node;
