import * as React from 'react'
import { PreloadedQuery } from 'react-relay'
import { OperationType } from 'relay-runtime'

import { ProviderAuthenticationViewerQuery } from './__generated__/ProviderAuthenticationViewerQuery.graphql.js'
import { ProviderAuthenticationViewerLogoutMutation } from './__generated__/ProviderAuthenticationViewerLogoutMutation.graphql.js'

export interface AuthContextType<
  TQuery extends OperationType = ProviderAuthenticationViewerQuery,
  TMutation = ProviderAuthenticationViewerLogoutMutation,
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
