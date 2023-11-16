import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils'

const environment = createMockEnvironment()

const getMock = (mockResolvers) => (overrideMockResolvers = null) => {
  environment.mock.queueOperationResolver((operation) => MockPayloadGenerator.generate(
    operation,
    overrideMockResolvers || mockResolvers,
  ))
}

const queue = environment.mock.queuePendingOperation

export { environment, getMock, queue }
