import * as React from 'react'

export interface AuthContextType {
  logout                      :() => void;
  isLogoutInFlight            :boolean;
  loginPath                   :string;
  defaultRedirectionAfterLogin:string;
  data                        :any;
  FRAGMENT_VIEWER             :any;
  MUTATION_LOGOUT             :any;
}

export default React.createContext<Partial<AuthContextType>>({})
