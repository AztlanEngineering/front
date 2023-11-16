/**
 * @generated SignedSource<<8371248ec54f98c9e1e4120f2ecd0cf8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type QueryTesterFragment$data = {
  readonly time: any | null | undefined;
  readonly " $fragmentType": "QueryTesterFragment";
};
export type QueryTesterFragment$key = {
  readonly " $data"?: QueryTesterFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"QueryTesterFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "QueryTesterFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "time",
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "d1cdb0deb371cd84d96ec9c6169e1255";

export default node;
