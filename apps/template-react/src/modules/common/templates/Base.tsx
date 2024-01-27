/* @aztlan/generator-front 0.4.0 */
import * as React from 'react'
import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import { Link } from 'react-router-dom'
import {
  useAuth, ThemeSwitcher, LocaleSwitcher,
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
    <ul className="inline">
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

function Base({
  title,
  wireframe,
  wireframeTitle,
  children,
}: InferProps<typeof Base.propTypes>): React.ReactElement {
  const {
    logout, isLogoutInFlight,
  } = useAuth()
  if (wireframe) {
    return (
      <main className="grid">
        <div className="background near span-3 fit-content">
          <h1>{wireframeTitle || title}</h1>

          <a onClick={logout}>
            <h2>
              Logout
              {isLogoutInFlight && '...'}
            </h2>
          </a>
        </div>
        <div className="background near span-5 md-start-6 md-span-8 fit-content grid">
          <Navigation />
          <div style={{ minHeight: '300px' }}>WF</div>
        </div>
      </main>
    )
  }
  return (
    <main className="grid">
      <div className="background near span-4 fit-content">
        <h1>{title}</h1>
        <ThemeSwitcher />
        <LocaleSwitcher />
        <a onClick={logout}>
          <h2>
            Logout
            {isLogoutInFlight && '...'}
          </h2>
        </a>
      </div>
      <div className="background near span-5 md-start-6 md-span-8 fit-content grid container">
        <Navigation />
        {children}
      </div>
    </main>
  )
}

Base.propTypes = {
  title         :PropTypes.node,
  wireframe     :PropTypes.node,
  wireframeTitle:PropTypes.node,
  children      :PropTypes.node,
}

export default Base
