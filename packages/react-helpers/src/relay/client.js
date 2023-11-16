"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const relay_runtime_1 = require("relay-runtime");
const es_1 = require("react-relay-network-modern/es");
/* eslint-disable no-underscore-dangle -- special case */
// @ts-ignore
const getRecords = () => window.__RELAY_PAYLOADS__;
/* eslint-enable no-underscore-dangle */
const queryRecords = getRecords();
const source = new relay_runtime_1.RecordSource(queryRecords);
const store = new relay_runtime_1.Store(source);
const getEnvironment = (url) => new relay_runtime_1.Environment({
    network: new es_1.RelayNetworkLayer([
        (0, es_1.urlMiddleware)({ url }),
        (0, es_1.perfMiddleware)(),
        (0, es_1.errorMiddleware)(),
    ]),
    store,
});
exports.default = {
    store,
    getEnvironment,
};
