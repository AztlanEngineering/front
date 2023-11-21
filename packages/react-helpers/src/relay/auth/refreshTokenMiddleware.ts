import fetchAccessToken from './fetchAccessToken.ts'
import TokenStateManager from './TokenStateManager.ts'

const defaults = {
  mutation: 'mutation { refreshToken { payload { exp }, refreshExpiresIn } }',
  extractor: (json: any) => ({
    accessTokenExpiration: json.data.refreshToken.payload.exp,
    refreshTokenExpiration: json.data.refreshToken.refreshExpiresIn,
  }),
}

interface IRefreshTokenMiddlewareOptions {
  mutation?: string;
  extractor?: (
    json: any
  ) => { accessTokenExpiration: number; refreshTokenExpiration: number };
}

const refreshTokenMiddleware = (
  options: IRefreshTokenMiddlewareOptions = {},
) => {
  let tokenRefreshInProgress: Promise<any> | null = null
  const mutation = options.mutation ?? defaults.mutation
  const extractor = options.extractor ?? defaults.extractor

  return (next: (req: Request) => Promise<any>) => async (req: Request) => {
    if (!TokenStateManager.shouldRefetchToken()) {
      return next(req)
    }

    if (!tokenRefreshInProgress) {
      tokenRefreshInProgress = fetchAccessToken(mutation, extractor)
        .then((content) => {
          tokenRefreshInProgress = null
          return content
        })
        .catch((err) => {
          tokenRefreshInProgress = null
          throw err
        })
    }

    await tokenRefreshInProgress
    return next(req)
  }
}

export default refreshTokenMiddleware
