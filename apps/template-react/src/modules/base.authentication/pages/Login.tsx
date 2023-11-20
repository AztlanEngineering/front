/* @aztlan/generator-front 0.4.0 */
import * as React from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useLazyLoadQuery } from 'react-relay'
import { defineMessages, useIntl, FormattedMessage } from 'react-intl'
import Template from '../../common/templates/Base'
import { LoginButton } from '../ui'
import { ThemeSwitcher, LocaleSwitcher } from '../../common/ui'

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

function Login() {
  const data = useLazyLoadQuery(
    LoginButton.QUERY,
    { resource: 'https://localhost:3002' },
    { fetchPolicy: 'store-or-network' },
  )

  const { formatMessage } = useIntl()
  return (
    <Template title={formatMessage(m.title)}>
      <React.Suspense fallback="Loading">
        <LoginButton data={data} />
      </React.Suspense>
      <p>{formatMessage(m.login)}</p>
    </Template>
  )
}

export default Login
