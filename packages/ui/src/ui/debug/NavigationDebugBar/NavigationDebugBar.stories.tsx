/* @aztlan/generator-front 1.2.22 */

import {
  Meta, StoryObj,
} from '@storybook/react'
import * as decorators from 'story-utils/decorators.js'
import Component from './NavigationDebugBar.js'

const meta: Meta<typeof Component> = {
  title     :'debug/NavigationDebugBar',
  component :Component,
  decorators:[decorators.router],
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
