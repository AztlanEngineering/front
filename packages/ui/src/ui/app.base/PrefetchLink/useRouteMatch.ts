import { useMemo } from 'react'
import { matchPath } from 'react-router-dom'
import {
  RoutesConfig, RouteConfig,
} from '../../common/AppContext/types.js'

type Return = {
  match:ReturnType<typeof matchPath>;
  route:RouteConfig;
}

function useRouteMatch(
  routes: RoutesConfig, to: string,
): Return {
  const result = useMemo(
    () => {
      const route = routes?.find((routeConfig) => matchPath(
        to.toString(), {
          path :routeConfig.path,
          exact:routeConfig.exact,
        },
      ))
      const match = route
        ? matchPath(
          to.toString(), {
            path :route.path,
            exact:route.exact,
          },
        )
        : null
      return {
        match,
        route,
      }
    }, [
      routes,
      to,
    ],
  )

  return result
}

export default useRouteMatch
