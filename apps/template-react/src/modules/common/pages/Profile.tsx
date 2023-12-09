/* @aztlan/generator-front 0.4.0 */
import * as React from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {
  useLazyLoadQuery,
  useQueryLoader,
  usePreloadedQuery,
} from 'react-relay'
import { defineMessages, useIntl, FormattedMessage } from 'react-intl'
import {
  ViewerProfile,
  useAuth,
  ThemeSwitcher,
  LocaleSwitcher,
} from '@aztlan/ui'
import Template from '../templates/Base'

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
  /*
  const data = useLazyLoadQuery(
    ViewerProfile.QUERY,
    {},
    { fetchPolicy: 'store-or-network' },
  ) */
  // window.isAuthReady

  // const { formatMessage } = useIntl()
  return (
    <Template title="Profile">
      <p className="span-8">Welcome to the profile page</p>
      <ViewerProfile />
      {/*
      <React.Suspense fallback="Loading">
        <QueryTester data={data} />
      </React.Suspense>
        */}
    </Template>
  )
}

export default Profile
