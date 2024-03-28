/**
 * @generated SignedSource<<06598d67eac810d02138531f9bbfac59>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProviderOrganizationQuery$variables = {
  url: string;
};
export type ProviderOrganizationQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ProviderOrganizationFragment">;
};
export type ProviderOrganizationQuery = {
  response: ProviderOrganizationQuery$data;
  variables: ProviderOrganizationQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "url"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "url",
    "variableName": "url"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ProviderOrganizationQuery",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "ProviderOrganizationFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ProviderOrganizationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "OrganizationNode",
        "kind": "LinkedField",
        "name": "organization",
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "created",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "updated",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "897f35f771339127f11f739ef1671d50",
    "id": null,
    "metadata": {},
    "name": "ProviderOrganizationQuery",
    "operationKind": "query",
    "text": "query ProviderOrganizationQuery(\n  $url: String!\n) {\n  ...ProviderOrganizationFragment_4znjuT\n}\n\nfragment ProviderOrganizationFragment_4znjuT on Query {\n  organization(url: $url) {\n    id\n    name\n    url\n    created\n    updated\n  }\n}\n"
  }
};
})();

(node as any).hash = "868ce655839fc17d35362b9da53864b2";

export default node;
