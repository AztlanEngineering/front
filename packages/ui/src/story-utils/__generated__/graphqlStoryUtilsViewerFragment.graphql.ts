/**
 * @generated SignedSource<<f82b992a1a514d26aa0499c0cd3b3a2d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type graphqlStoryUtilsViewerFragment$data = {
  readonly created: any;
  readonly email: string;
  readonly firstName: string;
  readonly id: string;
  readonly isActive: boolean;
  readonly isSuperuser: boolean;
  readonly lastName: string;
  readonly profilePicture: string | null | undefined;
  readonly updated: any;
  readonly " $fragmentType": "graphqlStoryUtilsViewerFragment";
};
export type graphqlStoryUtilsViewerFragment$key = {
  readonly " $data"?: graphqlStoryUtilsViewerFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"graphqlStoryUtilsViewerFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "graphqlStoryUtilsViewerFragment",
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
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "profilePicture",
      "storageKey": null
    },
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
      "name": "isSuperuser",
      "storageKey": null
    }
  ],
  "type": "UserNode",
  "abstractKey": null
};

(node as any).hash = "ee7d1ddfe1dea2eae766032dde3d366c";

export default node;
