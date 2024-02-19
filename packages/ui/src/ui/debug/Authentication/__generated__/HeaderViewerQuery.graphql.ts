/**
 * @generated SignedSource<<cd4ac148339081cbdad8a6925baaf04f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HeaderViewerQuery$variables = {
  resource: string;
};
export type HeaderViewerQuery$data = {
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"HeaderViewerFragment">;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"LoginButtonFragment">;
};
export type HeaderViewerQuery = {
  response: HeaderViewerQuery$data;
  variables: HeaderViewerQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "resource"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "resource",
    "variableName": "resource"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "HeaderViewerQuery",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "LoginButtonFragment"
      },
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "HeaderViewerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "OAuth2LinksProvider",
        "kind": "LinkedField",
        "name": "oAuth2Links",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "google",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
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
    "cacheID": "bc4a4b35ae59e1497bd7e07241d7ed65",
    "id": null,
    "metadata": {},
    "name": "HeaderViewerQuery",
    "operationKind": "query",
    "text": "query HeaderViewerQuery(\n  $resource: String!\n) {\n  ...LoginButtonFragment_1AFwKl\n  viewer {\n    ...HeaderViewerFragment\n    id\n  }\n}\n\nfragment HeaderViewerFragment on UserNode {\n  firstName\n  lastName\n  created\n  updated\n  email\n  profilePicture\n  id\n}\n\nfragment LoginButtonFragment_1AFwKl on Query {\n  oAuth2Links(resource: $resource) {\n    google\n  }\n}\n"
  }
};
})();

(node as any).hash = "2745104af60ebff0e05ebf1da24ed9b0";

export default node;
