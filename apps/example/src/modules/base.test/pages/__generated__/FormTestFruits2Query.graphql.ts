/**
 * @generated SignedSource<<c13df7b453616463cc3ebbcd70d0f388>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type FormTestFruits2Query$variables = Record<PropertyKey, never>;
export type FormTestFruits2Query$data = {
  readonly fruits: ReadonlyArray<{
    readonly disabled: boolean;
    readonly label: string | null | undefined;
    readonly value: string | null | undefined;
  } | null | undefined> | null | undefined;
};
export type FormTestFruits2Query = {
  response: FormTestFruits2Query$data;
  variables: FormTestFruits2Query$variables;
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
    "name": "FormTestFruits2Query",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "FormTestFruits2Query",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "56e0161cfb6a3a899c0fc5629c77991c",
    "id": null,
    "metadata": {},
    "name": "FormTestFruits2Query",
    "operationKind": "query",
    "text": "query FormTestFruits2Query {\n  fruits {\n    value\n    label\n    disabled\n  }\n}\n"
  }
};
})();

(node as any).hash = "39a4570c366798f976096c3a483874a1";

export default node;
