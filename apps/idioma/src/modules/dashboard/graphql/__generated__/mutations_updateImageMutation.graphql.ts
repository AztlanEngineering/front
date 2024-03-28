/**
 * @generated SignedSource<<e6c0702bd80bf5fb0d2d5fa552f755c2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateImageMutationInput = {
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
  type?: string | null | undefined;
  url?: string | null | undefined;
  xOwner?: string | null | undefined;
  xPriority?: number | null | undefined;
  xSlug?: string | null | undefined;
};
export type mutations_updateImageMutation$variables = {
  input: UpdateImageMutationInput;
};
export type mutations_updateImageMutation$data = {
  readonly updateImage: {
    readonly instance: {
      readonly content: string | null | undefined;
      readonly created: any;
      readonly id: string;
      readonly name: string | null | undefined;
      readonly published: any | null | undefined;
      readonly summary: string | null | undefined;
      readonly type: string;
      readonly updated: any;
      readonly url: string | null | undefined;
      readonly xSlug: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type mutations_updateImageMutation = {
  response: mutations_updateImageMutation$data;
  variables: mutations_updateImageMutation$variables;
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
    "concreteType": "UpdateImageMutationPayload",
    "kind": "LinkedField",
    "name": "updateImage",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ImageNode",
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
            "name": "type",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "xSlug",
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
            "name": "name",
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
            "name": "summary",
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
            "name": "published",
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
    "name": "mutations_updateImageMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "mutations_updateImageMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f030d70c4905a8a9d5025a36424f1438",
    "id": null,
    "metadata": {},
    "name": "mutations_updateImageMutation",
    "operationKind": "mutation",
    "text": "mutation mutations_updateImageMutation(\n  $input: UpdateImageMutationInput!\n) {\n  updateImage(input: $input) {\n    instance {\n      id\n      type\n      xSlug\n      url\n      name\n      content\n      summary\n      created\n      updated\n      published\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "884f9aedf057d876f936422ab98e6e1c";

export default node;
