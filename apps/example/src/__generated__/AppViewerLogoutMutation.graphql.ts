/**
 * @generated SignedSource<<02f03b43b20c619248c1c0149a8d2841>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AppViewerLogoutMutation$variables = Record<PropertyKey, never>;
export type AppViewerLogoutMutation$data = {
  readonly deleteRefreshTokenCookie: {
    readonly clientMutationId: string | null | undefined;
    readonly deleted: boolean;
  } | null | undefined;
  readonly deleteTokenCookie: {
    readonly clientMutationId: string | null | undefined;
    readonly deleted: boolean;
  } | null | undefined;
};
export type AppViewerLogoutMutation = {
  response: AppViewerLogoutMutation$data;
  variables: AppViewerLogoutMutation$variables;
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
    "name": "AppViewerLogoutMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppViewerLogoutMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f86486992e9da09283003e900d6949db",
    "id": null,
    "metadata": {},
    "name": "AppViewerLogoutMutation",
    "operationKind": "mutation",
    "text": "mutation AppViewerLogoutMutation {\n  deleteTokenCookie(input: {clientMutationId: \"logout-delete-access\"}) {\n    deleted\n    clientMutationId\n  }\n  deleteRefreshTokenCookie(input: {clientMutationId: \"logout-delete-refresh\"}) {\n    deleted\n    clientMutationId\n  }\n}\n"
  }
};
})();

(node as any).hash = "30493ef109e4ed08ea4fe876cb3b6e9a";

export default node;
