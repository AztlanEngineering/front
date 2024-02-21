/* @aztlan/generator-front 1.2.22 */
import * as React from 'react'
import {
  Meta, StoryObj,
} from '@storybook/react'
import * as decorators from 'story-utils/decorators.js'
import Component from './Navigation.js'

const meta: Meta<typeof Component> = {
  title     :'common/Navigation/Nested',
  component :Component,
  decorators:[decorators.router],
  parameters:{ layout: 'fullscreen' },
}

export default meta

export const Base: StoryObj<typeof Component> = {
  args:{
    menuLabel:'Menu',
    children :[
      <div className="grid container background far">
        <Component.Header className="container" />
        <Component.VerticalMenu className="span-8 md-span-3 background near" />
        <div className="grid container span-8 md-span-11">
          <h1>Content goes here</h1>
        </div>
      </div>,
    ],
    items:[
      {
        label:'Home',
        url  :'/',
      },
      {
        label:'Organization Details',
        url  :'/org',
      },
      {
        label:'Collections',
        url  :'/org',
      },
      {
        label:'Location',
        url  :'/location',
        items:[
          {
            label:'Address',
            url  :'/address',
          },
          {
            label:'Contact',
            url  :'/contact',
          },
        ],
      },
      {
        label:'Settings',
        url  :'/settings',
        items:[
          {
            label:'Account',
            url  :'/account',
            items:[
              {
                label:'Profile',
                url  :'/profile',
              },
              {
                label:'Notifications',
                url  :'/notifications',
              },
              {
                label:'Security',
                url  :'/security',
              },
              {
                label:'Billing',
                url  :'/billing',
              },
              {
                label:'Logout',
                url  :'/logout',
              },
            ],
          },

          {
            label:'Notifications',
            url  :'/notifications',
          },
          {
            label:'Security',
            url  :'/security',
          },
          {
            label:'Billing',
            url  :'/billing',
          },
          {
            label:'Logout',
            url  :'/logout',
          },
        ],
      },
    ],
  },
}

export const Fixed: StoryObj<typeof Component> = {
  args:{
    ...Base.args,
    children:[
      <div
        style={{
          height:'2em',
          width :'100',
        }}
        key="spacer"
      />,
      // @ts-ignore
      ...Base.args.children,
    ],
    fixed:true,
  },
}

// export const CustomNextHandler: StoryObj<typeof Component> = {
//   args:{
//     ...AlwaysDisplay.args,
//     handlerNext:() => alert('You clicked next. This function should include a navigation action.'),
//   },
// }
//
// export const HidePreviousButton: StoryObj<typeof Component> = {
//   args:{
//     ...Fixed.args,
//     hidePreviousButton:true,
//     hideNextButton    :false,
//     fixed             :true,
//   },
// }
