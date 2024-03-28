/* @aztlan/generator-front 1.8.1 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import {
  graphql, useFragment,
} from 'react-relay'
import { useOrganizationContext } from '@ldmnet/ui'

import styleNames from '@aztlan/bem'

const baseClassName = styleNames.base
const componentClassName = 'organization-info'

/*
const FRAGMENT = graphql`
  fragment OrganizationInfoFragment on OrganizationNode {
    id
    name
    url
    created
    updated
  }
` */
/**
 * description
 * @param {InferProps<typeof OrganizationInfo.propTypes>} props -
 * @returns {React.ReactElement} - Rendered OrganizationInfo
 */
function OrganizationInfo({
  id,
  className: userClassName,
  style,
  children,
}: // ...otherProps

InferProps<typeof OrganizationInfo.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )
  const { data } = useOrganizationContext()

  const result = useFragment(
    FRAGMENT, data,
  )

  return (
    <div
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      ORG INFO HRE
      {JSON.stringify(
        result, null, 2,
      )}
      {children}
    </div>
  )
}

OrganizationInfo.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The children JSX */
  children:PropTypes.node,
}

export default OrganizationInfo
