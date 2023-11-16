/* @aztlan/generator-front 0.4.0 */
import * as React from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useLazyLoadQuery } from 'react-relay'
import Template from '../../common/templates/Base'
import { QueryTester } from '../ui'
import { ThemeSwitcher } from '../../common/ui'

function Home() {
  const data = useLazyLoadQuery(
    QueryTester.QUERY,
    {},
    { fetchPolicy: 'store-or-network' },
  )
  return (
    <Template title="Homepage">
      <ThemeSwitcher />
      <QueryTester data={data} />
      Welcome to the homepage of our site.
    </Template>
  )
}

export default Home
