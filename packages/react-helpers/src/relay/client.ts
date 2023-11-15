import { Environment, RecordSource, Store } from 'relay-runtime'

import {
  RelayNetworkLayer,
  urlMiddleware,
  // loggerMiddleware,
  errorMiddleware,
  perfMiddleware,
} from 'react-relay-network-modern/es'

/* eslint-disable no-underscore-dangle -- special case */
// @ts-ignore
const getRecords = () => window.__RELAY_PAYLOADS__
/* eslint-enable no-underscore-dangle */
const queryRecords = getRecords()

const source = new RecordSource(queryRecords)
const store = new Store(source)

const getEnvironment = (url) => new Environment({
  network:new RelayNetworkLayer([
    urlMiddleware({ url }),
    perfMiddleware(),
    errorMiddleware(),
  ]),
  store,
})

export default {
  store,
  getEnvironment,
}
