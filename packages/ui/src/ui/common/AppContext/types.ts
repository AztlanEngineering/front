import { GraphQLTaggedNode } from 'relay-runtime'

export interface RouteConfig {
  path                  :string | string[];
  component             :React.ComponentType<any>;
  exact?                :boolean;
  QUERY?                :GraphQLTaggedNode;
  prepareQueryVariables?:(params: { [key: string]: string }) => any;
}

export type RoutesConfig = RouteConfig[]
