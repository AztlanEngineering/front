import {
  Environment, RecordSource, Store,
} from 'relay-runtime'

import {
  RelayNetworkLayer,
  urlMiddleware,
  loggerMiddleware,
  retryMiddleware,
  errorMiddleware,
  perfMiddleware,
} from 'react-relay-network-modern/es/index.js'

import { refreshTokenMiddleware } from './auth/index.ts'

/* eslint-disable no-underscore-dangle -- special case */
// @ts-ignore
const getRecords = () => window.__RELAY_PAYLOADS__
/* eslint-enable no-underscore-dangle */
const queryRecords = getRecords()

const source = new RecordSource(queryRecords)
const store = new Store(source)

const getEnvironment = (url) => new Environment({
  network:new RelayNetworkLayer([
    urlMiddleware({
      url,
      credentials:'include',
    }),
    // loggerMiddleware(),
    errorMiddleware(),
    perfMiddleware(),
    /*
    retryMiddleware({
      fetchTimeout: 15000,
      retryDelays: (attempt) => 2 ** (attempt + 4) * 100,
      // or simple array [3200, 6400, 12800, 25600, 51200, 102400, 204800, 409600],
      beforeRetry: ({
        forceRetry,
        abort,
        attempt,
        // delay,
        // lastError,
        // req,
      }) => {
        // if (attempt > 10) {
        console.log('[Retry Middleware] call#', attempt)
        const attemptLimit = 0
        if (attempt > attemptLimit) {
          try {
            abort()
          } catch (RRNLRetryMiddlewareError) {
            console.log(
              `[Retry Middleware] Aborted retries after ${attemptLimit}`,
            )
          }
        }
        window.forceRelayRetry = forceRetry
        // console.log(`call 'forceRelayRetry()' for immediately retry! Or wait ${delay} ' ms.`);
      },
      statusCodes: [500, 503, 504],
    }), */
    refreshTokenMiddleware(),
  ],
    // { noThrow: true },
  ),
  store,
})

export default getEnvironment
