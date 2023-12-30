// REF [5.1]
import * as React from "react";
import { useEffect, useState, useCallback } from "react";
import PropTypes, { InferProps } from "prop-types"; // For PropTypes to TypeScript inference
import { GraphQLTaggedNode } from "react-relay";
import { useFormContext } from "react-hook-form";
import { fetchQuery } from "react-relay";
import { useRelayEnvironment } from "react-relay/hooks";
import { wrapperPropTypes, optionsPropTypes } from "../Field/propTypes.ts";
import * as messages from "../messages.ts";

const optionsPropType = PropTypes.arrayOf(optionsPropTypes.options);

type Options = InferProps<typeof optionsPropType>;

interface FetchOptions {
  fetchError?: string;
  responseError?: string;
  variables?: { [key: string]: any };
}

const useFetcher = (
  QUERY: GraphQLTaggedNode,
  accessor: string,
  options: FetchOptions = {}
) => {
  const {
    fetchError = messages.fetchError(),
    responseError = messages.responseError(),
    variables = {}
  } = options;

  const environment = useRelayEnvironment();
  const [data, setData] = useState<Options | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetchQuery(
        environment,
        QUERY,
        variables
      ).toPromise();
      const result = response[accessor];
      if (!result) {
        throw new Error(messages.responseError());
      }
      setData(result as Options);
      setError(null);
    } catch (err) {
      setError(err.message || messages.fetchError());
    } finally {
      setLoading(false);
    }
  }, [QUERY, accessor, environment, options.variables]);

  return { fetchData, data, loading, error };
};

const addGraphQLOptions = (
  QUERY: GraphQLTaggedNode,
  accessor: string,
  options: FetchOptions = {}
) => {
  return (
    WrappedComponent: React.ComponentType<InferProps<typeof optionsPropType>>
  ) => {
    function EnhancedComponent(props: InferProps<typeof optionsPropType>) {
      const formMethods = useFormContext();
      const { setError, clearErrors } = formMethods;
      const { fetchData, data, loading, error } = useFetcher(
        QUERY,
        accessor,
        options
      );

      useEffect(() => {
        fetchData();
        /* Ideally we would clear errors if formProps.shouldUnmount = true, but there is no way to read access this here. 
        return () => {
          clearErrors(props.name);
        };*/
      }, [fetchData, props.name, clearErrors, isSubmitted]);

      useEffect(() => {
        if (error) {
          setError(props.name, { type: "manual", message: error });
        }
      }, [error, setError, props.name]);

      return <WrappedComponent {...props} options={data} loading={loading} />;
    }
    return EnhancedComponent;
  };
};

export { addGraphQLOptions, useFetcher };
