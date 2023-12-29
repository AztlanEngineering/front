/* @aztlan/generator-front 0.7.2 */
import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
import Component from './SimpleForm.tsx'
import {
  validateEmail,
  validatePhoneNumber,
  validateRequired,
} from '../validators.ts'

export default {
  title     :'form-formik/SimpleForm',
  component :Component,
  decorators:[
    // decorators.app,
  ],
} as Meta<typeof Component>

export const Base: StoryObj<typeof Component> = {
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
