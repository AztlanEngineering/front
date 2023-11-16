/* @aztlan/generator-front 0.2.0 */
import * as React from 'react'

import { decorators } from '@aztlan/storybook-helpers'
import QueryTester from './QueryTester.tsx'

export default {
  title: 'common/QueryTester',
  component: QueryTester,
  subcomponents: {
    // Item:QueryTester.Item
  },
  decorators: [decorators.relay],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export function Base() {
  return <QueryTester>Sample QueryTester</QueryTester>
}
