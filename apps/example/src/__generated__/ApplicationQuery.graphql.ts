/**
 * @generated SignedSource<<3d71da9a062639715e462f9da525a05f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ApplicationQuery$variables = {
  loginRequestedResource: string;
};
export type ApplicationQuery$data = {
  readonly viewer: {
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"ApplicationQueryViewerFragment">;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"LoginButtonFragment">;
};
export type ApplicationQuery = {
  response: ApplicationQuery$data;
  variables: ApplicationQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "loginRequestedResource"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "kind": "Variable",
    "name": "resource",
    "variableName": "loginRequestedResource"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ApplicationQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UserNode",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ApplicationQueryViewerFragment"
          }
        ],
        "storageKey": null
      },
      {
        "args": (v2/*: any*/),
        "kind": "FragmentSpread",
        "name": "LoginButtonFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ApplicationQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UserNode",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v1/*: any*/),
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
            "name": "isActive",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isSuperuser",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
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
      }
    ]
  },
  "params": {
    "cacheID": "86d8f79191c97e4d28fbbe0c89c98758",
    "id": null,
    "metadata": {},
    "name": "ApplicationQuery",
    "operationKind": "query",
    "text": "query ApplicationQuery(\n  $loginRequestedResource: String!\n) {\n  viewer {\n    id\n    ...ApplicationQueryViewerFragment\n  }\n  ...LoginButtonFragment_2Xypug\n}\n\nfragment ApplicationQueryViewerFragment on UserNode {\n  id\n  firstName\n  lastName\n  created\n  updated\n  email\n  profilePicture\n  isActive\n  isSuperuser\n  ...ProfileFragment\n  ...BaseAuthenticationDebugFragment\n}\n\nfragment BaseAuthenticationDebugFragment on UserNode {\n  id\n  firstName\n  lastName\n  email\n}\n\nfragment LoginButtonFragment_2Xypug on Query {\n  oAuth2Links(resource: $loginRequestedResource) {\n    google\n  }\n}\n\nfragment ProfileFragment on UserNode {\n  firstName\n  lastName\n  created\n  updated\n  email\n  profilePicture\n}\n"
  }
};
})();

(node as any).hash = "8d073f64cb855407a3a908bd6d1aab0f";

export default node;
