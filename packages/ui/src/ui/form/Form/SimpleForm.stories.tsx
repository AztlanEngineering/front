/* @aztlan/generator-front 0.9.0 */
import {
  Meta, StoryObj,
} from '@storybook/react'
import Component from './SimpleForm.tsx'
// import * as decorators from "story-utils/decorators.tsx";

export default {
  title     :'form/SimpleForm',
  component :Component,
  decorators:[
    // decorators.app,
  ],
  argTypes:{ backgroundColor: { control: 'color' } },
} as Meta<typeof Component>

export const Base: StoryObj<typeof Component> = {
  args:{
    fields:[
      {
        type        :'text',
        label       :'First Name',
        name        :'first-name',
        autoComplete:'given-name',
      },
      {
        type        :'text',
        label       :'Last Name',
        name        :'last-name',
        optional    :true,
        autoComplete:'family-name',
      },
      {
        type        :'email',
        label       :'Email',
        name        :'email',
        description :'Try something @gmail.com',
        autoComplete:'email',
      },
      {
        type        :'tel',
        label       :'Phone',
        name        :'phone',
        description :'this field should only appear is an email ending with gmail.com is entered',
        autoComplete:'tel',
      },
    ],
    fieldProps:{
      spanLabel         :8,
      spanLabelDesktop  :5,
      spanContent       :8,
      spanContentDesktop:9,
    },
    /*
    initialValues:{
      'first-name':'',
      'last-name' :'',
      email       :'',
      phone       :'',
    }, */
  },
}
