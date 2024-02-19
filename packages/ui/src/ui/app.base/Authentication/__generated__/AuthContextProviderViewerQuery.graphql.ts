/**
 * @generated SignedSource<<62ab971df59facb30667c999c7e706ea>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AuthContextProviderViewerQuery$variables = Record<PropertyKey, never>;
export type AuthContextProviderViewerQuery$data = {
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"ViewerProfileFragment">;
  } | null | undefined;
};
export type AuthContextProviderViewerQuery = {
  response: AuthContextProviderViewerQuery$data;
  variables: AuthContextProviderViewerQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AuthContextProviderViewerQuery",
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AuthContextProviderViewerQuery",
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
            "name": "created",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "updated",
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
    "cacheID": "4cb8ac967ec3c95e405655970c8c7692",
    "id": null,
    "metadata": {},
    "name": "AuthContextProviderViewerQuery",
    "operationKind": "query",
    "text": "query AuthContextProviderViewerQuery {\n  viewer {\n    ...ViewerProfileFragment\n    id\n  }\n}\n\nfragment ViewerProfileFragment on UserNode {\n  firstName\n  lastName\n  created\n  updated\n  email\n  profilePicture\n  id\n}\n"
  }
};

(node as any).hash = "50065410c1b55db19c6f068ae59cda00";

export default node;
