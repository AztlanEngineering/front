"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const relay_runtime_1 = require("relay-runtime");
// Alternative way to do SSR
// const collector = []
const store = new relay_runtime_1.Store(new relay_runtime_1.RecordSource());
// { collector }
const getEnvironment = (url) => new relay_runtime_1.Environment({
    network: relay_runtime_1.Network.create((params, variables) => {
        const request = fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: params.text,
                variables,
            }),
        }).then((response) => response.json());
        // collector.push(request)
        return request;
    }),
    store,
});
exports.default = {
    store,
    getEnvironment,
};
