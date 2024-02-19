/**
 * @generated SignedSource<<cfebdf7411f24ab99367c3405fa0160a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type FormTestValidationQuery$variables = {
  value: string;
};
export type FormTestValidationQuery$data = {
  readonly isUsernameAvailable: boolean | null | undefined;
};
export type FormTestValidationQuery = {
  response: FormTestValidationQuery$data;
  variables: FormTestValidationQuery$variables;
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
    "name": "FormTestValidationQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FormTestValidationQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5035487911fc77b3b0b03d17d299bde6",
    "id": null,
    "metadata": {},
    "name": "FormTestValidationQuery",
    "operationKind": "query",
    "text": "query FormTestValidationQuery(\n  $value: String!\n) {\n  isUsernameAvailable(value: $value)\n}\n"
  }
};
})();

(node as any).hash = "06b9a81e5d3c90b442059558073224d2";

export default node;
