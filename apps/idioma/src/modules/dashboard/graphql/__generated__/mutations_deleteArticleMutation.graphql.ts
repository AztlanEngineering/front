/**
 * @generated SignedSource<<2917c1e40ac879610830a4b1a2ac5157>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteArticleMutationInput = {
  clientMutationId?: string | null | undefined;
  id: string;
};
export type mutations_deleteArticleMutation$variables = {
  input: DeleteArticleMutationInput;
};
export type mutations_deleteArticleMutation$data = {
  readonly deleteArticle: {
    readonly success: boolean;
  } | null | undefined;
};
export type mutations_deleteArticleMutation = {
  response: mutations_deleteArticleMutation$data;
  variables: mutations_deleteArticleMutation$variables;
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
    "concreteType": "DeleteArticleMutationPayload",
    "kind": "LinkedField",
    "name": "deleteArticle",
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
    "name": "mutations_deleteArticleMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "mutations_deleteArticleMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "21a4a113c494e921d969db5aa6885c89",
    "id": null,
    "metadata": {},
    "name": "mutations_deleteArticleMutation",
    "operationKind": "mutation",
    "text": "mutation mutations_deleteArticleMutation(\n  $input: DeleteArticleMutationInput!\n) {\n  deleteArticle(input: $input) {\n    success\n  }\n}\n"
  }
};
})();

(node as any).hash = "0f1cee5789a861ce00ab9b02072d095a";

export default node;
