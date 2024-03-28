/**
 * @generated SignedSource<<61bc4673e91bb988ec7ffe0686511218>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProviderOrganizationFragment$data = {
  readonly organization: {
    readonly created: any;
    readonly id: string;
    readonly name: string | null | undefined;
    readonly updated: any;
    readonly url: string | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "ProviderOrganizationFragment";
};
export type ProviderOrganizationFragment$key = {
  readonly " $data"?: ProviderOrganizationFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ProviderOrganizationFragment">;
};

import ProviderOrganizationRefetchQuery_graphql from './ProviderOrganizationRefetchQuery.graphql';

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "url"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [],
      "operation": ProviderOrganizationRefetchQuery_graphql
    }
  },
  "name": "ProviderOrganizationFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "url",
          "variableName": "url"
        }
      ],
      "concreteType": "OrganizationNode",
      "kind": "LinkedField",
      "name": "organization",
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
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "0e4e2e7fe4ee4cd2195722723853ae0d";

export default node;
