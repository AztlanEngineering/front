/* @aztlan/generator-front 0.4.0 */
import * as React from 'react'
import { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

function Base({ title, children }) {
  return (
    <main className="grid">
      <div className="background red span-3">
        <h1>{title}</h1>
      </div>
      <div className="background green span-5 md-start-5 md-span-8">
        <ul className="inline">
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/maintenance">Maintenance</Link>
          </li>
          <li>
            <Link to="/404">Test 404</Link>
          </li>
        </ul>
        {children}
      </div>
    </main>
  )
}

export default Base
