/* @aztlan/generator-front 1.2.22 */
import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
// import { Meta, StoryFn } from '@storybook/react'
import * as decorators from 'story-utils/decorators.js'
import Component from './VerticalMenu.js'

const meta: Meta<typeof Component> = {
  title     :'common/Navigation/common/VerticalMenu',
  component :Component,
  decorators:[decorators.router],
  /*
  argTypes: {
    backgroundColor: { control: "color" }
  }
  parameters: {
    layout: 'centered|fullscreen|padded(default)',
  }, */
}

export default meta

export const Base: StoryObj<typeof Component> = {
  args:{
    label :'Navigation',
    groups:[
      {
        label:'Main Menu',
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
    ],
  },
}

export const MultipleGroups: StoryObj<typeof Component> = {
  args:{
    ...Base.args,
    groups:[
      ...Base.args.groups,
      {
        label:'User Menu',
        items:[
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
}
