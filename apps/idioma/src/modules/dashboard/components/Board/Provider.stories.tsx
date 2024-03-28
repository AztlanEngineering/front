/* @aztlan/generator-front 2.4.2 */
import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
import { graphql } from 'react-relay'
import decorators from '../../../../decorators.js'
import { RawProvider as Component } from './Provider.js'
import { useBoardContext } from './hooks/index.js'

const meta: Meta<typeof Component> = {
  title     :'common/Board/Provider',
  component :Component,
  decorators:[
    /*
    decorators.getters.staticRouter({
      location:'/mysite.redlibre.mx/home',
      path    :'/:board/home',
    }), */
    decorators.components.Router,
  ],
}

export default meta

const FRAGMENT = graphql`
  fragment ProviderBoardFragment on Query
    @refetchable(queryName: "ProviderBoardRefetchQuery")
    @argumentDefinitions(id: { type: "ID!" }) {
    board(id: $id) {
      id
      name
      created
      updated
    }
  }
`

const relay = {
  query:graphql`
    query ProviderBoardQuery($id: ID!) {
      ...ProviderBoardFragment @arguments(id: $id)
    }
  `,
  getReferenceEntry:(data) => [
    'data',
    data,
  ],
  variables    :{ id: btoa('BoardNode:some-id') },
  mockResolvers:{
    BoardNode:(_root,
      // _args,
      // _context,
      // _info,
    ) => ({
      id     :btoa('BoardNode:some-id'),
      name   :'My Site',
      // url    :_root.args.url,
      created:'2021-05-25T00:00:00Z',
      updated:'2021-05-25T00:00:00Z',
    }),
  },
}

function Tester() {
  const board = useBoardContext()
  return (
    <pre style={{ whiteSpace: 'pre-wrap' }}>
      {JSON.stringify(
        board, null, 2,
      )}
    </pre>
  )
}

export const Base: StoryObj<typeof Component> = {
  args:{
    // @ts-ignore
    children:<Tester />,
    FRAGMENT,
  },
  parameters:{ relay },
}
