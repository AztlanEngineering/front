/* @aztlan/generator-front 0.7.2 */
import * as React from 'react'

// import { Form } from 'ui'
import Form from './Form.tsx'
import {
  validateEmail,
  validateURL,
  validatePhoneNumber,
} from '../validators.ts'
// import * as decorators from "@aztlan/ui/dist/esm/storybook/decorators.mjs";
// import * as decorators from "storybook";

export default {
  title     :'form/Form',
  component :Form,
  decorators:[(storyfn) => <div className="grid">{storyfn()}</div>],
  argTypes  :{ backgroundColor: { control: 'color' } },
}

function BaseTemplate(args) {
  return <Form {...args} />
}

export const Base = BaseTemplate.bind({})
Base.args = {
  className:'grid',
  children :[
    <Form.Menu key="menu" />,
    <Form.Inputs key="inputs" />,
  ],
  items:[
    {
      label      :'Personal Information',
      description:"Let's get to know you",
      inputs     :[
        {
          type :'text',
          label:'Name',
          name :'name',
        },
        {
          type    :'email',
          label   :'Email',
          name    :'email',
          validate:validateEmail,
        },
        {
          type    :'tel',
          label   :'Phone',
          name    :'phone',
          validate:validatePhoneNumber,
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
  initialValues:{
    name             :'',
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

export const InputProps = BaseTemplate.bind({})
InputProps.args = {
  ...Base.args,
  children:[
    <Form.Menu
      className="span-8 md-span-5"
      key="menu"
    />,
    <Form.Inputs
      className="span-8 md-span-9"
      key="inputs"
    />,
  ],
  inputProps:{
    spanLabel         :8,
    spanLabelDesktop  :3,
    spanContent       :8,
    spanContentDesktop:6,
  },
}

export const Multipart = BaseTemplate.bind({})
Multipart.args = {
  ...InputProps.args,
  type:'multipart',
}
