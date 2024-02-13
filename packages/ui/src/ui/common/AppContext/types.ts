import { GraphQLTaggedNode } from 'relay-runtime'

export interface RouteConfig {
  path                  :string | string[];
  component             :React.ComponentType<any>;
  exact?                :boolean;
  QUERY?                :GraphQLTaggedNode;
  prepareQueryVariables?:(params: { [key: string]: string }) => any;
  isPrivate?            :boolean;
  permissions?          :string[];
  groups?               :string[];
  test?                 :(viewer: any) => boolean;
}

export type RoutesConfig = RouteConfig[]
