import fetchAccessToken from './fetchAccessToken.js'
import TokenStateManager from './TokenStateManager.js'

const defaults = {
  mutation :'mutation { refreshToken(input:{clientMutationId:"das"}){payload refreshExpiresIn}}',
  extractor:(json: any) => ({
    accessTokenExpiration :json.data.refreshToken.payload.exp,
    refreshTokenExpiration:json.data.refreshToken.refreshExpiresIn,
  }),
}

interface IRefreshTokenMiddlewareOptions {
  mutation? :string;
  url?      :string;
  extractor?: (
    json: any
  ) => { accessTokenExpiration: number; refreshTokenExpiration: number };
}

const refreshTokenMiddleware = (options: IRefreshTokenMiddlewareOptions = {}) => {
  let tokenRefreshInProgress: Promise<any> | null = null
  const mutation = options.mutation ?? defaults.mutation
  const extractor = options.extractor ?? defaults.extractor
  const url = options.url ?? process.env.GRAPHQL_ENDPOINT

  return (next: (req: Request) => Promise<any>) => async (req: Request) => {
    if (!TokenStateManager.shouldRefetchToken()) {
      return next(req)
    }

    if (!tokenRefreshInProgress) {
      tokenRefreshInProgress = fetchAccessToken(
        mutation, url, extractor,
      )
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
