/**
 * @generated SignedSource<<a3bf825f867df3dd891e4406cf82a3e4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ViewObjectEditFormFragment$data = {
  readonly content: string | null | undefined;
  readonly created: any;
  readonly endTime?: any | null | undefined;
  readonly id: string;
  readonly items?: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly content: string | null | undefined;
        readonly created: any;
        readonly id: string;
        readonly name: string | null | undefined;
        readonly published: any | null | undefined;
        readonly summary: string | null | undefined;
        readonly updated: any;
        readonly url: string | null | undefined;
        readonly xSlug: string | null | undefined;
      } | null | undefined;
    } | null | undefined>;
  };
  readonly name: string | null | undefined;
  readonly published: any | null | undefined;
  readonly summary: string | null | undefined;
  readonly totalItems?: number;
  readonly type: string;
  readonly updated: any;
  readonly url: string | null | undefined;
  readonly xSlug: string | null | undefined;
  readonly " $fragmentType": "ViewObjectEditFormFragment";
};
export type ViewObjectEditFormFragment$key = {
  readonly " $data"?: ViewObjectEditFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ViewObjectEditFormFragment">;
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
  "name": "xSlug",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
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
  "name": "content",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "summary",
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
  "name": "published",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ViewObjectEditFormFragment",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "type",
      "storageKey": null
    },
    (v1/*: any*/),
    (v2/*: any*/),
    (v3/*: any*/),
    (v4/*: any*/),
    (v5/*: any*/),
    (v6/*: any*/),
    (v7/*: any*/),
    (v8/*: any*/),
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "endTime",
          "storageKey": null
        }
      ],
      "type": "EventNode",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalItems",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ObjectInterfaceConnection",
          "kind": "LinkedField",
          "name": "items",
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
                    (v0/*: any*/),
                    (v1/*: any*/),
                    (v2/*: any*/),
                    (v3/*: any*/),
                    (v4/*: any*/),
                    (v5/*: any*/),
                    (v6/*: any*/),
                    (v7/*: any*/),
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
      "type": "CollectionNode",
      "abstractKey": null
    }
  ],
  "type": "ObjectInterface",
  "abstractKey": "__isObjectInterface"
};
})();

(node as any).hash = "fdf70f24e675a2b1eb872a9c7099b623";

export default node;
