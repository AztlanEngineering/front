// REF 11.1: Corrected Storybook Stories for Using `Component`
import * as React from 'react'
import {
  Meta, StoryObj,
} from '@storybook/react'
import * as decorators from 'story-utils/decorators.js'
import Component from './VerticalMenu' // Ensuring the component import aligns with your setup

const meta: Meta<typeof Component> = {
  title     :'common/Navigation/common/VerticalMenu',
  component :Component,
  decorators:[decorators.router],
}

export default meta

export const Base: StoryObj<typeof Component> = {
  args:{
    rootItem:{
      label:'Navigation',
      items:[
        {
          label:'Home',
          url  :'/',
        },
        {
          label:'About',
          url  :'/about',
        },
        {
          label:'Contact',
          url  :'/contact',
        },
        {
          label   :'Disabled',
          url     :'/disabled',
          disabled:true,
        },
      ],
    },
  },
}

export const WithNestedGroups: StoryObj<typeof Component> = {
  args:{
    rootItem:{
      label:'Navigation',
      items:[
        ...Base.args.rootItem.items,
        {
          label         :'User Menu',
          displayItemsAs:'group',
          items         :[
            {
              label:'Profile',
              url  :'/profile',
            },
            {
              label:'Settings',
              url  :'/settings',
            },
            {
              label    :'Logout',
              Component:<h2>Logout</h2>,
            },
          ],
        },
        {
          label         :'Sth Menu',
          displayItemsAs:'group',
        },
        {
          label         :'Admin Menu',
          displayItemsAs:'group',
          items         :[
            {
              label:'Users',
              url  :'/users',
            },
            {
              label:'Roles',
              url  :'/roles',
            },
            {
              label:'Permissions',
              url  :'/permissions',
            },
          ],
        },
        {
          label         :'Disabled Menu',
          displayItemsAs:'group',
          disabled      :true,
          items         :[
            {
              label:'Users',
              url  :'/users3',
            },
            {
              label:'Roles',
              url  :'/roles2',
            },
            {
              label:'Permissions',
              url  :'/permissions4',
            },
          ],
        },
      ],
    },
  },
}

export const Spaced: StoryObj<typeof Component> = {
  args:{
    ...Base.args,
    spaced:true,
    style :{ 'min-height': '500px' },
  },
}

export const WithAppendItems: StoryObj<typeof Component> = {
  args:{
    ...Base.args,
    appendItems:[
      {
        label:'Append 1',
        url  :'/append1',
      },
      {
        label:'Append 2',
        url  :'/append2',
      },
      {
        label:'Append 3',
        url  :'/append3',
      },
    ],
  },
}
