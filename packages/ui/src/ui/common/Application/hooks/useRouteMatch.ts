import { useCallback } from 'react'
import { matchPath } from 'react-router-dom'
import {
  RoutesConfig, RouteConfig,
} from '../../common/Application/types.js'

type Return = {
  match:ReturnType<typeof matchPath>;
  route:RouteConfig;
}

function useRouteMatch(routes: RoutesConfig): (path: string) => Return | undefined {
  const routeMatch = useCallback(
    (path: string): Return | null => {
      const route = routes.find((r) => {
        const match = matchPath(
          path, {
            path :r.path,
            exact:r.exact,
          },
        )
        return Boolean(match)
      })

      if (route) {
        const match = matchPath(
          path, {
            path :route.path,
            exact:route.exact,
          },
        )
        return {
          route,
          match,
        }
      }
      return null
    },
    [routes],
  )

  return routeMatch
}

export default useRouteMatch
