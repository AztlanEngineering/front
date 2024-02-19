/* @aztlan/generator-front 1.2.22 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
// import { Meta, StoryFn } from '@storybook/react'
import Component from './Header.js'
// import * as decorators from "@aztlan/ui/dist/esm/story-utils/decorators.mjs";
// import * as decorators from "story-utils/decorators.js";

const meta: Meta<typeof Component> = {
  title     :'common/Navigation/common/Header',
  component :Component,
  /*
  decorators: [
    //decorators.app,
    //storyfn => <div className="">{ storyfn() }</div>,
  ]
  argTypes: {
    backgroundColor: { control: "color" }
  }
  }, */
  parameters:{ layout: 'fullscreen' },
}

export default meta

export const Base: StoryObj<typeof Component> = {
  args:{
    children:'Shipping information',
    right   :'Next',
    left    :'Previous',
    desktop :true,
  },
}

export const Fixed: StoryObj<typeof Component> = {
  args:{
    ...Base.args,
    fixed:true,
  },
}

export const Padded: StoryObj<typeof Component> = {
  args:{
    ...Base.args,
    UNSTABLE_padded:true,
  },
}
