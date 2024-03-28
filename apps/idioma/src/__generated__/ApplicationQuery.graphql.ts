/**
 * @generated SignedSource<<c282b66286ffef93caa692a81f96d8ce>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ApplicationQuery$variables = {
  board?: string | null | undefined;
  loginRequestedResource: string;
};
export type ApplicationQuery$data = {
  readonly time: any | null | undefined;
  readonly viewer: {
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"ApplicationQueryViewerFragment">;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"LoginButtonFragment" | "LoginButtonViewerFragment" | "MainLayerBoardProviderFragment">;
};
export type ApplicationQuery = {
  response: ApplicationQuery$data;
  variables: ApplicationQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "board"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "loginRequestedResource"
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "board"
  }
],
v4 = [
  {
    "kind": "Variable",
    "name": "resource",
    "variableName": "loginRequestedResource"
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "time",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "created",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "updated",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
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
          (v2/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ApplicationQueryViewerFragment"
          }
        ],
        "storageKey": null
      },
      {
        "args": (v3/*: any*/),
        "kind": "FragmentSpread",
        "name": "MainLayerBoardProviderFragment"
      },
      {
        "args": (v4/*: any*/),
        "kind": "FragmentSpread",
        "name": "LoginButtonFragment"
      },
      (v5/*: any*/),
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
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
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
          (v2/*: any*/),
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
          (v6/*: any*/),
          (v7/*: any*/),
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
                      (v2/*: any*/),
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
                          (v2/*: any*/),
                          (v8/*: any*/)
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
        "args": (v3/*: any*/),
        "concreteType": "BoardNode",
        "kind": "LinkedField",
        "name": "board",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v8/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v4/*: any*/),
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
      (v5/*: any*/)
    ]
  },
  "params": {
    "cacheID": "c35f8a9a2ba6d03216aec057f6edc96f",
    "id": null,
    "metadata": {},
    "name": "ApplicationQuery",
    "operationKind": "query",
    "text": "query ApplicationQuery(\n  $loginRequestedResource: String!\n  $board: ID\n) {\n  viewer {\n    id\n    ...ApplicationQueryViewerFragment\n  }\n  ...MainLayerBoardProviderFragment_3dXtFF\n  ...LoginButtonFragment_2Xypug\n  time\n  ...LoginButtonViewerFragment\n}\n\nfragment ApplicationQueryAuthenticationDebugFragment on UserNode {\n  id\n  firstName\n  lastName\n  email\n}\n\nfragment ApplicationQueryViewerFragment on UserNode {\n  id\n  firstName\n  lastName\n  created\n  updated\n  email\n  profilePicture\n  isActive\n  isSuperuser\n  ...ProfileFragment\n  ...ProfileDashboardFragment\n  ...ApplicationQueryAuthenticationDebugFragment\n  boardMemberships {\n    ...HeaderGroupViewerBoardMembershipsFragment\n    ...HomeBoardMembershipsFragment\n    ...NavigationBoardMembershipsFragment\n  }\n}\n\nfragment HeaderGroupViewerBoardMembershipsFragment on BoardMembershipNodeConnection {\n  edges {\n    node {\n      id\n      role\n      board {\n        id\n        name\n      }\n    }\n  }\n}\n\nfragment HomeBoardMembershipsFragment on BoardMembershipNodeConnection {\n  edges {\n    node {\n      id\n      role\n      board {\n        id\n        name\n      }\n    }\n  }\n}\n\nfragment LoginButtonFragment_2Xypug on Query {\n  oAuth2Links(resource: $loginRequestedResource) {\n    google\n  }\n}\n\nfragment LoginButtonViewerFragment on Query {\n  viewer {\n    id\n  }\n}\n\nfragment MainLayerBoardProviderFragment_3dXtFF on Query {\n  board(id: $board) {\n    id\n    name\n    created\n    updated\n  }\n}\n\nfragment NavigationBoardMembershipsFragment on BoardMembershipNodeConnection {\n  edges {\n    node {\n      id\n      role\n      board {\n        id\n        name\n      }\n    }\n  }\n}\n\nfragment ProfileDashboardFragment on UserNode {\n  firstName\n  lastName\n  created\n  updated\n  email\n  profilePicture\n}\n\nfragment ProfileFragment on UserNode {\n  firstName\n  lastName\n  created\n  updated\n  email\n  profilePicture\n}\n"
  }
};
})();

(node as any).hash = "bebd3efc8e8eb6d42f4478a74523593f";

export default node;
