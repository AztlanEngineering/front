/**
 * @generated SignedSource<<154e36a94d2dfeff1b417033905d2f2c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LoginButtonQuery$variables = {
  resource: string;
};
export type LoginButtonQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"LoginButtonFragment">;
};
export type LoginButtonQuery = {
  response: LoginButtonQuery$data;
  variables: LoginButtonQuery$variables;
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
    "name": "LoginButtonQuery",
    "selections": [
      {
        "args": (v1/*: any*/),
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
    "name": "LoginButtonQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "OAuth2LinksProvider",
        "kind": "LinkedField",
        "name": "oAuth2Login",
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
    "cacheID": "77eaa057c64ff061f175acd94d987649",
    "id": null,
    "metadata": {},
    "name": "LoginButtonQuery",
    "operationKind": "query",
    "text": "query LoginButtonQuery(\n  $resource: String!\n) {\n  ...LoginButtonFragment_1AFwKl\n}\n\nfragment LoginButtonFragment_1AFwKl on Query {\n  oAuth2Login(resource: $resource) {\n    google\n  }\n}\n"
  }
};
})();

(node as any).hash = "8ed3b9c0ddc57320fea3af8c96bc65ba";

export default node;
