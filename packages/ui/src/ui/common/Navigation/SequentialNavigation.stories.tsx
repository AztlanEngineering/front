/* @aztlan/generator-front 1.2.22 */
import * as React from 'react'
import {
  Meta, StoryObj,
} from '@storybook/react'
import * as decorators from 'story-utils/decorators.js'
import Component from './SequentialNavigation.js'

const meta: Meta<typeof Component> = {
  title     :'common/Navigation/SequentialNavigation',
  component :Component,
  decorators:[decorators.router],
}

export default meta

export const Base: StoryObj<typeof Component> = {
  args:{
    children:[
      <Component.Header />,
      <Component.VerticalMenu />,
      <Component.Footer />,
    ],
    items:[
      {
        label:'Personal Information',
        url  :'/',
      },
      {
        label:'Organization Details',
        url  :'/org',
      },
      {
        label:'Location',
        url  :'/location',
      },
      {
        label:'Confirmation',
        url  :'/confirmation',
      },
    ],
  },
}

export const AlwaysDisplay: StoryObj<typeof Component> = {
  args:{
    ...Base.args,
    children:[
      <Component.Header hideOnDesktop={false} />,
      <Component.VerticalMenu desktopOnly={false} />,
      <Component.Footer hideOnDesktop={false} />,
    ],
  },
}
