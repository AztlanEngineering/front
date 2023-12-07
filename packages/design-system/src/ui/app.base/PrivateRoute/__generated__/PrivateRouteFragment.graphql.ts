/**
 * @generated SignedSource<<8131cf9a733618ef78ad11cb01436fef>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PrivateRouteFragment$data = {
  readonly id: string;
  readonly isActive: boolean;
  readonly " $fragmentType": "PrivateRouteFragment";
};
export type PrivateRouteFragment$key = {
  readonly " $data"?: PrivateRouteFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PrivateRouteFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./PrivateRouteRfetchableFragment.graphql'),
      "identifierInfo": {
        "identifierField": "id",
        "identifierQueryVariableName": "id"
      }
    }
  },
  "name": "PrivateRouteFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isActive",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "UserNode",
  "abstractKey": null
};

(node as any).hash = "c126d8df9e93da5562f65f2df5dc26c3";

export default node;
