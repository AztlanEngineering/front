/**
 * @generated SignedSource<<4fecc9e7b79dba00a9e1fe42b98e2084>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LoginButtonFragment$data = {
  readonly oAuth2Login: {
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
      "name": "oAuth2Login",
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

(node as any).hash = "3fd172f834382cf96d57c43ab5236827";

export default node;
