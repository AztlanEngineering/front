/* @aztlan/generator-front 0.5.0 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
import Component from './Label.tsx'

export default {
  title     :'form-formik/fields/common/Label',
  component :Component,
  decorators:[
    // storyfn => <div className="">{ storyfn() }</div>,
  ],
  // argTypes:{ backgroundColor: { control: 'color' } },
} as Meta<typeof Component>

export const Base: StoryObj<typeof Component> = {
  args:{
    name    :'name',
    children:'Your name',
  },
}

export const Optional: StoryObj<typeof Component> = {
  args:{
    name    :'name',
    children:'Your name',
    optional:true,
  },
}

export const As: StoryObj<typeof Component> = {
  args:{
    name    :'name',
    children:'Your name',
    as      :'h2',
  },
}

export const NoChildren: StoryObj<typeof Component> = { args: { name: 'name' } }
