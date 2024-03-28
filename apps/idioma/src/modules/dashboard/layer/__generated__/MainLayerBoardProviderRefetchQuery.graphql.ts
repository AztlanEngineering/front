/**
 * @generated SignedSource<<541381fa1bb180f282a8fea1e2bdd07a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MainLayerBoardProviderRefetchQuery$variables = {
  id?: string | null | undefined;
};
export type MainLayerBoardProviderRefetchQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"MainLayerBoardProviderFragment">;
};
export type MainLayerBoardProviderRefetchQuery = {
  response: MainLayerBoardProviderRefetchQuery$data;
  variables: MainLayerBoardProviderRefetchQuery$variables;
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
    "name": "MainLayerBoardProviderRefetchQuery",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "MainLayerBoardProviderFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MainLayerBoardProviderRefetchQuery",
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
    "cacheID": "c91e212f307106db41567d9dbd15b4e2",
    "id": null,
    "metadata": {},
    "name": "MainLayerBoardProviderRefetchQuery",
    "operationKind": "query",
    "text": "query MainLayerBoardProviderRefetchQuery(\n  $id: ID\n) {\n  ...MainLayerBoardProviderFragment_1Bmzm5\n}\n\nfragment MainLayerBoardProviderFragment_1Bmzm5 on Query {\n  board(id: $id) {\n    id\n    name\n    created\n    updated\n  }\n}\n"
  }
};
})();

(node as any).hash = "941d8fd3c616c8bf0eb0e5e1632390d4";

export default node;
