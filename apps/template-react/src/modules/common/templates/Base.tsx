/* @aztlan/generator-front 0.4.0 */
import * as React from 'react'
import { useEffect } from 'react'
import {
  Link, useHistory,
} from 'react-router-dom'
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

function Base({
  title, wireframe, children,
}) {
  const {
    logout, isLogoutInFlight,
  } = useAuth()
  if (wireframe) {
    return (
      <main className="grid">
        <div className="background near span-3 fit-content">
          <h1>{title}</h1>

          <a onClick={logout}>
            <h2>
              Logout
              {isLogoutInFlight && '...'}
            </h2>
          </a>
        </div>
        <div className="background near span-5 md-start-6 md-span-8 fit-content grid">
          <ul className="inline">
            {routeMap.map(({
              path, title,
            }) => (
              <li key={path}>
                <Link to={path}>{title}</Link>
              </li>
            ))}
          </ul>
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
        <ul className="inline span-8">
          {routeMap.map(({
            path, title,
          }) => (
            <li key={path}>
              <Link to={path}>{title}</Link>
            </li>
          ))}
        </ul>
        {children}
      </div>
    </main>
  )
}

export default Base
