/**
 * @generated SignedSource<<995b45abf0b2325443af6d2e1995ec3e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MainLayerBoardProviderFragment$data = {
  readonly board: {
    readonly created: any;
    readonly id: string;
    readonly name: string;
    readonly updated: any;
  } | null | undefined;
  readonly " $fragmentType": "MainLayerBoardProviderFragment";
};
export type MainLayerBoardProviderFragment$key = {
  readonly " $data"?: MainLayerBoardProviderFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"MainLayerBoardProviderFragment">;
};

import MainLayerBoardProviderRefetchQuery_graphql from './MainLayerBoardProviderRefetchQuery.graphql';

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "id"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [],
      "operation": MainLayerBoardProviderRefetchQuery_graphql
    }
  },
  "name": "MainLayerBoardProviderFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "id",
          "variableName": "id"
        }
      ],
      "concreteType": "BoardNode",
      "kind": "LinkedField",
      "name": "board",
      "plural": false,
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
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "941d8fd3c616c8bf0eb0e5e1632390d4";

export default node;
