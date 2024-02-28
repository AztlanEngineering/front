/**
 * @generated SignedSource<<f1c45ff39329751dc2a3ae26350e0157>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type queriesApplicationQuery$variables = Record<PropertyKey, never>;
export type queriesApplicationQuery$data = {
  readonly time: any | null | undefined;
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"ViewerProfileFragment">;
  } | null | undefined;
};
export type queriesApplicationQuery = {
  response: queriesApplicationQuery$data;
  variables: queriesApplicationQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "time",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "queriesApplicationQuery",
    "selections": [
      (v0/*: any*/),
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
    "name": "queriesApplicationQuery",
    "selections": [
      (v0/*: any*/),
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
    "cacheID": "58f5187add75e37ffc8fb31e95f11882",
    "id": null,
    "metadata": {},
    "name": "queriesApplicationQuery",
    "operationKind": "query",
    "text": "query queriesApplicationQuery {\n  time\n  viewer {\n    ...ViewerProfileFragment\n    id\n  }\n}\n\nfragment ViewerProfileFragment on UserNode {\n  firstName\n  lastName\n  created\n  updated\n  email\n  profilePicture\n  id\n}\n"
  }
};
})();

(node as any).hash = "3373247a19086e4517349aeb412f5828";

export default node;
