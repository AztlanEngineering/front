/**
 * @generated SignedSource<<5d7e75e9665762a8c59f69e7478c2300>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type ExpressionsBoardMembershipRoleChoices = "ADMIN" | "MEMBER" | "OWNER" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type HomeBoardMembershipsFragment$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly board: {
        readonly id: string;
        readonly name: string;
      };
      readonly id: string;
      readonly role: ExpressionsBoardMembershipRoleChoices;
    } | null | undefined;
  } | null | undefined>;
  readonly " $fragmentType": "HomeBoardMembershipsFragment";
};
export type HomeBoardMembershipsFragment$key = {
  readonly " $data"?: HomeBoardMembershipsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HomeBoardMembershipsFragment">;
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
  "name": "HomeBoardMembershipsFragment",
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
              "concreteType": "BoardNode",
              "kind": "LinkedField",
              "name": "board",
              "plural": false,
              "selections": [
                (v0/*: any*/),
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
  "type": "BoardMembershipNodeConnection",
  "abstractKey": null
};
})();

(node as any).hash = "66a78a374d3888ed73f47a907fca9253";

export default node;
