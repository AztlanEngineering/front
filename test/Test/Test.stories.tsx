/* @aztlan/generator-front 1.2.16 */
//import * as React from 'react'

import { Meta, StoryObj } from "@storybook/react";
//import { Meta, StoryFn } from '@storybook/react'
import Component from "./Test.js";
//import * as decorators from "@aztlan/ui/dist/esm/story-utils/decorators.mjs";
//import * as decorators from "story-utils/decorators.js";

const meta: Meta<typeof Component> = {
  title: "some/Test",
  component: Component
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
  },*/
};

export default meta;

export const Base: StoryObj<typeof Component> = {
  args: {
    children: "Sample Test"
  }
};

/*
export const Base: StoryFn<typeof Component> = () => (
  <Component>Sample Test</Component>
)
*/

/*
const Template: StoryFn<typeof Component> = (args) => <Test {...args} />
                                                     
export const Base: StoryFn<typeof Component> = Template.bind({})
Base.args = {
  children:'Sample Button',
}*/
