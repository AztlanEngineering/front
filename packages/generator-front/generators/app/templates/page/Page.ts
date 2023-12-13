/* <%= pkg %> <%= version %> */
import * as React from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import {
  Page,
  Title,
} from '@<%= npmOrg %>/ui'

const <%= name %> = () => {
  return (
    <Page id="page-<%= lower %>">
      <Page.Section
        id="head"
      >

        <Title
          heading="<%= name %>"
          headingAs="h1"
          subtitle="Subtitle"
        />
      </Page.Section>
      <Page.Section
        id="main"
      >
        Main Content
      </Page.Section>
    </Page>
  )
}

export default <%= name %>
