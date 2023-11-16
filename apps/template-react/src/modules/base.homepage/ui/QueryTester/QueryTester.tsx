/* @aztlan/generator-front 0.2.0 */
import * as React from 'react'

import { useInsertionEffect } from 'react'

import PropTypes from 'prop-types'

// @ts-ignore
import styleNames from '@aztlan/bem/exports.scss'

import { useLazyLoadQuery } from 'react-relay'

// Local Definitions

const baseClassName = styleNames.base

const componentClassName = 'query-tester'
const QUERY = graphql`
  query QueryTesterQuery {
    time
    usdw {
      hello
    }
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
  ...otherProps
  // ...otherProps
}) {
  useInsertionEffect(() => {
    // @ts-ignore
    import('./styles.scss')
  }, [])

  const data = useLazyLoadQuery(QUERY, {}, { fetchPolicy: 'store-or-network' })

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
      {JSON.stringify(data)}
      {JSON.stringify(otherProps)}
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

export default QueryTester
