/* @aztlan/generator-front 0.2.0 */
import * as React from 'react'

import { useInsertionEffect } from 'react'

import PropTypes from 'prop-types'

// @ts-ignore
import styleNames from '@aztlan/bem/exports.scss'

import { useFragment, useRelayEnvironment } from 'react-relay'

// Local Definitions

const baseClassName = styleNames.base

const componentClassName = 'query-tester'
const FRAGMENT = graphql`
  fragment QueryTesterFragment on Query {
    time
  }
`

const QUERY = graphql`
  query QueryTesterQuery {
    ...QueryTesterFragment
  }
`

/**
 * This is the component description.
 */
function QueryTester({
  id,
  className: userClassName,
  style,
  children,
  data,
  ...otherProps
  // ...otherProps
}) {
  useInsertionEffect(() => {
    // @ts-ignore
    import('./styles.scss')
  }, [])

  const time = useFragment(FRAGMENT, data)
  const envir = useRelayEnvironment()

  return (
    <div
      id={id}
      className={[baseClassName, componentClassName, userClassName]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      TIME IS
      {' '}
      {JSON.stringify(time)}
      {JSON.stringify(data)}
      {JSON.stringify(
        envir
          .getStore()
          .getSource()
          .toJSON(),
      )}
      {children}
    </div>
  )
}

QueryTester.propTypes = {
  /**
   * The HTML id for this element
   */
  id: PropTypes.string,

  /**
   * The HTML class names for this element
   */
  className: PropTypes.string,

  /**
   * The React-written, css properties for this element.
   */
  style: PropTypes.objectOf(PropTypes.string),

  /**
   *  The children JSX
   */
  children: PropTypes.node,
}

QueryTester.defaultProps = {
  // someProp:false
}
QueryTester.QUERY = QUERY
QueryTester.FRAGMENT = FRAGMENT

export default QueryTester
