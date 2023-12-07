/**
 * @generated SignedSource<<5975d5815f9cfef0a215bfe7f97dc703>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PrivateRouteRfetchableFragment$variables = {
  id: string;
};
export type PrivateRouteRfetchableFragment$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"PrivateRouteFragment">;
  } | null | undefined;
};
export type PrivateRouteRfetchableFragment = {
  response: PrivateRouteRfetchableFragment$data;
  variables: PrivateRouteRfetchableFragment$variables;
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
    "name": "PrivateRouteRfetchableFragment",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PrivateRouteFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PrivateRouteRfetchableFragment",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isActive",
                "storageKey": null
              }
            ],
            "type": "UserNode",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "0a732f94bdc4299ff95a19c37ccf5398",
    "id": null,
    "metadata": {},
    "name": "PrivateRouteRfetchableFragment",
    "operationKind": "query",
    "text": "query PrivateRouteRfetchableFragment(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...PrivateRouteFragment\n    id\n  }\n}\n\nfragment PrivateRouteFragment on UserNode {\n  isActive\n  id\n}\n"
  }
};
})();

(node as any).hash = "c126d8df9e93da5562f65f2df5dc26c3";

export default node;
