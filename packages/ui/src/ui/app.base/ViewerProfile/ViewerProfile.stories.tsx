/* @aztlan/generator-front 0.4.3 */
import * as React from 'react'

import { StoryObj } from '@storybook/react'
import * as decorators from 'story-utils/decorators.tsx'
import { RawViewerProfile as ViewerProfile } from './ViewerProfile'

export default {
  title     :'base.profile/ViewerProfile',
  component :ViewerProfile,
  decorators:[
    // Needed for storyshots, not for storybook itself
    decorators.auth,
  ],
  argTypes:{ backgroundColor: { control: 'color' } },
}

const relayConfig = {
  query            :ViewerProfile.QUERY,
  getReferenceEntry:(data) => [
    'data',
    data,
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

export const Default: StoryObj = { parameters: { relay: relayConfig } }
