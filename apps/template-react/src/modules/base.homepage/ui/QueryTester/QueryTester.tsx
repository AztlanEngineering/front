/* @aztlan/generator-front 0.2.0 */
import * as React from 'react'

import {
  useInsertionEffect,
} from 'react'

import * as PropTypes from 'prop-types'

import styleNames from '@aztlan/bem'

import {
  useFragment, useRelayEnvironment,
} from 'react-relay'
// import { Button } from '@aztlan/ui'

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
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const {
    time,
  } = useFragment(
    FRAGMENT, data,
  )

  return (
    <div
      id={id}
      className={[
        'container',
        baseClassName,
        componentClassName,
        userClassName,
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      <p>
        TIME IS
        {' '}
        {time}
        {children}
      </p>
      {/*
      <Button>Test</Button>
      */}
    </div>
  )
}

QueryTester.propTypes = {
  /**
   * The HTML id for this element
   */
  id:PropTypes.string,

  /**
   * The HTML class names for this element
   */
  className:PropTypes.string,

  /**
   * The React-written, css properties for this element.
   */
  style:PropTypes.objectOf(PropTypes.string),

  /**
   *  The children JSX
   */
  children:PropTypes.node,
}

QueryTester.defaultProps = {
  // someProp:false
}
QueryTester.QUERY = QUERY
QueryTester.FRAGMENT = FRAGMENT

export default QueryTester
