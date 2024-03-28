/**
 * @generated SignedSource<<afe18ac125e6730490245b525ade4a70>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteCollectionMutationInput = {
  clientMutationId?: string | null | undefined;
  id: string;
};
export type mutations_deleteCollectionMutation$variables = {
  input: DeleteCollectionMutationInput;
};
export type mutations_deleteCollectionMutation$data = {
  readonly deleteCollection: {
    readonly success: boolean;
  } | null | undefined;
};
export type mutations_deleteCollectionMutation = {
  response: mutations_deleteCollectionMutation$data;
  variables: mutations_deleteCollectionMutation$variables;
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
    "concreteType": "DeleteCollectionMutationPayload",
    "kind": "LinkedField",
    "name": "deleteCollection",
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
    "name": "mutations_deleteCollectionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "mutations_deleteCollectionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "dc235e672cc61643961fc20511d2bdb3",
    "id": null,
    "metadata": {},
    "name": "mutations_deleteCollectionMutation",
    "operationKind": "mutation",
    "text": "mutation mutations_deleteCollectionMutation(\n  $input: DeleteCollectionMutationInput!\n) {\n  deleteCollection(input: $input) {\n    success\n  }\n}\n"
  }
};
})();

(node as any).hash = "1904a8825c1e1b103118ddf8a6b33fc6";

export default node;
