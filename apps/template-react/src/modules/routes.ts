import commonRoutes from './common/routes.ts'
import baseHomepageRoutes from './base.homepage/routes.ts'
import baseAuthenticationRoutes from './base.authentication/routes.ts'
import baseProfileRoutes from './base.profile/routes.ts'

export default [
  ...commonRoutes,
  ...baseHomepageRoutes,
  ...baseAuthenticationRoutes,
  ...baseProfileRoutes,
]
