/* @aztlan/generator-front 0.4.3 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
import * as decorators from 'story-utils/decorators.js'
import { RawViewerProfile as Component } from './ViewerProfile.js'

const meta: Meta<typeof Component> = {
  title     :'base.profile/ViewerProfile',
  component :Component,
  decorators:[
    // Needed for storyshots, not for storybook itself
    decorators.auth,
  ],
  //argTypes:{ backgroundColor: { control: 'color' } },
}

export default meta

const relayConfig = {
  query            :Component.QUERY,
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

export const Default: StoryObj<typeof Component> = { parameters: { relay: relayConfig } }
