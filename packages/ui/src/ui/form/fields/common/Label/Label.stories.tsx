/* @aztlan/generator-front 0.5.0 */
// import * as React from 'react'

import { StoryObj } from '@storybook/react'
import Label from './Label.tsx'

export default {
  title     :'form/fields/common/Label',
  component :Label,
  decorators:[
    // storyfn => <div className="">{ storyfn() }</div>,
  ],
  // argTypes:{ backgroundColor: { control: 'color' } },
}

export const Base: StoryObj = {
  args:{
    name    :'name',
    children:'Your name',
  },
}

export const Optional: StoryObj = {
  args:{
    name    :'name',
    children:'Your name',
    optional:true,
  },
}

export const As: StoryObj = {
  args:{
    name    :'name',
    children:'Your name',
    as      :'h2',
  },
}

export const NoChildren: StoryObj = { args: { name: 'name' } }
