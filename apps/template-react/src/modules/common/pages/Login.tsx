/* @aztlan/generator-front 0.4.0 */
import * as React from 'react'
import { useLocation } from 'react-router-dom'
import { useLazyLoadQuery } from 'react-relay'
import {
  defineMessages, useIntl,
} from 'react-intl'
import { LoginButton } from '@aztlan/ui'
import Template from '../templates/Base.js'

const m = defineMessages({
  title:{
    // id: `${messagesPrefix}.title`,
    description   :'Message to greet the user.',
    defaultMessage:'Login',
  },
  login:{
    description   :'Message to greet the user.',
    defaultMessage:'Please click on the button to log in.',
  },
})

const DEFAULT_REDIRECT = '/profile'

function Login() {
  const location = useLocation()

  let fullHostname
  if (typeof process === 'undefined') {
    const { protocol } = window.location // 'http:' or 'https:'
    const { hostname } = window.location // 'ash.779.mx'
    const { port } = window.location // '3002'

    fullHostname = `${protocol}//${hostname}${port ? `:${port}` : ''}`
  } else {
    fullHostname = 'http://test.com'
  }

  const resource = `${fullHostname}${
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
      <div className="container">
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
      </div>
    </Template>
  )
}

export default Login
