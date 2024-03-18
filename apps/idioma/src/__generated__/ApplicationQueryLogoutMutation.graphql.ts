/**
 * @generated SignedSource<<39c399c8d751fc8abc3de9a5792461e7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ApplicationQueryLogoutMutation$variables = Record<PropertyKey, never>;
export type ApplicationQueryLogoutMutation$data = {
  readonly deleteRefreshTokenCookie: {
    readonly clientMutationId: string | null | undefined;
    readonly deleted: boolean;
  } | null | undefined;
  readonly deleteTokenCookie: {
    readonly clientMutationId: string | null | undefined;
    readonly deleted: boolean;
  } | null | undefined;
};
export type ApplicationQueryLogoutMutation = {
  response: ApplicationQueryLogoutMutation$data;
  variables: ApplicationQueryLogoutMutation$variables;
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
    "name": "ApplicationQueryLogoutMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ApplicationQueryLogoutMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6c366162a3285f2783d2efd4172ad7ad",
    "id": null,
    "metadata": {},
    "name": "ApplicationQueryLogoutMutation",
    "operationKind": "mutation",
    "text": "mutation ApplicationQueryLogoutMutation {\n  deleteTokenCookie(input: {clientMutationId: \"logout-delete-access\"}) {\n    deleted\n    clientMutationId\n  }\n  deleteRefreshTokenCookie(input: {clientMutationId: \"logout-delete-refresh\"}) {\n    deleted\n    clientMutationId\n  }\n}\n"
  }
};
})();

(node as any).hash = "3d804e613b68edd4da37ac03b21bac30";

export default node;
