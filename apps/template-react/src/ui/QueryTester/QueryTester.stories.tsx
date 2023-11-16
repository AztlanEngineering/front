/* @aztlan/generator-front 0.2.0 */
import * as React from 'react'

import { QueryTester } from 'ui'

export default {
  title: 'QueryTester',
  component: QueryTester,
  subcomponents: {
    // Item:QueryTester.Item
  },
  decorators: [
    // storyfn => <div className="">{ storyfn() }</div>,
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export function Base() {
  return <QueryTester>Sample QueryTester</QueryTester>
}
