/* @aztlan/generator-front 1.4.1 */
import * as React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { graphql } from 'react-relay'
import Template from '../layer/Main.js'

/*
const FRAGMENT = graphql`
  fragment NewBoardDashboardFragment on UserNode {
    firstName
    lastName
    created
    updated
    email
    profilePicture
  }
` */

function NewBoard() {
  return <h1>New Board</h1>
}

export default NewBoard
