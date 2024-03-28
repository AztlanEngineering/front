/**
 * @generated SignedSource<<4b9ac2d07a87fd8d7dcd34bac546fc1c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProviderDashboardOrganizationQuery$variables = {
  url: string;
};
export type ProviderDashboardOrganizationQuery$data = {
  readonly organization: {
    readonly id: string;
    readonly name: string | null | undefined;
    readonly url: string | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"NavigationDashboardDefaultItemsFragment" | "OrganizationInfoFragment">;
  } | null | undefined;
};
export type ProviderDashboardOrganizationQuery = {
  response: ProviderDashboardOrganizationQuery$data;
  variables: ProviderDashboardOrganizationQuery$variables;
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
    "name": "ProviderDashboardOrganizationQuery",
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
    "name": "ProviderDashboardOrganizationQuery",
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
    "cacheID": "0c79268a2c159ff6984c0c87aa8da0ef",
    "id": null,
    "metadata": {},
    "name": "ProviderDashboardOrganizationQuery",
    "operationKind": "query",
    "text": "query ProviderDashboardOrganizationQuery(\n  $url: String!\n) {\n  organization(url: $url) {\n    id\n    name\n    url\n    ...OrganizationInfoFragment\n    ...NavigationDashboardDefaultItemsFragment\n  }\n}\n\nfragment NavigationDashboardDefaultItemsFragment on OrganizationNode {\n  id\n  name\n  url\n  xOwned {\n    edges {\n      node {\n        __typename\n        ... on CollectionNode {\n          id\n          name\n          url\n          xSlug\n          xIsDefault\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment OrganizationInfoFragment on OrganizationNode {\n  id\n  name\n  url\n  created\n  updated\n}\n"
  }
};
})();

(node as any).hash = "b0e573dd91aff8c54a9b25c7c146a044";

export default node;
