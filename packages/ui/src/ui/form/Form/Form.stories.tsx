/* @aztlan/generator-front 0.7.2 */
import * as React from 'react'

import * as decorators from 'story-utils/decorators.tsx'
import Form from './Form.tsx'
import {
  validateEmail,
  validateURL,
  validatePhoneNumber,
  validateRequired,
} from '../validators.ts'

export default {
  title     :'form/Form',
  component :Form,
  decorators:[decorators.grid],
  argTypes  :{ backgroundColor: { control: 'color' } },
}

function BaseTemplate(args) {
  return <Form {...args} />
}

export const Base = BaseTemplate.bind({})
Base.args = {
  className:'grid',
  children :[
    <Form.Menu
      className="span-8 md-span-5"
      key="menu"
    />,
    <Form.Inputs
      className="span-8 md-span-9"
      key="inputs"
    />,
  ],
  items:[
    {
      label      :'Personal Information',
      description:"Let's get to know you",
      inputs     :[
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
    },
    {
      label      :"Your Company's Information",
      description:"Let's get to know your company",
      inputs     :[
        {
          type :'text',
          label:'Company Name',
          name :'company-name',
        },
        {
          type :'text',
          label:'Company Address',
          name :'company-address',
        },
        {
          type    :'tel',
          label   :'Company Phone',
          name    :'company-phone',
          validate:validatePhoneNumber,
        },
      ],
    },
    {
      label      :'Your website',
      description:'Tell us more about your site',
      inputs     :[
        {
          type :'text',
          label:'Site Name',
          name :'site-name',
        },
        {
          type       :'url',
          label      :'Site Address',
          name       :'site-address',
          description:'This is the address of your website.',
          validate   :validateURL,
        },
      ],
    },
  ],
  inputProps:{
    spanLabel         :8,
    spanLabelDesktop  :3,
    spanContent       :8,
    spanContentDesktop:6,
  },
  initialValues:{
    'first-name'     :'',
    'last-name'      :'',
    email            :'',
    phone            :'',
    'company-name'   :'',
    'company-address':'',
    'company-phone'  :'',
    'site-name'      :'',
    'site-address'   :'',
  },
  debug:true,
}

export const Multipart = BaseTemplate.bind({})
Multipart.args = {
  ...Base.args,
  type:'multipart',
}
