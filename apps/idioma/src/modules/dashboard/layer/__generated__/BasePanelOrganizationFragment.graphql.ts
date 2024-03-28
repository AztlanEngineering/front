/**
 * @generated SignedSource<<5a4cf2fa5495e18774dc0bbb94b61047>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type ActivitystreamsOrganizationMembershipRoleChoices = "ADMIN" | "FOLLOWER" | "MEMBER" | "MODERATOR" | "OWNER" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type BasePanelOrganizationFragment$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly id: string;
      readonly organization: {
        readonly id: string;
        readonly name: string | null | undefined;
        readonly url: string | null | undefined;
      };
      readonly role: ActivitystreamsOrganizationMembershipRoleChoices;
    } | null | undefined;
  } | null | undefined>;
  readonly " $fragmentType": "BasePanelOrganizationFragment";
};
export type BasePanelOrganizationFragment$key = {
  readonly " $data"?: BasePanelOrganizationFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"BasePanelOrganizationFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BasePanelOrganizationFragment",
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
  "type": "OrganizationMembershipNodeConnection",
  "abstractKey": null
};
})();

(node as any).hash = "55278ecb8cf6a17057682cb5574fd6a6";

export default node;
