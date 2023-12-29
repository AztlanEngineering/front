/**
 * @generated SignedSource<<c4d34fe1dd3aff44bb907931844c9f43>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type SelectFruitOptionsQuery$variables = Record<PropertyKey, never>;
export type SelectFruitOptionsQuery$data = {
  readonly fruits: ReadonlyArray<{
    readonly disabled: boolean;
    readonly label: string | null | undefined;
    readonly value: string | null | undefined;
  } | null | undefined> | null | undefined;
};
export type SelectFruitOptionsQuery = {
  response: SelectFruitOptionsQuery$data;
  variables: SelectFruitOptionsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "FruitType",
    "kind": "LinkedField",
    "name": "fruits",
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SelectFruitOptionsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SelectFruitOptionsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "beba7be4b7b03339c17082d980939fcc",
    "id": null,
    "metadata": {},
    "name": "SelectFruitOptionsQuery",
    "operationKind": "query",
    "text": "query SelectFruitOptionsQuery {\n  fruits {\n    value\n    label\n    disabled\n  }\n}\n"
  }
};
})();

(node as any).hash = "6deab32cec1d929243f3f017184e66b8";

export default node;
