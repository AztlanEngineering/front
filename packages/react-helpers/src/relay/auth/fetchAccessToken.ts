import log from './log.ts'
import TokenStateManager from './TokenStateManager.ts'

interface ITokenRefreshResponse {
  accessTokenExpiration: number;
  refreshTokenExpiration: number;
}

const fetchAccessToken = (
  mutation: string,
  extractor: (json: any) => ITokenRefreshResponse,
): Promise<ITokenRefreshResponse> => {
  log('[fetchAccessToken]', 'Refreshing token')

  return fetch(`${process.env.BACKEND_ENDPOINT}/graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mutation }),
    credentials: 'include',
  })
    .then((res) => res.json())
    .then((json) => {
      if (json.errors) {
        log('[fetchAccessToken]', 'Failed to refresh tokens', json.errors)
        TokenStateManager.logout()
        throw new Error('Failed to refresh tokens')
      } else {
        const { accessTokenExpiration, refreshTokenExpiration } = extractor(
          json,
        )
        TokenStateManager.saveAccessTokenExpiration(accessTokenExpiration)
        TokenStateManager.saveRefreshTokenExpiration(refreshTokenExpiration)
        return json
      }
    })
    .catch((err) => {
      log('[fetchAccessToken]', 'Error during token refresh:', err)
      throw err
    })
}

export default fetchAccessToken
