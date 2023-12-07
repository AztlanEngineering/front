/**
 * @generated SignedSource<<9d907b33486b908e8b2bdb2e19298e73>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LoginButtonFragment$data = {
  readonly oAuth2Links: {
    readonly google: string;
  } | null | undefined;
  readonly " $fragmentType": "LoginButtonFragment";
};
export type LoginButtonFragment$key = {
  readonly " $data"?: LoginButtonFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"LoginButtonFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "resource"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "LoginButtonFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "resource",
          "variableName": "resource"
        }
      ],
      "concreteType": "OAuth2LinksProvider",
      "kind": "LinkedField",
      "name": "oAuth2Links",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "google",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "3b69a3ece0a3c43e8ac48b6c9e1c7b3c";

export default node;
