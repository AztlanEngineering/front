/* @aztlan/generator-front 0.4.0 */
import * as React from 'react'
import { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useLazyLoadQuery } from 'react-relay'
import { defineMessages, useIntl, FormattedMessage } from 'react-intl'
import { LoginButton } from '@aztlan/ui'
import Template from '../../common/templates/Base'

const m = defineMessages({
  title: {
    // id: `${messagesPrefix}.title`,
    description: 'Message to greet the user.',
    defaultMessage: 'Login',
  },
  login: {
    description: 'Message to greet the user.',
    defaultMessage: 'Please click on the button to log in.',
  },
})

const DEFAULT_REDIRECT = '/profile2'

function Login() {
  const location = useLocation()

  let hostname
  if (typeof process === 'undefined') {
    const { protocol } = window.location // 'http:' or 'https:'
    const { hostname } = window.location // 'ash.779.mx'
    const { port } = window.location // '3002'

    hostname = `${protocol}//${hostname}${port ? `:${port}` : ''}`
  } else {
    hostname = 'http://test.com'
  }

  const resource = `http://ash.779.mx:3002${
    location.state?.from ? location.state.from : DEFAULT_REDIRECT
  }`

  const data = useLazyLoadQuery(
    LoginButton.QUERY,
    { resource },
    { fetchPolicy: 'store-or-network' },
  )

  const { formatMessage } = useIntl()
  return (
    <Template title={formatMessage(m.title)}>
      {location.state?.reason && (
      <p>
        {' '}
        {location.state.reason}
      </p>
      )}
      <React.Suspense fallback="Loading">
        <LoginButton data={data} />
      </React.Suspense>
      <p>{formatMessage(m.login)}</p>
      <p>
        After login you will be redirected to
        {resource}
      </p>
    </Template>
  )
}

export default Login
