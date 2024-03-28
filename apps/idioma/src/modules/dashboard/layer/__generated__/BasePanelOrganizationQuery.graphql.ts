/**
 * @generated SignedSource<<47227058d93093c68a3d3804381ff9eb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BasePanelOrganizationQuery$variables = {
  url: string;
};
export type BasePanelOrganizationQuery$data = {
  readonly organization: {
    readonly id: string;
    readonly name: string | null | undefined;
    readonly url: string | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"OrganizationInfoFragment">;
  } | null | undefined;
};
export type BasePanelOrganizationQuery = {
  response: BasePanelOrganizationQuery$data;
  variables: BasePanelOrganizationQuery$variables;
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
    "name": "BasePanelOrganizationQuery",
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
    "name": "BasePanelOrganizationQuery",
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
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3cabb92a9282296157642aa4a2d60e80",
    "id": null,
    "metadata": {},
    "name": "BasePanelOrganizationQuery",
    "operationKind": "query",
    "text": "query BasePanelOrganizationQuery(\n  $url: String!\n) {\n  organization(url: $url) {\n    id\n    name\n    url\n    ...OrganizationInfoFragment\n  }\n}\n\nfragment OrganizationInfoFragment on OrganizationNode {\n  id\n  name\n  url\n  created\n  updated\n}\n"
  }
};
})();

(node as any).hash = "a57f27d89ea6476d7895c96ceb95f20f";

export default node;
