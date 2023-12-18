/* <%= pkg %> <%= version %> */
import * as React from 'react'

//import { <%= name %> } from 'ui'
import <%= name %> from './<%= name %>.tsx'
//import * as decorators from "@aztlan/ui/dist/esm/storybook/decorators.mjs";
//import * as decorators from "storybook";

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
}

export const Base = () => (
  <<%= name %>>Sample <%= name %></<%= name %>>
)
