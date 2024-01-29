/* @aztlan/generator-front 0.4.3 */
import {
  Meta, StoryObj,
} from '@storybook/react'
import Component from './LoginButton.js'

const meta: Meta<typeof Component> = {
  title    :'base.authentication/LoginButton',
  component:Component,
}

export default meta

const relayConfig = {
  query            :Component.QUERY,
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

export const Default: StoryObj<typeof Component> = { parameters: { relay: relayConfig } }
