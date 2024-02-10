/* @aztlan/generator-front 1.2.22 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
import { graphql } from 'react-relay'
import * as decorators from 'story-utils/decorators.js'
import { RawLoggedInDebugBar as Component } from './DebugBar.js'

const meta: Meta<typeof Component> = {
  title     :'app.base/AuthContextProvider/DebugBar',
  component :Component,
  decorators:[decorators.router],
  parameters:{ layout: 'fullscreen' },
}

const relayConfig = {
  query:graphql`
    query DebugBarTestViewerQuery {
      viewer {
        ...DebugBarViewerFragment
      }
    }
  `,
  getReferenceEntry:(data) => [
    'data',
    data,
  ],
  variables    :{},
  mockResolvers:{
    UserNode:() => ({
      firstName     :'Bogdan',
      lastName      :'Bogdanov',
      email         :'test@test.com',
      profilePicture:'https://images.pexels.com/photos/18046342/pexels-photo-18046342/free-photo-of-snow-covering-mountain-side-in-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    }),
  },
}

export const Default: StoryObj<typeof Component> = { parameters: { relay: relayConfig } }

export default meta

export const Base: StoryObj<typeof Component> = {
  args:{
    // children: "Sample DebugBar"
  },
  parameters:{ relay: relayConfig },
}

export const NoUser: StoryObj<typeof Component> = {
  args:{
    // children: "Sample DebugBar"
  },
  parameters:{
    relay:{
      ...relayConfig,
      mockResolvers:{ UserNode: () => null },
    },
  },
}
