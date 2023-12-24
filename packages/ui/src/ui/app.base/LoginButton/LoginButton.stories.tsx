/* @aztlan/generator-front 0.4.3 */
import * as React from 'react'

import { StoryObj } from '@storybook/react'
import LoginButton from './LoginButton'

export default {
  title    :'base.authentication/LoginButton',
  component:LoginButton,
  argTypes :{ backgroundColor: { control: 'color' } },
}

const relayConfig = {
  query            :LoginButton.QUERY,
  getReferenceEntry:(data) => [
    'data',
    data,
  ],
  variables    :{ resource: 'http://localhost.com' },
  mockResolvers:{
    Query:() => ({
      oAuth2Login:() => ({ google: 'http://link.com' }),
      google     :'http://link.com',
    }),
    String:() => 'test string',
  },
}

export const Default: StoryObj = { parameters: { relay: relayConfig } }
