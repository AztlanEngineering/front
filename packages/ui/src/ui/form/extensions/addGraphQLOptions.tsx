import * as React from 'react'
import {
  useLazyLoadQuery, GraphQLTaggedNode,
} from 'react-relay'
import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import * as formPropTypes from '../Field/propTypes.ts' // Your existing imports

const optionsPropType = PropTypes.arrayOf(formPropTypes.optionsShared.options)
const componentPropTypes = {
  ...formPropTypes.Wrapper,
  ...formPropTypes.optionsShared,
}

type InputOptions = InferProps<typeof optionsPropType>
type ComponentProps = InferProps<typeof componentPropTypes>

interface ExtensionOptions {
  variables?:{ [key: string]: any };
  fallback? :React.ReactNode;
}

/**
 * Function to create a higher-order component that fetches options for form fields
 * using GraphQL and Relay's useLazyLoadQuery hook. It enhances the component with
 * fetched data without direct error handling.
 * @param {GraphQLTaggedNode} QUERY - The GraphQL query used to fetch options.
 * @param {string} accessor - The key in the GraphQL response that contains the options.
 * @param {Options} options - Settings including custom error messages.
 * @returns {Function} - A React HOC returning an enhanced component
 */
const addGraphQLOptions = (
  QUERY: GraphQLTaggedNode,
  accessor: string,
  options: ExtensionOptions = {},
) => {
  const {
    variables, fallback = <span>Loading</span>,
  } = options

  return (WrappedComponent: React.ComponentType<InferProps<ComponentProps>>) => {
    function ExtendedComponent(props: ComponentProps) {
      const data = useLazyLoadQuery(
        QUERY, variables || {}, { fetchPolicy: 'store-and-network' },
      )

      return (
        <WrappedComponent
          {...props}
          options={data[accessor] as InputOptions}
        />
      )
    }
    return function SuspendedComponent(props: ComponentProps): React.ReactElement {
      return (
        <React.Suspense fallback={fallback}>
          <ExtendedComponent {...props} />
        </React.Suspense>
      )
    }
  }
}

export default addGraphQLOptions
