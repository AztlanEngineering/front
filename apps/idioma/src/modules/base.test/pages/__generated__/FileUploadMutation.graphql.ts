/**
 * @generated SignedSource<<edccb3ce3d7b397b675655ee088ece51>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type FileInput = {
  file: any;
};
export type FileUploadMutation$variables = {
  input: FileInput;
};
export type FileUploadMutation$data = {
  readonly upload3: {
    readonly success: boolean | null | undefined;
  } | null | undefined;
};
export type FileUploadMutation = {
  response: FileUploadMutation$data;
  variables: FileUploadMutation$variables;
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
    "concreteType": "Upload3Mutation",
    "kind": "LinkedField",
    "name": "upload3",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "success",
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
    "name": "FileUploadMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FileUploadMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "fcc482160ff639bd69c60374d25159a1",
    "id": null,
    "metadata": {},
    "name": "FileUploadMutation",
    "operationKind": "mutation",
    "text": "mutation FileUploadMutation(\n  $input: FileInput!\n) {\n  upload3(input: $input) {\n    success\n  }\n}\n"
  }
};
})();

(node as any).hash = "76d8c0c437880153bf67050242525241";

export default node;
