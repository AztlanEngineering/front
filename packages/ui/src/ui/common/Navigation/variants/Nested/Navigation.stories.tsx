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
    label   :'Menu',
    url     :'/',
    children:[
      <>
        <Component.Header className="container" />
        <div className="main-row container grid">
          <Component.VerticalMenu className="md-span-3 background near" />
          <Component.Canvas>
            <div className="container">
              <h1>Content goes here</h1>
            </div>
          </Component.Canvas>
        </div>
      </>,
    ],
    items:[
      {
        label:'Home',
        url  :'/home',
      },
      {
        label:'Organization Details',
        url  :'/org',
      },
      {
        label:'Collections',
        url  :'/coll',
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
        url  :'/settingsa',
        items:[
          {
            label:'Account',
            url  :'/accounta',
            items:[
              {
                label:'Profile',
                url  :'/profile',
              },
              {
                label:'Notifications',
                url  :'/notificationsa',
              },
              {
                label:'Security',
                url  :'/securitya',
              },
              {
                label:'Billing',
                url  :'/billinga',
              },
              {
                label:'Logout',
                url  :'/logouta',
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
