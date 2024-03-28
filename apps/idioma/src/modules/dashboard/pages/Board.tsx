/* @aztlan/generator-front 1.4.1 */
import * as React from 'react'
// import { useOrganizationContext } from '@ldmnet/ui'
import { Link } from 'react-router-dom'
import Template from '../layer/Main.js'

function Organization() {
  return (
    <>
      <h1>Panel Organization</h1>
      <p className="container">
        <h1>SELECTED</h1>
        <Link to="/panel">Panel hom</Link>
      </p>
    </>
  )
}

export default Organization
