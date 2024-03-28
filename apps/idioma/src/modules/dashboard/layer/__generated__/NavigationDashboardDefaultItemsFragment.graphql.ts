/**
 * @generated SignedSource<<f07c3cbd3a5a793f540b808b7fed713b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NavigationDashboardDefaultItemsFragment$data = {
  readonly id: string;
  readonly name: string | null | undefined;
  readonly url: string | null | undefined;
  readonly xOwned: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id?: string;
        readonly name?: string | null | undefined;
        readonly url?: string | null | undefined;
        readonly xIsDefault?: boolean;
        readonly xSlug?: string | null | undefined;
      } | null | undefined;
    } | null | undefined>;
  };
  readonly " $fragmentType": "NavigationDashboardDefaultItemsFragment";
};
export type NavigationDashboardDefaultItemsFragment$key = {
  readonly " $data"?: NavigationDashboardDefaultItemsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"NavigationDashboardDefaultItemsFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NavigationDashboardDefaultItemsFragment",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "ObjectInterfaceConnection",
      "kind": "LinkedField",
      "name": "xOwned",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ObjectInterfaceEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": null,
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "kind": "InlineFragment",
                  "selections": [
                    (v0/*: any*/),
                    (v1/*: any*/),
                    (v2/*: any*/),
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "xSlug",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "xIsDefault",
                      "storageKey": null
                    }
                  ],
                  "type": "CollectionNode",
                  "abstractKey": null
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
  "type": "OrganizationNode",
  "abstractKey": null
};
})();

(node as any).hash = "a225ddf6510078842ab35628f854940e";

export default node;
