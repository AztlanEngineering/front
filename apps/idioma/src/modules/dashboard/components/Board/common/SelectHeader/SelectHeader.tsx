/* @aztlan/generator-front 1.8.1 */
import * as React from 'react'
import {
  useInsertionEffect, useCallback, useState, useEffect,
} from 'react'
import {
  generatePath,
  useLocation,
  useHistory,
  useParams,
} from 'react-router-dom'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import {
  NavigationHeader, useViewer,
} from '@aztlan/ui'
import styleNames from '@aztlan/bem'
import { useFragment } from 'react-relay'
import { useOrganizationContext } from '../../hooks/index.js'
// import { NavigationHeader } from '@aztlan/ui'

const baseClassName = styleNames.base
const componentClassName = 'select-header'

/**
 * description
 * @param {InferProps<typeof RawSelectHeader.propTypes>} props -
 * @returns {React.ReactElement} - Rendered RawSelectHeader
 */
function RawSelectHeader({
  id,
  className: userClassName,
  style,
  children,
  FRAGMENT,
  data,
  ...otherProps
}: InferProps<typeof RawSelectHeader.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const {
    basePath, baseOrganizationPath, currentOrganizationUrl,
  } = useOrganizationContext()

  const result = useFragment(
    FRAGMENT, data,
  )

  const organizationMemberships = result?.edges || {}

  const history = useHistory()

  const handleSelectionChange = useCallback(
    (event) => {
      const selectedOrgUrl = event.target.value
      if (selectedOrgUrl === 'null') {
        history.push(basePath)
      } else {
        history.push(generatePath(
          baseOrganizationPath, { organization: selectedOrgUrl },
        ))
      }
    },
    [history],
  )

  return (
    <NavigationHeader
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      content="Select"
      left={<strong>Organization</strong>}
      desktop
      {...otherProps}
    >
      <select
        id="_organization"
        name="_organization"
        onChange={handleSelectionChange}
        defaultValue={currentOrganizationUrl}
      >
        <option value="null">Select an organization</option>
        {organizationMemberships.map((membership) => {
          const { node } = membership
          return (
            <option
              key={node.id}
              value={node.organization.url}
            >
              {node.organization.url}
              {' '}
              - (
              {node.role}
              )
              {/* node.organization.name */}
            </option>
          )
        })}
      </select>
    </NavigationHeader>
  )
}

RawSelectHeader.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The children JSX */
  children:PropTypes.node,

  /** The fragment to use */
  FRAGMENT:PropTypes.any,

  /** The data to use */
  data:PropTypes.any,
}

function SelectHeader(props) {
  const { data } = useViewer()
  return (
    <RawSelectHeader
      data={data.organizationMemberships}
      {...props}
    />
  )
}

export { RawSelectHeader }
export default SelectHeader
