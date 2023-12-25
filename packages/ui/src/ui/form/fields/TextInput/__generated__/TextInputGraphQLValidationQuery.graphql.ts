/**
 * @generated SignedSource<<dc3efee4409bcb47da581d7397b9b74f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type TextInputGraphQLValidationQuery$variables = {
  value: string;
};
export type TextInputGraphQLValidationQuery$data = {
  readonly isUsernameAvailable: boolean | null | undefined;
};
export type TextInputGraphQLValidationQuery = {
  response: TextInputGraphQLValidationQuery$data;
  variables: TextInputGraphQLValidationQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "value"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "value",
        "variableName": "value"
      }
    ],
    "kind": "ScalarField",
    "name": "isUsernameAvailable",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TextInputGraphQLValidationQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TextInputGraphQLValidationQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "97b48adce44298c5551c8b99da6fc161",
    "id": null,
    "metadata": {},
    "name": "TextInputGraphQLValidationQuery",
    "operationKind": "query",
    "text": "query TextInputGraphQLValidationQuery(\n  $value: String!\n) {\n  isUsernameAvailable(value: $value)\n}\n"
  }
};
})();

(node as any).hash = "d1ccc55681ee0abe731e105f10c2834d";

export default node;
