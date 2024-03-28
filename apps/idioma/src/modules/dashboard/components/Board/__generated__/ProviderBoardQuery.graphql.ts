/**
 * @generated SignedSource<<c638326e9a85c98e569f81bc72a056b7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProviderBoardQuery$variables = {
  id: string;
};
export type ProviderBoardQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ProviderBoardFragment">;
};
export type ProviderBoardQuery = {
  response: ProviderBoardQuery$data;
  variables: ProviderBoardQuery$variables;
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
    "name": "ProviderBoardQuery",
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
    "name": "ProviderBoardQuery",
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
    "cacheID": "a674027fffda1bad715c21acb7909469",
    "id": null,
    "metadata": {},
    "name": "ProviderBoardQuery",
    "operationKind": "query",
    "text": "query ProviderBoardQuery(\n  $id: ID!\n) {\n  ...ProviderBoardFragment_1Bmzm5\n}\n\nfragment ProviderBoardFragment_1Bmzm5 on Query {\n  board(id: $id) {\n    id\n    name\n    created\n    updated\n  }\n}\n"
  }
};
})();

(node as any).hash = "e791df30302895de676d8737f6286545";

export default node;
