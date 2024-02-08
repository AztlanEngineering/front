/* @aztlan/generator-front 1.2.22 */
import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
// import { Meta, StoryFn } from '@storybook/react'
import Component from './Paginator.js'
// import * as decorators from "@aztlan/ui/dist/esm/story-utils/decorators.mjs";
// import * as decorators from "story-utils/decorators.js";

const meta: Meta<typeof Component> = {
  title    :'common/Navigation/common/Paginator',
  component:Component,
  /*
  decorators: [
    //decorators.app,
    //storyfn => <div className="">{ storyfn() }</div>,
  ]
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
    next       :<span>Next</span>,
    previous   :<span>Previous</span>,
    desktopOnly:false,
  },
}

export const OnlyPrevious: StoryObj<typeof Component> = {
  args:{
    previous   :<span>Previous</span>,
    desktopOnly:false,
  },
}

export const OnlyNext: StoryObj<typeof Component> = {
  args:{
    next       :<span>Next</span>,
    desktopOnly:false,
  },
}
