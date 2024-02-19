/**
 * @generated SignedSource<<8c02c13ca2c378327073fd7d1b5adf6c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type FormTestFruitsQuery$variables = Record<PropertyKey, never>;
export type FormTestFruitsQuery$data = {
  readonly fruits: ReadonlyArray<{
    readonly disabled: boolean;
    readonly label: string | null | undefined;
    readonly value: string | null | undefined;
  } | null | undefined> | null | undefined;
};
export type FormTestFruitsQuery = {
  response: FormTestFruitsQuery$data;
  variables: FormTestFruitsQuery$variables;
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
    "name": "FormTestFruitsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "FormTestFruitsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "c9ed14cca3775fb13d636859a5ed15c6",
    "id": null,
    "metadata": {},
    "name": "FormTestFruitsQuery",
    "operationKind": "query",
    "text": "query FormTestFruitsQuery {\n  fruits {\n    value\n    label\n    disabled\n  }\n}\n"
  }
};
})();

(node as any).hash = "b96789f1cee7154b38e51c943051b807";

export default node;
