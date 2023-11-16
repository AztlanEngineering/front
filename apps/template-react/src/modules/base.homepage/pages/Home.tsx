/* @aztlan/generator-front 0.4.0 */
import * as React from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Template from '../../common/templates/Base'
import { QueryTester } from '../ui'

function Home() {
  return (
    <Template title="Homepage">
      <QueryTester />
      Welcome to the homepage of our site.
    </Template>
  )
}

export default Home
