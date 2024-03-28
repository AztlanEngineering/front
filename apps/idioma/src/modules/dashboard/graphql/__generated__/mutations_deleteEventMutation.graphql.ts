/**
 * @generated SignedSource<<253fe449588b4fe14ed400a6ebac487d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteEventMutationInput = {
  clientMutationId?: string | null | undefined;
  id: string;
};
export type mutations_deleteEventMutation$variables = {
  input: DeleteEventMutationInput;
};
export type mutations_deleteEventMutation$data = {
  readonly deleteEvent: {
    readonly success: boolean;
  } | null | undefined;
};
export type mutations_deleteEventMutation = {
  response: mutations_deleteEventMutation$data;
  variables: mutations_deleteEventMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteEventMutationPayload",
    "kind": "LinkedField",
    "name": "deleteEvent",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "success",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "mutations_deleteEventMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "mutations_deleteEventMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "30f1a6c32a1534821903bed1d50c890d",
    "id": null,
    "metadata": {},
    "name": "mutations_deleteEventMutation",
    "operationKind": "mutation",
    "text": "mutation mutations_deleteEventMutation(\n  $input: DeleteEventMutationInput!\n) {\n  deleteEvent(input: $input) {\n    success\n  }\n}\n"
  }
};
})();

(node as any).hash = "6ffe8fea0d75344760fbf5cd6e8b35fe";

export default node;
