/**
 * @generated SignedSource<<b37e5361f7044cb689447a30f6ba0ddd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OrganizationProviderQuery$variables = {
  url: string;
};
export type OrganizationProviderQuery$data = {
  readonly organization: {
    readonly id: string;
    readonly name: string | null | undefined;
    readonly url: string | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"NavigationDashboardDefaultItemsFragment" | "OrganizationInfoFragment">;
  } | null | undefined;
};
export type OrganizationProviderQuery = {
  response: OrganizationProviderQuery$data;
  variables: OrganizationProviderQuery$variables;
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
    "name": "OrganizationProviderQuery",
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
            "args": null,
            "kind": "FragmentSpread",
            "name": "OrganizationInfoFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "NavigationDashboardDefaultItemsFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "OrganizationProviderQuery",
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
    "cacheID": "c121f1f8c9561c1b47d7701f39a80c10",
    "id": null,
    "metadata": {},
    "name": "OrganizationProviderQuery",
    "operationKind": "query",
    "text": "query OrganizationProviderQuery(\n  $url: String!\n) {\n  organization(url: $url) {\n    id\n    name\n    url\n    ...OrganizationInfoFragment\n    ...NavigationDashboardDefaultItemsFragment\n  }\n}\n\nfragment NavigationDashboardDefaultItemsFragment on OrganizationNode {\n  id\n  name\n  url\n  xOwned {\n    edges {\n      node {\n        __typename\n        ... on CollectionNode {\n          id\n          name\n          url\n          xSlug\n          xIsDefault\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment OrganizationInfoFragment on OrganizationNode {\n  id\n  name\n  url\n  created\n  updated\n}\n"
  }
};
})();

(node as any).hash = "c412f843b5fcd74c37db34dcc9bddef6";

export default node;
