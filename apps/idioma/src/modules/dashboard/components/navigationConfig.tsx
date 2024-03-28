import * as React from 'react'
import { PrefetchLink as Link } from '@aztlan/ui'
// import { Link } from 'react-router-dom'
import paths from '../paths.js'

const DEFAULT_ORGANIZATION = 'default'

const { generatePath } = paths

type Organization = {
  name           :string;
  url            :string;
  collectionEdges:any[];
}
/**
 * Generates the root item structure for navigation based on the provided organization information.
 *
 * @param {Object} organization - Object containing details of the current organization.
 * @returns {Object} The root item structure for navigation.
 */
function getRootItem(organizationData: Partial<Organization> = {}) {
  const {
    name, url, collectionEdges,
  } = organizationData

  const organization = url || DEFAULT_ORGANIZATION

  const base = {
    label:name || 'Organization',
    url  :generatePath(
      'ORGANIZATION_HOME', { organization },
    ),
    items:[],
  }

  base.items.push({
    items:[
      {
        label:'New',
        url  :generatePath(
          'VIEW_SLUG', {
            organization,
            slug:'new',
          },
        ),
        items:[
          {
            label:'Article',
            url  :generatePath(
              'NEW_TYPE', {
                organization,
                type:'Article',
              },
            ),
          },
          {
            label:'Event',
            url  :generatePath(
              'NEW_TYPE', {
                organization,
                type:'Event',
              },
            ),
          },
          {
            label:'Image',
            url  :generatePath(
              'NEW_TYPE', {
                organization,
                type:'Image',
              },
            ),
          },
          {
            label:'Collection',
            url  :generatePath(
              'NEW_TYPE', {
                organization,
                type:'Collection',
              },
            ),
          },
        ],
      },
    ],
  })

  if (collectionEdges) {
    base.items.push({
      label:'Collections',
      items:[
        ...collectionEdges.map(({ node }) => {
          console.log(
            'CFN', node,
          )
          const path = generatePath(
            // 'VIEW_SLUG', {
            'VIEW_GLOBAL_ID',
            {
              organization,
              // slug        :node.xSlug,
              globalId:node.id,
            },
          )
          return {
            label    :node.name,
            url      :path,
            Component:({ item }) => <Link to={item.url}>{item.label}</Link>,
          }
        }),
      ],
    })
  }

  base.items.push({
    label:'Change organization',
    url  :paths.absolute.HOME,
  })
  return base
}

export default getRootItem
