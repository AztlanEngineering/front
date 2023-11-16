/**
 * @generated SignedSource<<76d71db0352e4f1ed58b4699c47864ae>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type QueryTesterQuery$variables = Record<PropertyKey, never>;
export type QueryTesterQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"QueryTesterFragment">;
};
export type QueryTesterQuery = {
  response: QueryTesterQuery$data;
  variables: QueryTesterQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "QueryTesterQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "QueryTesterFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "QueryTesterQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "time",
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "cb2c901c92e521a25b2ac76857b5e322",
    "id": null,
    "metadata": {},
    "name": "QueryTesterQuery",
    "operationKind": "query",
    "text": "query QueryTesterQuery {\n  ...QueryTesterFragment\n}\n\nfragment QueryTesterFragment on Query {\n  time\n}\n"
  }
};

(node as any).hash = "920e8fa8275613b7ca9be05c137e7fbf";

export default node;
