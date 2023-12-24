/* <%= pkg %> <%= version %> */
import * as React from 'react'

//import { <%= name %> } from 'ui'
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

export const Base = () => (
  <<%= name %>>Sample <%= name %></<%= name %>>
)

/*
export const Base = {         
  args:{
    type :'text',
    name :'name',
    label:'Your name',
  },
}*/

/*
const Template = (args) => <<%= name %> {...args} />
                                                     
export const Base = Template.bind({})
Base.args = {
  children:'Sample Button',
}*/
