/* @aztlan/generator-front 0.4.0 */
import * as React from 'react'
import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import { Link } from 'react-router-dom'
import { graphql } from 'react-relay'
import {
  useAuthenticationContext,
  ThemeSwitcher,
  LocaleSwitcher,
  AuthenticationDebugHeader,
  NavigationDebugHeader,
} from '@aztlan/ui'

import { FRAGMENT_AUTHENTICATION_DEBUG } from '../../../ApplicationQuery.js'

const routeMap = [
  {
    path :'',
    title:'Homepage',
  },
  {
    path :'maintenance',
    title:'Maintenance',
  },
  {
    path :'login',
    title:'Login',
  },
  {
    path :'profile',
    title:'Profile',
  },
  {
    path :'formtest',
    title:'Form Test',
  },
  {
    path :'fileupload',
    title:'File Upload',
  },
  {
    path :'404',
    title:'Test 404',
  },
]

function Navigation(): React.ReactElement {
  return (
    <ul className="">
      {routeMap.map(({
        path, title: routeTitle,
      }) => (
        <li key={path}>
          <Link to={path}>{routeTitle}</Link>
        </li>
      ))}
    </ul>
  )
}

const items = [
  {
    url  :'/',
    label:'Home',
  },
  {
    url  :'/maintenance',
    label:'Maintenance',
  },
  {
    url  :'/login',
    label:'Login',
  },
  {
    url  :'/profile',
    label:'Profile',
  },
  {
    url  :'/formtest',
    label:'Form Test',
  },
  {
    url  :'/fileupload',
    label:'File Upload',
  },
  {
    url  :'/404',
    label:'Test 404',
  },
]

function Wrapper({
  title, children, sidebar,
}) {
  const {
    logout, isLogoutInFlight,
  } = useAuthenticationContext()
  return (
    <main
      className="grid"
      style={{ padding: '0 1em' }}
    >
      <div className="container">
        <AuthenticationDebugHeader FRAGMENT={FRAGMENT_AUTHENTICATION_DEBUG} />
        <NavigationDebugHeader
          className="container"
          items={items}
        />
      </div>
      <div className="background near span-8 md-span-3 fit-content">
        <h1>{title}</h1>
        {sidebar}
        <Navigation />
        <ThemeSwitcher />
        <LocaleSwitcher />
        <button
          onClick={logout}
          disabled={isLogoutInFlight}
          type="button"
        >
          Logout
          {isLogoutInFlight && '...'}
        </button>
      </div>
      <div className="background near span-8 md-span-9 fit-content grid">
        {children}
      </div>
    </main>
  )
}

Wrapper.propTypes = {
  title   :PropTypes.node,
  children:PropTypes.node,
  sidebar :PropTypes.node,
}

function Base({
  title,
  wireframe,
  wireframeTitle,
  children,
}: InferProps<typeof Base.propTypes>): React.ReactElement {
  if (wireframe) {
    return (
      <Wrapper title={wireframeTitle || title}>
        <div style={{ minHeight: '300px' }}>WIREFRAME MODE</div>
      </Wrapper>
    )
  }
  return <Wrapper title={title}>{children}</Wrapper>
}

Base.propTypes = {
  title         :PropTypes.node,
  wireframe     :PropTypes.bool,
  wireframeTitle:PropTypes.node,
  children      :PropTypes.node,
}

export default Base
