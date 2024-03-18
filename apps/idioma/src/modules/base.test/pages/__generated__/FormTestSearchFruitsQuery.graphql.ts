/**
 * @generated SignedSource<<901fa417407fe675b2679287ae09f7cb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type FormTestSearchFruitsQuery$variables = {
  value: string;
};
export type FormTestSearchFruitsQuery$data = {
  readonly searchFruits: ReadonlyArray<{
    readonly disabled: boolean;
    readonly label: string | null | undefined;
    readonly value: string | null | undefined;
  } | null | undefined> | null | undefined;
};
export type FormTestSearchFruitsQuery = {
  response: FormTestSearchFruitsQuery$data;
  variables: FormTestSearchFruitsQuery$variables;
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
        "name": "search",
        "variableName": "value"
      }
    ],
    "concreteType": "FruitType",
    "kind": "LinkedField",
    "name": "searchFruits",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "value",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "label",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "disabled",
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
    "name": "FormTestSearchFruitsQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FormTestSearchFruitsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "20523d20613288a4a2b607f93458afeb",
    "id": null,
    "metadata": {},
    "name": "FormTestSearchFruitsQuery",
    "operationKind": "query",
    "text": "query FormTestSearchFruitsQuery(\n  $value: String!\n) {\n  searchFruits(search: $value) {\n    value\n    label\n    disabled\n  }\n}\n"
  }
};
})();

(node as any).hash = "6fdfe3627dd2d5cf8d9febb58e999002";

export default node;
