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
      ],
    },
  },
}
