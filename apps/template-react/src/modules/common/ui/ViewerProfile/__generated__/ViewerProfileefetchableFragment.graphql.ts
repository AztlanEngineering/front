/**
 * @generated SignedSource<<a5576d977705aa886c09aabdd12e0e89>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ViewerProfileefetchableFragment$variables = {
  id: string;
};
export type ViewerProfileefetchableFragment$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"ViewerProfileFragment">;
  } | null | undefined;
};
export type ViewerProfileefetchableFragment = {
  response: ViewerProfileefetchableFragment$data;
  variables: ViewerProfileefetchableFragment$variables;
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
    "name": "ViewerProfileefetchableFragment",
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
            "name": "ViewerProfileFragment"
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
    "name": "ViewerProfileefetchableFragment",
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
                "name": "firstName",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "lastName",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "createdAt",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "updatedAt",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "email",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "profilePicture",
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
    "cacheID": "6657bfbaa402e67163c94cc70fd841ab",
    "id": null,
    "metadata": {},
    "name": "ViewerProfileefetchableFragment",
    "operationKind": "query",
    "text": "query ViewerProfileefetchableFragment(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...ViewerProfileFragment\n    id\n  }\n}\n\nfragment ViewerProfileFragment on UserNode {\n  firstName\n  lastName\n  createdAt\n  updatedAt\n  email\n  profilePicture\n  id\n}\n"
  }
};
})();

(node as any).hash = "b5d6d12894d6995fa917786b977a0528";

export default node;
