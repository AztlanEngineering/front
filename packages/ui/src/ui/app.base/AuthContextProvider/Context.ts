import * as React from 'react'
import { PreloadedQuery } from 'react-relay'
import { OperationType } from 'relay-runtime'

import { AuthContextProviderViewerQuery } from './__generated__/AuthContextProviderViewerQuery.graphql.js'
import { AuthContextProviderViewerLogoutMutation } from './__generated__/AuthContextProviderViewerLogoutMutation.graphql.js'

export interface AuthContextType<
  TQuery extends OperationType = AuthContextProviderViewerQuery,
  TMutation = AuthContextProviderViewerLogoutMutation,
> {
  logout                      :() => void;
  isLogoutInFlight            :boolean;
  loginPath                   :string;
  viewerQueryReference        :PreloadedQuery<TQuery> | null;
  loadViewerQuery             :(variables?: TQuery['variables'], options?: any) => void;
  disposeViewerQuery          :() => void;
  defaultRedirectionAfterLogin:string;
  QUERY_VIEWER                :PreloadedQuery<TQuery>;
  MUTATION_LOGOUT             :TMutation;
}

export default React.createContext<Partial<AuthContextType>>({})
