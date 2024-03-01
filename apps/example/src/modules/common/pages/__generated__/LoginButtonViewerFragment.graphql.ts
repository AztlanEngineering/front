/**
 * @generated SignedSource<<2e1f61ef662d828fce53f61fc982a290>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LoginButtonViewerFragment$data = {
  readonly viewer: {
    readonly id: string;
  } | null | undefined;
  readonly " $fragmentType": "LoginButtonViewerFragment";
};
export type LoginButtonViewerFragment$key = {
  readonly " $data"?: LoginButtonViewerFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"LoginButtonViewerFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LoginButtonViewerFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "UserNode",
      "kind": "LinkedField",
      "name": "viewer",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "00cf6a5a5cde7179728d077543da9dc4";

export default node;
