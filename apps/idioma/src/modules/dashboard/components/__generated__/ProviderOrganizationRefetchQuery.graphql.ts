/**
 * @generated SignedSource<<19c9149138adf42fc1131ed4e8c9e90f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProviderOrganizationRefetchQuery$variables = {
  url?: string | null | undefined;
};
export type ProviderOrganizationRefetchQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"OrganizationProviderFragment">;
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
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
};
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
        "name": "OrganizationProviderFragment"
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
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
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
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ObjectInterfaceConnection",
            "kind": "LinkedField",
            "name": "xOwned",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ObjectInterfaceEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
                      },
                      (v2/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v3/*: any*/),
                          (v4/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "xSlug",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "xIsDefault",
                            "storageKey": null
                          }
                        ],
                        "type": "CollectionNode",
                        "abstractKey": null
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
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a55af7cb8c96d12aa95994997babad0f",
    "id": null,
    "metadata": {},
    "name": "ProviderOrganizationRefetchQuery",
    "operationKind": "query",
    "text": "query ProviderOrganizationRefetchQuery(\n  $url: String\n) {\n  ...OrganizationProviderFragment_4znjuT\n}\n\nfragment NavigationDashboardDefaultItemsFragment on OrganizationNode {\n  id\n  name\n  url\n  xOwned {\n    edges {\n      node {\n        __typename\n        ... on CollectionNode {\n          id\n          name\n          url\n          xSlug\n          xIsDefault\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment OrganizationInfoFragment on OrganizationNode {\n  id\n  name\n  url\n  created\n  updated\n}\n\nfragment OrganizationProviderFragment_4znjuT on Query {\n  organization(url: $url) {\n    id\n    name\n    url\n    created\n    updated\n    ...OrganizationInfoFragment\n    ...NavigationDashboardDefaultItemsFragment\n  }\n}\n"
  }
};
})();

(node as any).hash = "64d8197e1d792f03add5f36a24307483";

export default node;
