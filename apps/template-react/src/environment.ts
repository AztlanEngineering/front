import getClientEnvironment from '@aztlan/react-relay/client'

const relayEnvironment = getClientEnvironment(process.env.GRAPHQL_ENDPOINT)

export default relayEnvironment
