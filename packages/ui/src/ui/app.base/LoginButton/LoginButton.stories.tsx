/* @aztlan/generator-front 0.4.3 */
import {
  Meta, StoryObj,
} from '@storybook/react'
import { graphql } from 'react-relay'
import { QUERY_APPLICATION } from 'story-utils/queries.js'
import Component from './LoginButton.js'

const meta: Meta<typeof Component> = {
  title    :'base.authentication/LoginButton',
  component:Component,
}

export default meta

const FRAGMENT = graphql`
  fragment LoginButtonFragment on Query
    @argumentDefinitions(resource: { type: "String!" }) {
    oAuth2Links(resource: $resource) {
      google
    }
  }
`

const QUERY = graphql`
  query LoginButtonQuery($resource: String!) {
    ...LoginButtonFragment @arguments(resource: $resource)
  }
`

const relayConfig = {
  query            :QUERY,
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

export const Default: StoryObj<typeof Component> = {
  args      :{ FRAGMENT },
  parameters:{ relay: relayConfig },
}
