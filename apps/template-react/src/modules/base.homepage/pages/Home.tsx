/* @aztlan/generator-front 0.4.0 */
import * as React from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useLazyLoadQuery } from 'react-relay'
import { defineMessages, useIntl, FormattedMessage } from 'react-intl'
import Template from '../../common/templates/Base'
import { QueryTester } from '../ui'
import { ThemeSwitcher, LocaleSwitcher } from '../../common/ui'

const messagesPrefix = 'base.homepage.pages.Home'

const m = defineMessages({
  title: {
    // id: `${messagesPrefix}.title`,
    defaultMessage: 'Homepage',
  },
  welcome: {
    description: 'Message to greet the user.',
    defaultMessage: 'Welcome to the site, {name}!!!',
  },
})

function Home() {
  const data = useLazyLoadQuery(
    QueryTester.QUERY,
    {},
    { fetchPolicy: 'store-or-network' },
  )

  const { formatMessage } = useIntl()
  return (
    <Template title={formatMessage(m.title)}>
      <ThemeSwitcher />
      <LocaleSwitcher />
      <React.Suspense fallback="Loading">
        <QueryTester data={data} />
      </React.Suspense>
      <p>{formatMessage(m.welcome, { name: 'you guys' })}</p>
    </Template>
  )
}

export default Home
