/* @aztlan/generator-front 1.2.22 */
import * as React from 'react'
import {
  Meta, StoryObj,
} from '@storybook/react'
import decorators from 'story-utils/decorators.js'
import Component from './Navigation.js'

const meta: Meta<typeof Component> = {
  title     :'common/Navigation/Nested',
  component :Component,
  decorators:[decorators.components.Router],
  parameters:{ layout: 'fullscreen' },
}

export default meta

export const Base: StoryObj<typeof Component> = {
  args:{
    children:[
      <React.Fragment key="fragment">
        <Component.Header className="container" />
        <Component.Canvas>
          <div className="container">Test content</div>
        </Component.Canvas>
      </React.Fragment>,
    ],
    rootItem:{
      label:'Navigation',
      url  :'/',
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
          label         :'Collections',
          displayItemsAs:'group',
          items         :[
            {
              label:'All images',
              url  :'/address2',
            },
            {
              label:"User's images",
              url  :'/contact2',
            },
          ],
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
