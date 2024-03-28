/**
 * @generated SignedSource<<a3b6b49a8d56c449059f55466e2b2770>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type HeaderGroupSearchBoardQuery$variables = {
  value: string;
};
export type HeaderGroupSearchBoardQuery$data = {
  readonly boards: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly name: string;
      } | null | undefined;
    } | null | undefined>;
  } | null | undefined;
};
export type HeaderGroupSearchBoardQuery = {
  response: HeaderGroupSearchBoardQuery$data;
  variables: HeaderGroupSearchBoardQuery$variables;
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
    "concreteType": "BoardNodeConnection",
    "kind": "LinkedField",
    "name": "boards",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "BoardNodeEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "BoardNode",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
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
    "name": "HeaderGroupSearchBoardQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "HeaderGroupSearchBoardQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ef74d6c924d5ab021459ac68de2d204f",
    "id": null,
    "metadata": {},
    "name": "HeaderGroupSearchBoardQuery",
    "operationKind": "query",
    "text": "query HeaderGroupSearchBoardQuery(\n  $value: String!\n) {\n  boards(search: $value) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "cab6287b30363ee3413b91443c5f2b01";

export default node;
