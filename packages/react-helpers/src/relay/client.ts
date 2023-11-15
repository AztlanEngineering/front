import { Environment, RecordSource, Store } from 'relay-runtime'

import {
  RelayNetworkLayer,
  urlMiddleware,
  // loggerMiddleware,
  errorMiddleware,
  perfMiddleware,
} from 'react-relay-network-modern/es'

/* eslint-disable no-underscore-dangle -- special case */
const getRecords = () => window.__RELAY_PAYLOADS__
/* eslint-enable no-underscore-dangle */
const queryRecords = getRecords()

export const source = new RecordSource(queryRecords)
export default new Store(source)

export const network = new RelayNetworkLayer([
  urlMiddleware({
    url:process.env.GRAPHQL_ENDPOINT,
  }),
  perfMiddleware(),
  errorMiddleware(),
])

export const getEnvironment = () => new Environment({
  network,
  store,
})
