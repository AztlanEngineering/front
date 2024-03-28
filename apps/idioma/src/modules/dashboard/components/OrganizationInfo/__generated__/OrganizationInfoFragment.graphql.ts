/**
 * @generated SignedSource<<9280f5fc8246f3aa99920862cdd54bce>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OrganizationInfoFragment$data = {
  readonly created: any;
  readonly id: string;
  readonly name: string | null | undefined;
  readonly updated: any;
  readonly url: string | null | undefined;
  readonly " $fragmentType": "OrganizationInfoFragment";
};
export type OrganizationInfoFragment$key = {
  readonly " $data"?: OrganizationInfoFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"OrganizationInfoFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "OrganizationInfoFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "created",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "updated",
      "storageKey": null
    }
  ],
  "type": "OrganizationNode",
  "abstractKey": null
};

(node as any).hash = "acd0dd5fc5df5ececd0808b408519cf8";

export default node;
