/* @aztlan/generator-front 0.7.2 */
import * as React from 'react'

import SimpleForm from './SimpleForm.tsx'
import {
  validateEmail,
  validatePhoneNumber,
  validateRequired,
} from '../validators.ts'

export default {
  title     :'form/SimpleForm',
  component :SimpleForm,
  decorators:[
    // decorators.app,
    // storyfn => <div className="">{ storyfn() }</div>,
  ],
  argTypes:{ backgroundColor: { control: 'color' } },
}

export const Base = {
  args:{
    type  :'text',
    name  :'name',
    label :'Your name',
    inputs:[
      {
        type    :'text',
        label   :'First Name',
        name    :'first-name',
        validate:validateRequired,
      },
      {
        type    :'text',
        label   :'Last Name',
        name    :'last-name',
        optional:true,
      },
      {
        type       :'email',
        label      :'Email',
        name       :'email',
        description:'Try something @gmail.com',
        validate   :validateEmail,
      },
      {
        type       :'tel',
        label      :'Phone',
        name       :'phone',
        description:'this field should only appear is an email ending with gmail.com is entered',
        condition  :(values) => values.email.endsWith('gmail.com'),
        validate   :validatePhoneNumber,
      },
    ],
    inputProps:{
      spanLabel         :8,
      spanLabelDesktop  :5,
      spanContent       :8,
      spanContentDesktop:9,
    },
    initialValues:{
      'first-name':'',
      'last-name' :'',
      email       :'',
      phone       :'',
    },
    debug:true,
  },
}

/*
const Template = (args) => <SimpleForm {...args} />

export const Base = Template.bind({})
Base.args = {
  children:'Sample Button',
} */
