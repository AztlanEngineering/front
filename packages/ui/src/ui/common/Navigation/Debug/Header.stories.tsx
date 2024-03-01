/* @aztlan/generator-front 1.2.22 */

import {
  Meta, StoryObj,
} from '@storybook/react'
import decorators from 'story-utils/decorators.js'
import Component from './Header.js'

const meta: Meta<typeof Component> = {
  title     :'debug/NavigationDebugBar',
  component :Component,
  decorators:[decorators.components.Router],
  parameters:{ layout: 'fullscreen' },
}

export default meta

export const Base: StoryObj<typeof Component> = {
  args:{
    items:[
      {
        label:'Home',
        path :'/',
      },
      {
        label:'About',
        path :'/about',
      },
      {
        label:'Contact',
        path :'/contact',
      },
      {
        label:'Login',
        path :'/login',
      },
      {
        label:'Logout',
        path :'/logout',
      },
    ],
  },
}
