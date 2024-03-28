import * as React from 'react'
import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import { graphql } from 'react-relay'
import { OrganizationProvider } from '@ldmnet/ui'
import paths from '../paths.js'

/*
const FRAGMENT = graphql`
  fragment OrganizationProviderFragment on Query
  @refetchable(queryName: "ProviderOrganizationRefetchQuery")
  @argumentDefinitions(url: { type: "String" }) {
    organization(url: $url) {
      id
      name
      url
      created
      updated
      ...OrganizationInfoFragment
      ...NavigationDashboardDefaultItemsFragment
    }
  }
` */

function OrganizationAndNavigationProvider({
  children,
  rootItem,
  ...props
}: InferProps<typeof OrganizationAndNavigationProvider.propTypes>) {
  return (
    <OrganizationProvider
      FRAGMENT={FRAGMENT}
      basePath={paths.absolute.HOME}
      baseOrganizationPath={paths.absolute.ORGANIZATION_HOME}
      {...props}
    >
      {children}
    </OrganizationProvider>
  )
}

OrganizationAndNavigationProvider.propTypes = {
  children:PropTypes.node,
  rootItem:PropTypes.object,
}

export default OrganizationAndNavigationProvider
