/* @aztlan/generator-front 1.2.22 */
import * as React from 'react'
import {
  Meta, StoryObj,
} from '@storybook/react'
import * as decorators from 'story-utils/decorators.js'
import Component from './Navigation.js'

const meta: Meta<typeof Component> = {
  title     :'common/Navigation/Sequential',
  component :Component,
  decorators:[decorators.router],
  parameters:{ layout: 'fullscreen' },
}

export default meta

export const Base: StoryObj<typeof Component> = {
  args:{
    children:[
      <Component.Header key="header" />,
      <Component.VerticalMenu key="vm" />,
      <Component.Paginator key="pagi" />,
      <Component.Footer key="footer" />,
    ],
    rootItem:{
      label:'Navigation',
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
  },
}

export const AlwaysDisplay: StoryObj<typeof Component> = {
  args:{
    ...Base.args,
    children:[
      <Component.Header
        hideOnDesktop={false}
        key="header"
      />,
      <Component.VerticalMenu
        desktopOnly={false}
        key="vm"
      />,
      <Component.Paginator
        desktopOnly={false}
        key="pagi"
      />,
      <Component.Footer
        hideOnDesktop={false}
        key="footer"
      />,
    ],
  },
}

export const Fixed: StoryObj<typeof Component> = {
  args:{
    ...AlwaysDisplay.args,
    children:[
      <div
        style={{
          height:'2em',
          width :'100',
        }}
        key="spacer"
      />,
      // @ts-ignore
      ...AlwaysDisplay.args.children,
    ],
    fixed:true,
  },
}

export const CustomNextHandler: StoryObj<typeof Component> = {
  args:{
    ...AlwaysDisplay.args,
    handlerNext:() => alert('You clicked next. This function should include a navigation action.'),
  },
}

export const HidePreviousButton: StoryObj<typeof Component> = {
  args:{
    ...Fixed.args,
    hidePreviousButton:true,
    hideNextButton    :false,
    fixed             :true,
  },
}
