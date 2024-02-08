/* @aztlan/generator-front 1.2.22 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
// import { Meta, StoryFn } from '@storybook/react'
import Component from './Footer.js'
// import * as decorators from "@aztlan/ui/dist/esm/story-utils/decorators.mjs";
// import * as decorators from "story-utils/decorators.js";

const meta: Meta<typeof Component> = {
  title    :'common/Navigation/common/Footer',
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
    layout: 'fullscreen',
  } */

  parameters:{ layout: 'fullscreen' },
}

export default meta

export const Base: StoryObj<typeof Component> = {
  args:{
    content      :'Complete all the fields to continue',
    next         :'Next',
    hideOnDesktop:false,
  },
}

export const Fixed: StoryObj<typeof Component> = {
  args:{
    ...Base.args,
    fixed:true,
  },
}
