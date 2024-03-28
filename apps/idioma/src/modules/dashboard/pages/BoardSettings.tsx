/* @aztlan/generator-front 1.4.1 */
import * as React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { graphql } from 'react-relay'
import Template from '../layer/Main.js'

/*
const FRAGMENT = graphql`
  fragment BoardSettingsDashboardFragment on UserNode {
    firstName
    lastName
    created
    updated
    email
    profilePicture
  }
` */

function BoardSettings() {
  return <h1>Board Settings</h1>
}

export default BoardSettings
