/**
 * @generated SignedSource<<1682494f6952e51b6451cec6be7bee92>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ApplicationQueryAuthenticationDebugFragment$data = {
  readonly email: string;
  readonly firstName: string;
  readonly id: string;
  readonly lastName: string;
  readonly " $fragmentType": "ApplicationQueryAuthenticationDebugFragment";
};
export type ApplicationQueryAuthenticationDebugFragment$key = {
  readonly " $data"?: ApplicationQueryAuthenticationDebugFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ApplicationQueryAuthenticationDebugFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ApplicationQueryAuthenticationDebugFragment",
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

(node as any).hash = "6646b9de0250110ceb96a0dce628db92";

export default node;
