import React from 'react'
import { RelayEnvironmentProvider as BaseRelayEnvironmentProvider } from 'react-relay/hooks'

import { createMockEnvironment } from 'relay-test-utils'

const environment = createMockEnvironment()

function relay(storyFn) {
  // return storyfn()
  return (
    <BaseRelayEnvironmentProvider
      environment={environment}
      // history={history}
    >
      {storyFn()}
    </BaseRelayEnvironmentProvider>
  )
}

export default relay
