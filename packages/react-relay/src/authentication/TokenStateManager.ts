import log from './log.js'

// @ts-ignore
const storage: Storage = typeof process === 'undefined' ? localStorage : {}
const keys = {
  loginState  :'isLoggedIn',
  accessToken :'accessTokenExpiresAt',
  refreshToken:'refreshTokenExpiresAt',
}

class TokenStateManager {
  static timeNow(): number {
    return Math.floor(Date.now() / 1000)
  }

  static saveTokenExpiration(
    key: string, expirationTimestamp: number,
  ): void {
    log(`[TokenStateManager] Saving ${key}: ${expirationTimestamp}`)
    storage.setItem(
      keys.loginState, '1',
    )
    storage.setItem(
      key, expirationTimestamp.toString(),
    )
  }

  static isTokenValid(key: string): boolean {
    const expirationTimestamp = parseInt(
      storage.getItem(key) ?? '0', 10,
    )
    const now = this.timeNow()
    return expirationTimestamp > now
  }

  static logout(): void {
    Object.values(keys).forEach((key) => storage.removeItem(key))
  }

  static hasValidAccessToken(): boolean {
    return this.isTokenValid(keys.accessToken)
  }

  static hasValidRefreshToken(): boolean {
    return this.isTokenValid(keys.refreshToken)
  }

  static shouldRefetchToken(): boolean {
    return this.hasValidRefreshToken() && !this.hasValidAccessToken()
  }

  static saveAccessTokenExpiration(expirationTimestamp: number): void {
    this.saveTokenExpiration(
      keys.accessToken, expirationTimestamp,
    )
  }

  static saveRefreshTokenExpiration(expirationTimestamp: number): void {
    this.saveTokenExpiration(
      keys.refreshToken, expirationTimestamp,
    )
  }

  static initialize(): void {
    const currentUrl = new URL(window.location.href)

    const jwtExpiresParam = currentUrl.searchParams.get('jwt_expires')
    const refreshExpiresParam = currentUrl.searchParams.get('refresh_expires')

    const jwtExpires = jwtExpiresParam
      ? Math.ceil(parseFloat(jwtExpiresParam))
      : null
    const refreshExpires = refreshExpiresParam
      ? Math.ceil(parseFloat(refreshExpiresParam))
      : null

    if (jwtExpires) {
      this.saveAccessTokenExpiration(jwtExpires)
      currentUrl.searchParams.delete('jwt_expires') // Remove jwt_expires from URL
      if (refreshExpires) {
        this.saveRefreshTokenExpiration(refreshExpires)
        currentUrl.searchParams.delete('refresh_expires') // Remove refresh_expires from URL
      }
      const newUrl = currentUrl.toString()
      window.history.replaceState(
        {}, document.title, newUrl,
      ) // Update URL without page reload
    }
  }
}

export default TokenStateManager
