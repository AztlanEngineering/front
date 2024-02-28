/**
 * @generated SignedSource<<99d6eef8a20d15f57a670fccbb0dc2b1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BaseAuthenticationDebugFragment$data = {
  readonly email: string;
  readonly firstName: string;
  readonly id: string;
  readonly lastName: string;
  readonly " $fragmentType": "BaseAuthenticationDebugFragment";
};
export type BaseAuthenticationDebugFragment$key = {
  readonly " $data"?: BaseAuthenticationDebugFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"BaseAuthenticationDebugFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BaseAuthenticationDebugFragment",
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
      "name": "firstName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "lastName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    }
  ],
  "type": "UserNode",
  "abstractKey": null
};

(node as any).hash = "095ae2e49923e87a7c0fda28ca0c544e";

export default node;
