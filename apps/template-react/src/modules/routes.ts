import commonRoutes from './common/routes.ts'
import baseHomepageRoutes from './base.homepage/routes.ts'
import baseTestRoutes from './base.test/routes.ts'

export default [
  ...baseHomepageRoutes,
  ...baseTestRoutes,
  ...commonRoutes,
]
