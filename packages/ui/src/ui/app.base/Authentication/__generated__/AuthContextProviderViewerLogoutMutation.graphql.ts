/**
 * @generated SignedSource<<8e35fa3ef86891cec9c9056250475a77>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AuthContextProviderViewerLogoutMutation$variables = Record<PropertyKey, never>;
export type AuthContextProviderViewerLogoutMutation$data = {
  readonly deleteRefreshTokenCookie: {
    readonly clientMutationId: string | null | undefined;
    readonly deleted: boolean;
  } | null | undefined;
  readonly deleteTokenCookie: {
    readonly clientMutationId: string | null | undefined;
    readonly deleted: boolean;
  } | null | undefined;
};
export type AuthContextProviderViewerLogoutMutation = {
  response: AuthContextProviderViewerLogoutMutation$data;
  variables: AuthContextProviderViewerLogoutMutation$variables;
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
    "name": "AuthContextProviderViewerLogoutMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AuthContextProviderViewerLogoutMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7909a3f70e6d4770e82cc2ba43e676cd",
    "id": null,
    "metadata": {},
    "name": "AuthContextProviderViewerLogoutMutation",
    "operationKind": "mutation",
    "text": "mutation AuthContextProviderViewerLogoutMutation {\n  deleteTokenCookie(input: {clientMutationId: \"logout-delete-access\"}) {\n    deleted\n    clientMutationId\n  }\n  deleteRefreshTokenCookie(input: {clientMutationId: \"logout-delete-refresh\"}) {\n    deleted\n    clientMutationId\n  }\n}\n"
  }
};
})();

(node as any).hash = "5ac7c51260881108dc7ea6c70eb2ac39";

export default node;
