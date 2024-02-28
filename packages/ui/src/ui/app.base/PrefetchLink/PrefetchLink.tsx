/* @aztlan/generator-front 1.4.1 */
import * as React from 'react'
import { useCallback } from 'react'
import * as PropTypes from 'prop-types'
import type { InferProps } from 'prop-types'

import { Link } from 'react-router-dom'
import usePrefetchLink from './usePrefetchLink.js'
import type { PrefetchLinkOptions } from './usePrefetchLink.js'

import {
  useAuthenticationContext,
  useViewer,
} from '../Authentication/index.js'

const sharedPropTypes = {
  LinkComponent      :PropTypes.elementType,
  to                 :PropTypes.string.isRequired,
  prefetchLinkOptions:PropTypes.shape({
    throttleMs    :PropTypes.number,
    shouldPrefetch:PropTypes.func,
  }),
}

export function BasePrefetchLink({
  to,
  prefetchLinkOptions = {},
  LinkComponent = Link,
  ...otherProps
}: InferProps<typeof sharedPropTypes> & {
  prefetchLinkOptions?:PrefetchLinkOptions;
}): React.ReactElement {
  const prefetchLink = usePrefetchLink(
    to, prefetchLinkOptions,
  )

  return (
    <LinkComponent
      to={to}
      onMouseOver={prefetchLink}
      {...otherProps}
    />
  )
}

BasePrefetchLink.propTypes = { ...sharedPropTypes }

export function PrivatePrefetchLink({
  prefetchLinkOptions:userPrefetchLinkOptions = {},
  ...props
}: InferProps<typeof sharedPropTypes>): React.ReactElement {
  const {
    isLoggedIn, meetsConditions,
  } = useViewer()

  const prefetchLinkOptions = {
    ...userPrefetchLinkOptions,
    shouldPrefetch:useCallback(
      (
        route: any, match: any,
      ) => {
        if (!route || !match || !route.QUERY) return false
        if (!route.isPrivate) return true // Default prefetching behavior for public routes
        return (
          isLoggedIn
          && (!route.groups
            || meetsConditions({
              groups     :route.groups,
              test       :route.test,
              permissions:route.permissions,
            }))
        )
      },
      [
        isLoggedIn,
        meetsConditions,
      ],
    ),
  }

  return (
    <BasePrefetchLink
      prefetchLinkOptions={prefetchLinkOptions}
      {...props}
    />
  )
}

PrivatePrefetchLink.propTypes = sharedPropTypes

function PrefetchLinkWrapper(props: InferProps<typeof sharedPropTypes>): React.ReactElement {
  const { data } = useAuthenticationContext()
  return data ? (
    <PrivatePrefetchLink
      {...props}
    />
  ) : (
    <BasePrefetchLink
      {...props}
    />
  )
}

PrefetchLinkWrapper.propTypes = sharedPropTypes

export default PrefetchLinkWrapper
