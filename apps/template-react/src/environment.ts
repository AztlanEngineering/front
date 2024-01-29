import { getClientEnvironment } from '@aztlan/react-relay'

const relayEnvironment = getClientEnvironment(process.env.GRAPHQL_ENDPOINT)

export default relayEnvironment
