/* @aztlan/generator-front 0.2.0 */
import * as React from 'react'
import { StoryObj } from '@storybook/react'

// import { decorators, relay } from '@aztlan/storybook-helpers'
import QueryTester from './QueryTester.tsx'

export default {
  title: 'common/QueryTester',
  component: QueryTester,
  subcomponents: {
    // Item:QueryTester.Item
  },
  // decorators: [decorators.relay],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
const relayConfig = {
  query: QueryTester.QUERY,
  getReferenceEntry: (data) => ['data', data],
  variables: {},
  mockResolvers: {
    time: (ctx) => '2023-11-16T17:10:13.357101',
  },
}

export const Default: StoryObj = {
  parameters: {
    relay: relayConfig,
  },
}
