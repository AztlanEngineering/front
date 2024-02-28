/* @aztlan/generator-front 0.4.3 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
import * as decorators from 'story-utils/decorators.js'
import { QUERY_APPLICATION } from 'story-utils/queries.js'
import { graphql } from 'react-relay'
import { RawViewerProfile as Component } from './ViewerProfile.js'

const meta: Meta<typeof Component> = {
  title     :'base.profile/ViewerProfile',
  component :Component,
  decorators:[
    // Needed for storyshots, not for storybook itself
  ],
  // argTypes:{ backgroundColor: { control: 'color' } },
}

export default meta

const FRAGMENT = graphql`
  fragment ViewerProfileFragment on UserNode
    @refetchable(queryName: "ViewerProfileRefetchableFragment") {
    firstName
    lastName
    created
    updated
    email
    profilePicture
  }
`

const QUERY = graphql`
  query ViewerProfileQuery {
    viewer {
      ...ViewerProfileFragment
    }
  }
`

const relayConfig = {
  query            :QUERY,
  getReferenceEntry:(data) => [
    'data',
    data.viewer,
  ],
  variables    :{},
  mockResolvers:{
    UserNode:() => ({
      firstName     :'Bogdan',
      lastName      :'-',
      email         :'test@test.com',
      profilePicture:'https://images.pexels.com/photos/18046342/pexels-photo-18046342/free-photo-of-snow-covering-mountain-side-in-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    }),
  },
}

export const Default: StoryObj<typeof Component> = {
  args      :{ FRAGMENT },
  parameters:{ relay: relayConfig },
}
