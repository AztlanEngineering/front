/* @aztlan/generator-front 0.4.0 */
import * as React from 'react'
import { useLocation } from 'react-router-dom'
import { graphql } from 'react-relay'
import {
  defineMessages, useIntl,
} from 'react-intl'
import {
  useAuthenticationResource,
  LoginButton,
  useApplicationContext,
} from '@aztlan/ui'
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

const FRAGMENT = graphql`
  fragment LoginButtonFragment on Query
    @argumentDefinitions(resource: { type: "String!" }) {
    oAuth2Links(resource: $resource) {
      google
    }
  }
`

function Login() {
  const location = useLocation()

  const resource = useAuthenticationResource()

  const { data } = useApplicationContext()

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
        <LoginButton
          data={data}
          FRAGMENT={FRAGMENT}
        />

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
