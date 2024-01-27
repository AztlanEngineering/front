import getEnvironment from '@aztlan/react-helpers/relay/client'

const relayEnvironment = getEnvironment(process.env.GRAPHQL_ENDPOINT)

export default relayEnvironment
