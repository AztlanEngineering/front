/* @aztlan/generator-front 1.4.1 */
import * as React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { graphql } from 'react-relay'
import { ViewerProfile } from '@aztlan/ui'
import Template from '../layer/Main.js'

const FRAGMENT = graphql`
  fragment ProfileDashboardFragment on UserNode {
    firstName
    lastName
    created
    updated
    email
    profilePicture
  }
`

function Profile() {
  return (
    <>
      <h1>Panel profile</h1>
      <ViewerProfile FRAGMENT={FRAGMENT} />
    </>
  )
}

export default Profile
