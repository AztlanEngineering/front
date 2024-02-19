/**
 * @generated SignedSource<<f3285e611c2a4b5d6263b422c7bbe913>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ProviderAuthenticationViewerLogoutMutation$variables = Record<PropertyKey, never>;
export type ProviderAuthenticationViewerLogoutMutation$data = {
  readonly deleteRefreshTokenCookie: {
    readonly clientMutationId: string | null | undefined;
    readonly deleted: boolean;
  } | null | undefined;
  readonly deleteTokenCookie: {
    readonly clientMutationId: string | null | undefined;
    readonly deleted: boolean;
  } | null | undefined;
};
export type ProviderAuthenticationViewerLogoutMutation = {
  response: ProviderAuthenticationViewerLogoutMutation$data;
  variables: ProviderAuthenticationViewerLogoutMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "deleted",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "clientMutationId",
    "storageKey": null
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "input",
        "value": {
          "clientMutationId": "logout-delete-access"
        }
      }
    ],
    "concreteType": "DeleteJSONWebTokenCookiePayload",
    "kind": "LinkedField",
    "name": "deleteTokenCookie",
    "plural": false,
    "selections": (v0/*: any*/),
    "storageKey": "deleteTokenCookie(input:{\"clientMutationId\":\"logout-delete-access\"})"
  },
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "input",
        "value": {
          "clientMutationId": "logout-delete-refresh"
        }
      }
    ],
    "concreteType": "DeleteRefreshTokenCookiePayload",
    "kind": "LinkedField",
    "name": "deleteRefreshTokenCookie",
    "plural": false,
    "selections": (v0/*: any*/),
    "storageKey": "deleteRefreshTokenCookie(input:{\"clientMutationId\":\"logout-delete-refresh\"})"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ProviderAuthenticationViewerLogoutMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ProviderAuthenticationViewerLogoutMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e93c6a7a86d330a35ff9286bc6c90e17",
    "id": null,
    "metadata": {},
    "name": "ProviderAuthenticationViewerLogoutMutation",
    "operationKind": "mutation",
    "text": "mutation ProviderAuthenticationViewerLogoutMutation {\n  deleteTokenCookie(input: {clientMutationId: \"logout-delete-access\"}) {\n    deleted\n    clientMutationId\n  }\n  deleteRefreshTokenCookie(input: {clientMutationId: \"logout-delete-refresh\"}) {\n    deleted\n    clientMutationId\n  }\n}\n"
  }
};
})();

(node as any).hash = "38a001785c5a6952d52bbddd2f2d9a17";

export default node;
