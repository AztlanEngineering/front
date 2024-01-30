/* @aztlan/generator-front 0.9.0 */
import {
  Meta, StoryObj,
} from '@storybook/react'
import Component from './SimpleForm.js'
// import * as decorators from "story-utils/decorators.js";

const meta: Meta<typeof Component> = {
  title     :'form/SimpleForm',
  component :Component,
  decorators:[
    // decorators.app,
  ],
  // argTypes:{ backgroundColor: { control: 'color' } },
}

export default meta

export const Base: StoryObj<typeof Component> = {
  args:{
    defaultValues:{
      'first-name':'John',
      'last-name' :'Doe',
      email       :'',
      phone       :'',
    },
    fields:[
      {
        type         :'text',
        label        :'First Name',
        name         :'first-name',
        autoComplete :'given-name',
        registerProps:{
          required:{
            value  :true,
            message:"first name can't be empty",
          },
        },
      },
      {
        type         :'text',
        label        :'Last Name',
        name         :'last-name',
        optional     :true,
        autoComplete :'family-name',
        registerProps:{
          minLength:{
            value  :5,
            message:'last name must have at least 5 characters',
          },
        },
      },
      {
        type         :'email',
        label        :'Email',
        name         :'email',
        description  :'Try something @gmail.com',
        autoComplete :'email',
        registerProps:{
          minLength:{
            value  :8,
            message:'email must have at least 8 characters',
          },
          pattern:{
            value  :/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message:'Please enter a valid email address',
          },
        },
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
