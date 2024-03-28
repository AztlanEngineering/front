/**
 * @generated SignedSource<<978c929caab54df24f4ad57489705686>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateEventMutationInput = {
  attachment?: string | null | undefined;
  attributedTo?: string | null | undefined;
  audience?: string | null | undefined;
  clientMutationId?: string | null | undefined;
  content?: string | null | undefined;
  context?: string | null | undefined;
  endTime?: any | null | undefined;
  icon?: string | null | undefined;
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
export type mutations_createEventMutation$variables = {
  input: CreateEventMutationInput;
};
export type mutations_createEventMutation$data = {
  readonly createEvent: {
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
export type mutations_createEventMutation = {
  response: mutations_createEventMutation$data;
  variables: mutations_createEventMutation$variables;
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
    "concreteType": "CreateEventMutationPayload",
    "kind": "LinkedField",
    "name": "createEvent",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "EventNode",
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
    "name": "mutations_createEventMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "mutations_createEventMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "45e99dada124228ed2713b2c914392eb",
    "id": null,
    "metadata": {},
    "name": "mutations_createEventMutation",
    "operationKind": "mutation",
    "text": "mutation mutations_createEventMutation(\n  $input: CreateEventMutationInput!\n) {\n  createEvent(input: $input) {\n    instance {\n      id\n      type\n      xSlug\n      url\n      name\n      content\n      summary\n      created\n      updated\n      published\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "a2ccb866fc4add02e2ef4abaf84d2894";

export default node;
