/**
 * @generated SignedSource<<c187caf69bc3e4761946186dcd0c6552>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type ActivitystreamsOrganizationMembershipRoleChoices = "ADMIN" | "FOLLOWER" | "MEMBER" | "MODERATOR" | "OWNER" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type HomeOrganizationMembershipsFragment$data = {
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
  readonly " $fragmentType": "HomeOrganizationMembershipsFragment";
};
export type HomeOrganizationMembershipsFragment$key = {
  readonly " $data"?: HomeOrganizationMembershipsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HomeOrganizationMembershipsFragment">;
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
  "name": "HomeOrganizationMembershipsFragment",
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

(node as any).hash = "ccd339a0e10bfa367d7aed99c11dbb44";

export default node;
