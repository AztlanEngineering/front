/**
 * @generated SignedSource<<6c1bcc1db2d7511d340eef0e73bdb598>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SelectHeaderQuery$variables = Record<PropertyKey, never>;
export type SelectHeaderQuery$data = {
  readonly viewer: {
    readonly organizationMemberships: {
      readonly " $fragmentSpreads": FragmentRefs<"SelectHeaderFragment">;
    };
  } | null | undefined;
};
export type SelectHeaderQuery = {
  response: SelectHeaderQuery$data;
  variables: SelectHeaderQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SelectHeaderQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UserNode",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "OrganizationMembershipNodeConnection",
            "kind": "LinkedField",
            "name": "organizationMemberships",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "SelectHeaderFragment"
              }
            ],
            "storageKey": null
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SelectHeaderQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UserNode",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "OrganizationMembershipNodeConnection",
            "kind": "LinkedField",
            "name": "organizationMemberships",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "OrganizationMembershipNodeEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "OrganizationMembershipNode",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v0/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "role",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "OrganizationNode",
                        "kind": "LinkedField",
                        "name": "organization",
                        "plural": false,
                        "selections": [
                          (v0/*: any*/),
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
            ],
            "storageKey": null
          },
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "405100bc013793dd458e64918af392da",
    "id": null,
    "metadata": {},
    "name": "SelectHeaderQuery",
    "operationKind": "query",
    "text": "query SelectHeaderQuery {\n  viewer {\n    organizationMemberships {\n      ...SelectHeaderFragment\n    }\n    id\n  }\n}\n\nfragment SelectHeaderFragment on OrganizationMembershipNodeConnection {\n  edges {\n    node {\n      id\n      role\n      organization {\n        id\n        name\n        url\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "821a9f43503a3d7ece41dbb65585a334";

export default node;
