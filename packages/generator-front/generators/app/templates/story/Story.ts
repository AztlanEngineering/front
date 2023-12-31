/* <%= pkg %> <%= version %> */
//import * as React from 'react'

import { Meta, StoryObj } from "@storybook/react";
//import { Meta, StoryFn } from '@storybook/react'
import Component from "./<%= name %>.tsx";
//import * as decorators from "@aztlan/ui/dist/esm/story-utils/decorators.mjs";
//import * as decorators from "story-utils/decorators.tsx";

export default {
  title: "<%= fullname %>",
  component: Component,
  decorators: [
    //decorators.app,
    //storyfn => <div className="">{ storyfn() }</div>,
  ],
  argTypes: {
    backgroundColor: { control: "color" }
  }
  /*
  parameters: {
    layout: 'centered|fullscreen|padded(default)',
  },*/
} as Meta<typeof Component>;

export const Base: StoryObj<typeof Component> = {
  args: {
    type: "text",
    name: "name",
    label: "Your name"
  }
};

/*
export const Base: StoryFn<typeof Component> = () => (
  <Component>Sample <%= name %></Component>
)
*/

/*
const Template: StoryFn<typeof Component> = (args) => <<%= name %> {...args} />
                                                     
export const Base: StoryFn<typeof Component> = Template.bind({})
Base.args = {
  children:'Sample Button',
}*/
