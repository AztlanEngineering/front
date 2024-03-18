/**
 * @generated SignedSource<<8187bd4124224c5d31f8487b39bb8368>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type FormTestColorsQuery$variables = Record<PropertyKey, never>;
export type FormTestColorsQuery$data = {
  readonly fruits: ReadonlyArray<{
    readonly disabled: boolean;
    readonly label: string | null | undefined;
    readonly value: string | null | undefined;
  } | null | undefined> | null | undefined;
};
export type FormTestColorsQuery = {
  response: FormTestColorsQuery$data;
  variables: FormTestColorsQuery$variables;
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
    "name": "FormTestColorsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "FormTestColorsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "06f752e617db35ecfc337a44c82f76ad",
    "id": null,
    "metadata": {},
    "name": "FormTestColorsQuery",
    "operationKind": "query",
    "text": "query FormTestColorsQuery {\n  fruits {\n    value\n    label\n    disabled\n  }\n}\n"
  }
};
})();

(node as any).hash = "6f38f418ebe1f95401bb83f4644ed48a";

export default node;
