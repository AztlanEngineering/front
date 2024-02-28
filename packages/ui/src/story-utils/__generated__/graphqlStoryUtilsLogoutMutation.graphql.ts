/**
 * @generated SignedSource<<9fb3312161d5e2dc23028efa51e14fa5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type graphqlStoryUtilsLogoutMutation$variables = Record<PropertyKey, never>;
export type graphqlStoryUtilsLogoutMutation$data = {
  readonly deleteRefreshTokenCookie: {
    readonly clientMutationId: string | null | undefined;
    readonly deleted: boolean;
  } | null | undefined;
  readonly deleteTokenCookie: {
    readonly clientMutationId: string | null | undefined;
    readonly deleted: boolean;
  } | null | undefined;
};
export type graphqlStoryUtilsLogoutMutation = {
  response: graphqlStoryUtilsLogoutMutation$data;
  variables: graphqlStoryUtilsLogoutMutation$variables;
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
    "name": "graphqlStoryUtilsLogoutMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "graphqlStoryUtilsLogoutMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c44db6a6973c180c8a55ece30c766581",
    "id": null,
    "metadata": {},
    "name": "graphqlStoryUtilsLogoutMutation",
    "operationKind": "mutation",
    "text": "mutation graphqlStoryUtilsLogoutMutation {\n  deleteTokenCookie(input: {clientMutationId: \"logout-delete-access\"}) {\n    deleted\n    clientMutationId\n  }\n  deleteRefreshTokenCookie(input: {clientMutationId: \"logout-delete-refresh\"}) {\n    deleted\n    clientMutationId\n  }\n}\n"
  }
};
})();

(node as any).hash = "59c0ad1e43a22fd2e43f4a2dff68bcc4";

export default node;
