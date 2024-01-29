/* @aztlan/generator-front 0.9.0 */
import * as React from 'react'
import {
  Meta, StoryObj,
} from '@storybook/react'
import Component from './Form.js'
// import * as decorators from "story-utils/decorators.js";

const meta: Meta<typeof Component> = {
  title     :'form/Form',
  component :Component,
  decorators:[
    // decorators.app,
  ],
  //argTypes:{ backgroundColor: { control: 'color' } },
}

export default meta

const Form = Component

export const Base: StoryObj<typeof Component> = {
  args:{
    className:'grid',
    children :[
      <Form.Navigation
        className="span-8 md-span-5"
        key="menu"
      />,
      <Form.Content
        className="span-8 md-span-9"
        key="inputs"
      />,
    ],
    fieldProps:{
      spanLabel         :8,
      spanLabelDesktop  :3,
      spanContent       :8,
      spanContentDesktop:6,
    },
    items:[
      {
        label      :'Personal Information',
        description:"Let's get to know you",
        fields     :[
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
              /*
              minLength:{
                value  :8,
                message:'email must have at least 8 characters',
              },
              pattern:{
                value  :/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message:'Please enter a valid email address',
              }, */
            },
          },
          {
            type        :'tel',
            label       :'Phone',
            name        :'phone',
            description :'this field should only appear is an email ending with gmail.com is entered',
            autoComplete:'tel',
            condition   :[
              ['email'],
              ([email]) => email?.endsWith('gmail.com'),
            ],
          },
        ],
      },
      {
        label      :"Your Company's Information",
        description:"Let's get to know your company",
        fields     :[
          {
            type         :'text',
            label        :'Company Name',
            name         :'company-name',
            autoComplete :'organization',
            registerProps:{
              required:{
                value  :true,
                message:"company name can't be empty",
              },
            },
          },
          {
            type        :'text',
            label       :'Company Address',
            name        :'company-address',
            autoComplete:'street-address',
            optional    :true,
          },
          {
            type        :'tel',
            label       :'Company Phone',
            name        :'company-phone',
            autoComplete:'tel',
            optional    :true,
          },
        ],
      },
      {
        label      :'Your website',
        description:'Tell us more about your site',
        fields     :[
          {
            type        :'text',
            label       :'Site Name',
            name        :'site-name',
            autoComplete:'organization',
          },
          {
            type         :'url',
            label        :'Site Address',
            name         :'site-address',
            description  :'This is the address of your website.',
            autoComplete :'url',
            registerProps:{
              pattern:{
                value  :/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                message:'Please enter a valid URL',
              },
            },
          },
        ],
      },
    ],
  },
}

export const Multipart: StoryObj<typeof Component> = {
  args:{
    ...Base.args,
    type:'multipart',
  },
}
