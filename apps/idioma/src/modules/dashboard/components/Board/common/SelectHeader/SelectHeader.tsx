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
import { useBoardContext } from '../../hooks/index.js'
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
    basePath, baseBoardPath, currentBoardId,
  } = useBoardContext()

  const result = useFragment(
    FRAGMENT, data,
  )
  console.log(
    'result', result,
  )

  const boardMemberships = result?.edges || {}

  const history = useHistory()

  const handleSelectionChange = useCallback(
    (event) => {
      const selectedOrgUrl = event.target.value
      if (selectedOrgUrl === 'null') {
        history.push(basePath)
      } else {
        history.push(generatePath(
          baseBoardPath, { board: selectedOrgUrl },
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
      left={<strong>Board</strong>}
      desktop
      {...otherProps}
    >
      <select
        id="_board"
        name="_board"
        onChange={handleSelectionChange}
        defaultValue={currentBoardId}
      >
        <option value="null">Select a board</option>
        {boardMemberships.map((membership) => {
          const { node } = membership
          return (
            <option
              key={node.id}
              value={node.board.name}
            >
              {node.board.name}
              {' '}
              - (
              {node.role}
              )
              {/* node.board.name */}
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
      data={data.boardMemberships}
      {...props}
    />
  )
}

export { RawSelectHeader }
export default SelectHeader
