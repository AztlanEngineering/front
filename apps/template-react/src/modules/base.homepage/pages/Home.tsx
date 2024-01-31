/* @aztlan/generator-front 0.4.0 */
import * as React from 'react'
import { useLazyLoadQuery } from 'react-relay'
import {
  defineMessages, useIntl,
} from 'react-intl'
import { QueryTesterQuery } from '../ui/QueryTester/__generated__/QueryTesterQuery.graphql.ts'
import Template from '../../common/templates/Base.tsx'
import { QueryTester } from '../ui/index.ts'

const m = defineMessages({
  title:{
    // id: `${messagesPrefix}.title`,
    defaultMessage:'Homepage',
  },
  welcome:{
    description   :'Message to greet the user.',
    defaultMessage:'Welcome to the site, {name}!!!',
  },
})

function Home() {
  const data = useLazyLoadQuery(
    QueryTester.QUERY,
    {},
    { fetchPolicy: 'store-or-network' },
  ) as QueryTesterQuery['response']

  const { formatMessage } = useIntl()
  return (
    <Template title={formatMessage(m.title)}>
      <React.Suspense fallback="Loading">
        <QueryTester data={data} />
      </React.Suspense>
      <p className="container">
        {formatMessage(
          m.welcome, { name: 'pg6.4' },
        )}
      </p>
    </Template>
  )
}

export default Home
