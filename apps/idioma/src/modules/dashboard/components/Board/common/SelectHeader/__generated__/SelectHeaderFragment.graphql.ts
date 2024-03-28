/**
 * @generated SignedSource<<e4060082521ac982b2183bdf756b7558>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type ExpressionsBoardMembershipRoleChoices = "ADMIN" | "MEMBER" | "OWNER" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type SelectHeaderFragment$data = {
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
  readonly " $fragmentType": "SelectHeaderFragment";
};
export type SelectHeaderFragment$key = {
  readonly " $data"?: SelectHeaderFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SelectHeaderFragment">;
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
  "name": "SelectHeaderFragment",
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

(node as any).hash = "58192c126fec562998b9fdfd5d465c20";

export default node;
