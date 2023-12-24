/* @aztlan/generator-front 0.2.0 */
// import * as React from 'react'
import {
  Meta, StoryObj,
} from '@storybook/react'

// import * as decorators from "@aztlan/ui/dist/esm/story-utils/decorators.mjs";
import Component from './QueryTester.tsx'

export default {
  title    :'common/QueryTester',
  component:Component,
  // decorators: [decorators.app],
  argTypes :{ backgroundColor: { control: 'color' } },
} as Meta<typeof Component>

const relayConfig = {
  query            :Component.QUERY,
  getReferenceEntry:(data) => [
    'data',
    data,
  ],
  variables    :{},
  mockResolvers:{ time: (ctx) => '2023-11-16T17:10:13.357101' },
}

export const Default: StoryObj<typeof Component> = { parameters: { relay: relayConfig } }
