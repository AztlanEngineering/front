import * as React from 'react'
import {
  useMemo, useEffect,
} from 'react'
import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import {
  useParams, useLocation, matchPath,
} from 'react-router-dom'
import {
  useRefetchableFragment, GraphQLTaggedNode,
} from 'react-relay'
import { useApplicationContext } from '@aztlan/ui'

import Context from './Context.js'

const isValidBase64 = (input: string): boolean => {
  const base64Regex = /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/
  return base64Regex.test(input)
}

const isGlobalId = (input: string): boolean => {
  if (isValidBase64(input)) {
    try {
      return atob(input).includes(':')
    } catch (error) {
      return false
    }
  } else {
    return false
  }
}

function RawProvider({
  children,
  FRAGMENT,
  data,
  basePath,
  baseBoardPath,
}: // ...otherProps
InferProps<typeof RawProvider.propTypes>): React.ReactElement {
  // const { board: currentBoardId } = useParams()
  const location = useLocation()
  const match = matchPath(
    location.pathname, { path: baseBoardPath },
  )
  const boardMatchParam = match?.params.board
  const currentBoardId = isGlobalId(boardMatchParam) ? boardMatchParam : null

  const [
    result,
    refetchBoard,
  ] = useRefetchableFragment(
    FRAGMENT as GraphQLTaggedNode,
    data,
  )

  const selectedBoard = result.board

  useEffect(
    () => {
      if (currentBoardId && currentBoardId !== selectedBoard?.id) {
        refetchBoard({ id: currentBoardId })
      }
    }, [currentBoardId],
  )

  const contextValue = useMemo(
    () => ({
      data:selectedBoard,
      id  :selectedBoard?.id,
      uuid:selectedBoard && atob(selectedBoard.id).split(':')[1],
      currentBoardId,
      basePath,
      baseBoardPath,
    }),
    [
      baseBoardPath,
      basePath,
      selectedBoard,
      currentBoardId,
      data,
    ],
  )

  return <Context.Provider value={contextValue}>{children}</Context.Provider>
}

RawProvider.propTypes = {
  /** The children JSX */
  children:PropTypes.node,

  /** The fragment to use */
  FRAGMENT:PropTypes.object,

  /** The base path */
  basePath:PropTypes.string,

  /** The base board path */
  baseBoardPath:PropTypes.string,

  /** The data to use */
  data:PropTypes.any,
}

export { RawProvider }

function Provider(props): React.ReactElement {
  const { data } = useApplicationContext()

  return (
    <RawProvider
      data={data}
      {...props}
    />
  )
}

export default Provider
