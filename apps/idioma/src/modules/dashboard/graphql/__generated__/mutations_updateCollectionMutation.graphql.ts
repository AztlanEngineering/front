/**
 * @generated SignedSource<<be6c47987594030932b76dda4fd3c104>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateCollectionMutationInput = {
  attachment?: string | null | undefined;
  attributedTo?: string | null | undefined;
  audience?: string | null | undefined;
  clientMutationId?: string | null | undefined;
  content?: string | null | undefined;
  context?: string | null | undefined;
  endTime?: any | null | undefined;
  icon?: string | null | undefined;
  id?: string | null | undefined;
  image?: string | null | undefined;
  location?: string | null | undefined;
  mediaType?: string | null | undefined;
  name?: string | null | undefined;
  published?: any | null | undefined;
  summary?: string | null | undefined;
  tag?: string | null | undefined;
  totalItems?: number | null | undefined;
  type?: string | null | undefined;
  url?: string | null | undefined;
  xAcceptsOnly?: string | null | undefined;
  xIsDefault?: boolean | null | undefined;
  xOwner?: string | null | undefined;
  xPriority?: number | null | undefined;
  xSlug?: string | null | undefined;
};
export type mutations_updateCollectionMutation$variables = {
  input: UpdateCollectionMutationInput;
};
export type mutations_updateCollectionMutation$data = {
  readonly updateCollection: {
    readonly instance: {
      readonly content: string | null | undefined;
      readonly created: any;
      readonly id: string;
      readonly mediaType: string | null | undefined;
      readonly name: string | null | undefined;
      readonly summary: string | null | undefined;
      readonly updated: any;
      readonly url: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type mutations_updateCollectionMutation = {
  response: mutations_updateCollectionMutation$data;
  variables: mutations_updateCollectionMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateCollectionMutationPayload",
    "kind": "LinkedField",
    "name": "updateCollection",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "CollectionNode",
        "kind": "LinkedField",
        "name": "instance",
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
            "name": "summary",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "content",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "mediaType",
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
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "mutations_updateCollectionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "mutations_updateCollectionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e8d1155e0eca377855e14019afb99afd",
    "id": null,
    "metadata": {},
    "name": "mutations_updateCollectionMutation",
    "operationKind": "mutation",
    "text": "mutation mutations_updateCollectionMutation(\n  $input: UpdateCollectionMutationInput!\n) {\n  updateCollection(input: $input) {\n    instance {\n      id\n      name\n      summary\n      content\n      mediaType\n      url\n      created\n      updated\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c3971a63072e5ef70b92b44b871c3b92";

export default node;
