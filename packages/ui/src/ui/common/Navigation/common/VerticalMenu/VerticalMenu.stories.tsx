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
    label:'Menu',
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
    extras:[
      {
        key      :'Extra',
        Component:<h1>Extra</h1>,
      },
      {
        key      :'Extra2',
        Component:<h2>Logout</h2>,
      },
    ],
  },
}

/*
export const Base: StoryFn<typeof Component> = () => (
  <Component>Sample VerticalMenu</Component>
)
*/

/*
const Template: StoryFn<typeof Component> = (args) => <VerticalMenu {...args} />

export const Base: StoryFn<typeof Component> = Template.bind({})
Base.args = {
  children:'Sample Button',
} */
