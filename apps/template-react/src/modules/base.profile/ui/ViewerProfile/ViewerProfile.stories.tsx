/* @aztlan/generator-front 0.4.3 */
import * as React from 'react'

import { StoryObj } from '@storybook/react'
import ViewerProfile from './ViewerProfile'

export default {
  title: 'base.profile/ViewerProfile',
  component: ViewerProfile,
  subcomponents: {
    // Item:ViewerProfile.Item
  },
  decorators: [
    // storyfn => <div className="">{ storyfn() }</div>,
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const relayConfig = {
  query: ViewerProfile.QUERY,
  getReferenceEntry: (data) => ['data', data],
  variables: {},
  mockResolvers: {
    viewer: () => ({
      firstName: () => 'Bogdan',
      lastName: () => '-',
      email: () => 'test@test.com',
      profilePicture: () => 'https://images.pexels.com/photos/18046342/pexels-photo-18046342/free-photo-of-snow-covering-mountain-side-in-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    }),
  },
}

export const Default: StoryObj = {
  parameters: {
    relay: relayConfig,
  },
}
