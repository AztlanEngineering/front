/* @aztlan/generator-front 0.4.0 */
import * as React from 'react'
import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import { Link } from 'react-router-dom'
import {
  useAuth,
  ThemeSwitcher,
  LocaleSwitcher,
  AuthContextProviderDebugBar,
} from '@aztlan/ui'

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

function Wrapper({
  title, children, sidebar,
}) {
  const {
    logout, isLogoutInFlight,
  } = useAuth()
  return (
    <main
      className="grid"
      style={{ padding: '0 1em' }}
    >
      <AuthContextProviderDebugBar />
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
