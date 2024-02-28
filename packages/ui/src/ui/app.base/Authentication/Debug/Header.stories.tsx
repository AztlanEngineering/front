/* @aztlan/generator-front 1.2.22 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
import { graphql } from 'react-relay'
import * as decorators from 'story-utils/decorators.js'
import { RawLoggedInHeader as Component } from './Header.js'

const meta: Meta<typeof Component> = {
  title     :'debug/AuthContextProviderDebugBar',
  component :Component,
  decorators:[decorators.router],
  parameters:{ layout: 'fullscreen' },
}

const relayConfig = {
  query:graphql`
    query HeaderViewerTestQuery {
      viewer {
        ...HeaderViewerFragment
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
const FRAGMENT = graphql`
  fragment HeaderViewerFragment on UserNode
    @refetchable(queryName: "HeaderViewerRefetchQuery") {
    firstName
    lastName
    created
    updated
    email
    profilePicture
  }
`

export const Default: StoryObj<typeof Component> = { parameters: { relay: relayConfig } }

export default meta

export const Base: StoryObj<typeof Component> = {
  args      :{ FRAGMENT },
  parameters:{ relay: relayConfig },
}

export const NoUser: StoryObj<typeof Component> = {
  args      :{ ...Base.args },
  parameters:{
    relay:{
      ...relayConfig,
      mockResolvers:{ UserNode: () => null },
    },
  },
}
