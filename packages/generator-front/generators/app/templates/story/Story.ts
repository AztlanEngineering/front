/* <%= pkg %> <%= version %> */
//import * as React from 'react'

import { StoryObj } from '@storybook/react'
import <%= name %> from './<%= name %>.tsx'
//import * as decorators from "@aztlan/ui/dist/esm/story-utils/decorators.mjs";
//import * as decorators from "story-utils/decorators.tsx";

export default {
  title: '<%= fullname %>',
  component: <%= name %>,
  decorators:[
    //decorators.app, 
    //storyfn => <div className="">{ storyfn() }</div>,
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  /*
  parameters: {
    layout: 'centered|fullscreen|padded(default)',
  },*/
}

export const LoggedOut = {}
}

export const Base: StoryObj = {         
  args:{
    type :'text',
    name :'name',
    label:'Your name',
  },
}*/

/*
export const Base = () => (
  <<%= name %>>Sample <%= name %></<%= name %>>
)
*/

/*
const Template = (args) => <<%= name %> {...args} />
                                                     
export const Base = Template.bind({})
Base.args = {
  children:'Sample Button',
}*/
