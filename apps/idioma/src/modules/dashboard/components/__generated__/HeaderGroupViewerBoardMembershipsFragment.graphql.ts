/**
 * @generated SignedSource<<b04fa54eeb67359562f28ff7215034e5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type ExpressionsBoardMembershipRoleChoices = "ADMIN" | "MEMBER" | "OWNER" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type HeaderGroupViewerBoardMembershipsFragment$data = {
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
  readonly " $fragmentType": "HeaderGroupViewerBoardMembershipsFragment";
};
export type HeaderGroupViewerBoardMembershipsFragment$key = {
  readonly " $data"?: HeaderGroupViewerBoardMembershipsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HeaderGroupViewerBoardMembershipsFragment">;
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
  "name": "HeaderGroupViewerBoardMembershipsFragment",
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

(node as any).hash = "d09e0f915d4c780d53fcfc7e74d40ca4";

export default node;
