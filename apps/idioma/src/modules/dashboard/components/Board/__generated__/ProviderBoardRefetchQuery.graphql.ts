/**
 * @generated SignedSource<<addd60d5ab1a6f6e8d57ff31e318cc90>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProviderBoardRefetchQuery$variables = {
  id: string;
};
export type ProviderBoardRefetchQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ProviderBoardFragment">;
};
export type ProviderBoardRefetchQuery = {
  response: ProviderBoardRefetchQuery$data;
  variables: ProviderBoardRefetchQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ProviderBoardRefetchQuery",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "ProviderBoardFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ProviderBoardRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "BoardNode",
        "kind": "LinkedField",
        "name": "board",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "created",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "updated",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9b72a738885129e86d2e44e3ef126c82",
    "id": null,
    "metadata": {},
    "name": "ProviderBoardRefetchQuery",
    "operationKind": "query",
    "text": "query ProviderBoardRefetchQuery(\n  $id: ID!\n) {\n  ...ProviderBoardFragment_1Bmzm5\n}\n\nfragment ProviderBoardFragment_1Bmzm5 on Query {\n  board(id: $id) {\n    id\n    name\n    created\n    updated\n  }\n}\n"
  }
};
})();

(node as any).hash = "0e5661fd88ddee9bbb52965b884d3dbf";

export default node;
