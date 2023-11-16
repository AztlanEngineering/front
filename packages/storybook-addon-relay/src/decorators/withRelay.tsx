import * as React from "react";
import { makeDecorator } from "@storybook/preview-api";
import {
  RelayEnvironmentProvider,
  fetchQuery,
  useLazyLoadQuery
} from "react-relay";
import { GraphQLTaggedNode, OperationType } from "relay-runtime";
import { createMockEnvironment, MockPayloadGenerator } from "relay-test-utils";
import { InferMockResolvers } from "./types";

export interface WithRelayParameters<
  TQuery extends OperationType,
  TResolvers = {}
> {
  /**
   * A GraphQLTaggedNode returned by the relay's graphql`...` template literal.
   */
  query: GraphQLTaggedNode;

  /**
   * Optional. Variables to pass to the query.
   */
  variables?: TQuery["variables"];

  /**
   * Optional. Mock resolver object pass to the relay-test-utils MockPayloadGenerator.generate function.
   * If you use TResolver type argument, you can get type safety <3
   */
  mockResolvers?: InferMockResolvers<TResolvers>;

  /**
   * A function that returns an entry to be added to the story's args.
   *
   * @param queryResult Result of the useLazyLoadQuery hook with the query passed as parameter.
   * @returns An entry to be added to the story's args.
   */
  getReferenceEntry: (queryResult: TQuery["response"]) => [string, unknown];
}
const environment = createMockEnvironment();
export const withRelay = makeDecorator({
  name: "withRelay",
  parameterName: "relay",
  skipIfNoParametersOrOptions: true,
  wrapper: (getStory, context, { parameters }) => {
    const {
      query,
      variables = {},
      mockResolvers = {},
      getReferenceEntry
    } = parameters as WithRelayParameters<any>;

    console.log("!!!!!!<<>><<>>!!", parameters);

    const Renderer = () => {
      const queryResult = useLazyLoadQuery(query, variables);
      Object.assign(
        context.args,
        Object.fromEntries([getReferenceEntry(queryResult)])
      );

      console.log("RESULT", queryResult);
      return getStory(context) as any;
    };

    environment.mock.queueOperationResolver(operation => {
      return MockPayloadGenerator.generate(operation, mockResolvers);
    });

    environment.mock.queuePendingOperation(query, variables);

    return (
      <RelayEnvironmentProvider environment={environment}>
        <React.Suspense fallback="Loading...">
          <Renderer />
        </React.Suspense>
      </RelayEnvironmentProvider>
    );
  }
});
