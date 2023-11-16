/* @aztlan/generator-front 0.0.22 */
import * as React from 'react'

import { Tester } from 'ui'

export default {
  title: 'Tester',
  component: Tester,
  subcomponents: {
    // Item:Tester.Item
  },
  decorators: [
    // storyfn => <div className="">{ storyfn() }</div>,
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export function Base() {
  return <Tester>Sample Tester</Tester>
}
