/**
 * @generated SignedSource<<423d305502f2cfd8fbe68fa985e73251>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type HeaderGroupSearchOrganizationQuery$variables = {
  value: string;
};
export type HeaderGroupSearchOrganizationQuery$data = {
  readonly organizations: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly name: string | null | undefined;
        readonly url: string | null | undefined;
      } | null | undefined;
    } | null | undefined>;
  } | null | undefined;
};
export type HeaderGroupSearchOrganizationQuery = {
  response: HeaderGroupSearchOrganizationQuery$data;
  variables: HeaderGroupSearchOrganizationQuery$variables;
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
    "concreteType": "OrganizationNodeConnection",
    "kind": "LinkedField",
    "name": "organizations",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "OrganizationNodeEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "OrganizationNode",
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
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "url",
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
    "name": "HeaderGroupSearchOrganizationQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "HeaderGroupSearchOrganizationQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e40c45229964a5398693542c250ebabd",
    "id": null,
    "metadata": {},
    "name": "HeaderGroupSearchOrganizationQuery",
    "operationKind": "query",
    "text": "query HeaderGroupSearchOrganizationQuery(\n  $value: String!\n) {\n  organizations(search: $value) {\n    edges {\n      node {\n        id\n        name\n        url\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "2ca8ab52c3c90538862443e8740b1aa4";

export default node;
