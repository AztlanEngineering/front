/**
 * @generated SignedSource<<0ad36ed52a3c0a3ecabd7b8c766dcf56>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OrganizationProviderFragment$data = {
  readonly organization: {
    readonly created: any;
    readonly id: string;
    readonly name: string | null | undefined;
    readonly updated: any;
    readonly url: string | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"NavigationDashboardDefaultItemsFragment" | "OrganizationInfoFragment">;
  } | null | undefined;
  readonly " $fragmentType": "OrganizationProviderFragment";
};
export type OrganizationProviderFragment$key = {
  readonly " $data"?: OrganizationProviderFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"OrganizationProviderFragment">;
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
  "name": "OrganizationProviderFragment",
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
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "OrganizationInfoFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "NavigationDashboardDefaultItemsFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "64d8197e1d792f03add5f36a24307483";

export default node;
