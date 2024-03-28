/**
 * @generated SignedSource<<88115890a5b8cbb85ab4e5957ff49500>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type ActivitystreamsOrganizationMembershipRoleChoices = "ADMIN" | "FOLLOWER" | "MEMBER" | "MODERATOR" | "OWNER" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type ProviderDashboardOrganizationMembershipsFragment$data = {
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
  readonly " $fragmentType": "ProviderDashboardOrganizationMembershipsFragment";
};
export type ProviderDashboardOrganizationMembershipsFragment$key = {
  readonly " $data"?: ProviderDashboardOrganizationMembershipsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ProviderDashboardOrganizationMembershipsFragment">;
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
  "name": "ProviderDashboardOrganizationMembershipsFragment",
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

(node as any).hash = "b877bf5e96f565f43e9a426d0f3da90f";

export default node;
