/**
 * @generated SignedSource<<accaed3735f8530c71c0f00ba375ff6e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppViewerQuery$variables = Record<PropertyKey, never>;
export type AppViewerQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ViewerProfileFragment">;
};
export type AppViewerQuery = {
  response: AppViewerQuery$data;
  variables: AppViewerQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppViewerQuery",
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
    "name": "AppViewerQuery",
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
    "cacheID": "e8944657eb67e3dbb951baa896aeda74",
    "id": null,
    "metadata": {},
    "name": "AppViewerQuery",
    "operationKind": "query",
    "text": "query AppViewerQuery {\n  ...ViewerProfileFragment\n}\n\nfragment ViewerProfileFragment on Query {\n  viewer {\n    firstName\n    lastName\n    createdAt\n    updatedAt\n    email\n    profilePicture\n    id\n  }\n}\n"
  }
};

(node as any).hash = "663dbc2944eb8876bd226bc97df4600d";

export default node;
