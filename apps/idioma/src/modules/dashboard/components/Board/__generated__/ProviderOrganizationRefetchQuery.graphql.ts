/**
 * @generated SignedSource<<2bcadc4e4432bcbe800e2be50c722df6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProviderOrganizationRefetchQuery$variables = {
  url: string;
};
export type ProviderOrganizationRefetchQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ProviderOrganizationFragment">;
};
export type ProviderOrganizationRefetchQuery = {
  response: ProviderOrganizationRefetchQuery$data;
  variables: ProviderOrganizationRefetchQuery$variables;
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
    "name": "ProviderOrganizationRefetchQuery",
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
    "name": "ProviderOrganizationRefetchQuery",
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
    "cacheID": "03b04ff6dd6cf3a367acaff8a31a1584",
    "id": null,
    "metadata": {},
    "name": "ProviderOrganizationRefetchQuery",
    "operationKind": "query",
    "text": "query ProviderOrganizationRefetchQuery(\n  $url: String!\n) {\n  ...ProviderOrganizationFragment_4znjuT\n}\n\nfragment ProviderOrganizationFragment_4znjuT on Query {\n  organization(url: $url) {\n    id\n    name\n    url\n    created\n    updated\n  }\n}\n"
  }
};
})();

(node as any).hash = "0e4e2e7fe4ee4cd2195722723853ae0d";

export default node;
