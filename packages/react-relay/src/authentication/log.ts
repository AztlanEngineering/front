/* eslint-disable no-console */
const isDebug = process.env.VERBOSE === 'TRUE'

const debugLog = isDebug ? (...args) => console.log(...args) : () => null

export default debugLog
