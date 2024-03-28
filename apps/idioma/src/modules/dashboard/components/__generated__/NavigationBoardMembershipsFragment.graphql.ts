/**
 * @generated SignedSource<<a259fd24db379d93482445deecca6561>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type ExpressionsBoardMembershipRoleChoices = "ADMIN" | "MEMBER" | "OWNER" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type NavigationBoardMembershipsFragment$data = {
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
  readonly " $fragmentType": "NavigationBoardMembershipsFragment";
};
export type NavigationBoardMembershipsFragment$key = {
  readonly " $data"?: NavigationBoardMembershipsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"NavigationBoardMembershipsFragment">;
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
  "name": "NavigationBoardMembershipsFragment",
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

(node as any).hash = "8c031f3c558c227203a5b84b9db38b86";

export default node;
