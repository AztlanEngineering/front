/**
 * @generated SignedSource<<4a9ff871b5063c25edb6c0d9c2d36637>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ViewerProfileRefetchableFragment$variables = Record<PropertyKey, never>;
export type ViewerProfileRefetchableFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ViewerProfileFragment">;
};
export type ViewerProfileRefetchableFragment = {
  response: ViewerProfileRefetchableFragment$data;
  variables: ViewerProfileRefetchableFragment$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ViewerProfileRefetchableFragment",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ViewerProfileFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ViewerProfileRefetchableFragment",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UserNode",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e474cadcfb9d10ec8600193159b38355",
    "id": null,
    "metadata": {},
    "name": "ViewerProfileRefetchableFragment",
    "operationKind": "query",
    "text": "query ViewerProfileRefetchableFragment {\n  ...ViewerProfileFragment\n}\n\nfragment ViewerProfileFragment on Query {\n  viewer {\n    firstName\n    lastName\n    createdAt\n    updatedAt\n    email\n    profilePicture\n    id\n  }\n}\n"
  }
};

(node as any).hash = "b0aba748562499bebced993adca5de23";

export default node;
