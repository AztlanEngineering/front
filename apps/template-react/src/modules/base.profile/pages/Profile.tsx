/* @aztlan/generator-front 0.4.0 */
import * as React from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useLazyLoadQuery } from 'react-relay'
import { defineMessages, useIntl, FormattedMessage } from 'react-intl'
import Template from '../../common/templates/Base'
import { ViewerProfile, ErrorBoundary } from '../ui'
import { ThemeSwitcher, LocaleSwitcher } from '../../common/ui'

/*
const m = defineMessages({
  title: {
    // id: `${messagesPrefix}.title`,
    defaultMessage: 'Homepage',
  },
  welcome: {
    description: 'Message to greet the user.',
    defaultMessage: 'Welcome to the site, {name}!!!',
  },
}) */

function Profile() {
  const data = useLazyLoadQuery(
    ViewerProfile.QUERY,
    {},
    { fetchPolicy: 'store-or-network' },
  )

  // const { formatMessage } = useIntl()
  return (
    <Template title="Profile">
      <ViewerProfile data={data} />
      {/*
      <React.Suspense fallback="Loading">
        <QueryTester data={data} />
      </React.Suspense>
        */}
      <p>Welcome to the profile page</p>
    </Template>
  )
}

export default function () {
  return (
    <ErrorBoundary fallback={({ e }) => <h1>{e}</h1>}>
      <Profile />
    </ErrorBoundary>
  )
}

/*
export default function () {
  return
    HELLO THERE !!
} */
