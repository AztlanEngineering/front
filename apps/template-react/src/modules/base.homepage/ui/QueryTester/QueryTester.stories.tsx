/* @aztlan/generator-front 0.2.0 */
import * as React from 'react'
import { StoryObj } from '@storybook/react'

// import * as decorators from "@aztlan/ui/dist/esm/story-utils/decorators.mjs";
import QueryTester from './QueryTester'

export default {
  title        :'common/QueryTester',
  component    :QueryTester,
  subcomponents:{
    // Item:QueryTester.Item
  },
  // decorators: [decorators.app],
  argTypes:{ backgroundColor: { control: 'color' } },
}
const relayConfig = {
  query            :QueryTester.QUERY,
  getReferenceEntry:(data) => [
    'data',
    data,
  ],
  variables    :{},
  mockResolvers:{ time: (ctx) => '2023-11-16T17:10:13.357101' },
}

export const Default: StoryObj = { parameters: { relay: relayConfig } }
