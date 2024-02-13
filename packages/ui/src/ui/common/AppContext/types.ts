import { GraphQLTaggedNode } from 'relay-runtime'

export interface RouteConfig {
  path                  :string | string[];
  component             :React.ComponentType<any>;
  exact?                :boolean;
  QUERY?                :GraphQLTaggedNode;
  prepareQueryVariables?:(params: { [key: string]: string }) => any;
  isPrivate?            :boolean;
}

export type RoutesConfig = RouteConfig[]
