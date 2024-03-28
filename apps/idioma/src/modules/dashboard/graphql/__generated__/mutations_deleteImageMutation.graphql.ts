/**
 * @generated SignedSource<<3fe785d152487e7c49b5266e00994c36>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteImageMutationInput = {
  clientMutationId?: string | null | undefined;
  id: string;
};
export type mutations_deleteImageMutation$variables = {
  input: DeleteImageMutationInput;
};
export type mutations_deleteImageMutation$data = {
  readonly deleteImage: {
    readonly success: boolean;
  } | null | undefined;
};
export type mutations_deleteImageMutation = {
  response: mutations_deleteImageMutation$data;
  variables: mutations_deleteImageMutation$variables;
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
    "concreteType": "DeleteImageMutationPayload",
    "kind": "LinkedField",
    "name": "deleteImage",
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
    "name": "mutations_deleteImageMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "mutations_deleteImageMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "74d989c169e9ced2d4abb46d4cf9f618",
    "id": null,
    "metadata": {},
    "name": "mutations_deleteImageMutation",
    "operationKind": "mutation",
    "text": "mutation mutations_deleteImageMutation(\n  $input: DeleteImageMutationInput!\n) {\n  deleteImage(input: $input) {\n    success\n  }\n}\n"
  }
};
})();

(node as any).hash = "5c84fda6eedc6ed6558c1cf7879226e6";

export default node;
