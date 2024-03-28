/**
 * @generated SignedSource<<b584ce3f02204967cca30343b26af330>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ApplicationQuery$variables = {
  loginRequestedResource: string;
};
export type ApplicationQuery$data = {
  readonly time: any | null | undefined;
  readonly viewer: {
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"ApplicationQueryViewerFragment">;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"LoginButtonFragment" | "LoginButtonViewerFragment">;
};
export type ApplicationQuery = {
  response: ApplicationQuery$data;
  variables: ApplicationQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "loginRequestedResource"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "kind": "Variable",
    "name": "resource",
    "variableName": "loginRequestedResource"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "time",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ApplicationQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UserNode",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ApplicationQueryViewerFragment"
          }
        ],
        "storageKey": null
      },
      {
        "args": (v2/*: any*/),
        "kind": "FragmentSpread",
        "name": "LoginButtonFragment"
      },
      (v3/*: any*/),
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "LoginButtonViewerFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ApplicationQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UserNode",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "firstName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lastName",
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "profilePicture",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isActive",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isSuperuser",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "BoardMembershipNodeConnection",
            "kind": "LinkedField",
            "name": "boardMemberships",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "BoardMembershipNodeEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "BoardMembershipNode",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
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
                        "concreteType": "BoardNode",
                        "kind": "LinkedField",
                        "name": "board",
                        "plural": false,
                        "selections": [
                          (v1/*: any*/),
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
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "OAuth2LinksProvider",
        "kind": "LinkedField",
        "name": "oAuth2Links",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "google",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      (v3/*: any*/)
    ]
  },
  "params": {
    "cacheID": "3601e125a5ee6e3c8638c4e46eadabce",
    "id": null,
    "metadata": {},
    "name": "ApplicationQuery",
    "operationKind": "query",
    "text": "query ApplicationQuery(\n  $loginRequestedResource: String!\n) {\n  viewer {\n    id\n    ...ApplicationQueryViewerFragment\n  }\n  ...LoginButtonFragment_2Xypug\n  time\n  ...LoginButtonViewerFragment\n}\n\nfragment ApplicationQueryAuthenticationDebugFragment on UserNode {\n  id\n  firstName\n  lastName\n  email\n}\n\nfragment ApplicationQueryViewerFragment on UserNode {\n  id\n  firstName\n  lastName\n  created\n  updated\n  email\n  profilePicture\n  isActive\n  isSuperuser\n  ...ProfileFragment\n  ...ProfileDashboardFragment\n  ...ApplicationQueryAuthenticationDebugFragment\n  boardMemberships {\n    ...HomeBoardMembershipsFragment\n    ...NavigationBoardMembershipsFragment\n  }\n}\n\nfragment HomeBoardMembershipsFragment on BoardMembershipNodeConnection {\n  edges {\n    node {\n      id\n      role\n      board {\n        id\n        name\n      }\n    }\n  }\n}\n\nfragment LoginButtonFragment_2Xypug on Query {\n  oAuth2Links(resource: $loginRequestedResource) {\n    google\n  }\n}\n\nfragment LoginButtonViewerFragment on Query {\n  viewer {\n    id\n  }\n}\n\nfragment NavigationBoardMembershipsFragment on BoardMembershipNodeConnection {\n  edges {\n    node {\n      id\n      role\n      board {\n        id\n        name\n      }\n    }\n  }\n}\n\nfragment ProfileDashboardFragment on UserNode {\n  firstName\n  lastName\n  created\n  updated\n  email\n  profilePicture\n}\n\nfragment ProfileFragment on UserNode {\n  firstName\n  lastName\n  created\n  updated\n  email\n  profilePicture\n}\n"
  }
};
})();

(node as any).hash = "0df86bc72f1cbbe4752ecfd58412d9eb";

export default node;
