/**
 * @generated SignedSource<<84e3905daf2d389f42414b9bea5d526e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HeaderViewerTestQuery$variables = Record<PropertyKey, never>;
export type HeaderViewerTestQuery$data = {
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"HeaderViewerFragment">;
  } | null | undefined;
};
export type HeaderViewerTestQuery = {
  response: HeaderViewerTestQuery$data;
  variables: HeaderViewerTestQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HeaderViewerTestQuery",
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
            "name": "HeaderViewerFragment"
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
    "name": "HeaderViewerTestQuery",
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
    "cacheID": "cecf3a2b0243ff057f10c71d10828dfa",
    "id": null,
    "metadata": {},
    "name": "HeaderViewerTestQuery",
    "operationKind": "query",
    "text": "query HeaderViewerTestQuery {\n  viewer {\n    ...HeaderViewerFragment\n    id\n  }\n}\n\nfragment HeaderViewerFragment on UserNode {\n  firstName\n  lastName\n  created\n  updated\n  email\n  profilePicture\n  id\n}\n"
  }
};

(node as any).hash = "39403f498f33b401b54eba167ddad210";

export default node;
