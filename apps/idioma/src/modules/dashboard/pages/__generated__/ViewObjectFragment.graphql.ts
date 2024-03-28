/**
 * @generated SignedSource<<73ae021c68687c8d398cf230367108cf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ViewObjectFragment$data = {
  readonly object: {
    readonly " $fragmentSpreads": FragmentRefs<"ViewObjectEditFormFragment">;
  } | null | undefined;
  readonly " $fragmentType": "ViewObjectFragment";
};
export type ViewObjectFragment$key = {
  readonly " $data"?: ViewObjectFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ViewObjectFragment">;
};

import ObjectViewFragmentRefetchQuery_graphql from './ObjectViewFragmentRefetchQuery.graphql';

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
      "operation": ObjectViewFragmentRefetchQuery_graphql
    }
  },
  "name": "ViewObjectFragment",
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
      "concreteType": null,
      "kind": "LinkedField",
      "name": "object",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ViewObjectEditFormFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "2b731babd49949ffb08be541ec910820";

export default node;
