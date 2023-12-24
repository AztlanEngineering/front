/* @aztlan/generator-front 0.5.0 */
// import * as React from 'react'

import { StoryObj } from '@storybook/react'
import * as decorators from 'story-utils/decorators.tsx'
import FormInput from './FormInput.tsx'
import { allTypes } from '../constants.ts'
import { validateEmail } from '../validators.ts'

export default {
  title     :'form/FormInput',
  component :FormInput,
  decorators:[
    decorators.grid,
    decorators.form,
  ],
  argTypes:{
    type:{
      control:'select',
      options:allTypes,
    },
  },
}

export const Base: StoryObj = {
  args:{
    type :'text',
    name :'name',
    label:'Your name',
  },
}

export const WithDescription: StoryObj = {
  args:{
    type       :'text',
    name       :'last_name',
    label      :'Your last name',
    description:'This is where we explain why this field is important',
  },
}

export const WithValidation: StoryObj = {
  args:{
    type       :'email',
    name       :'email',
    label      :'Your email',
    validate   :validateEmail,
    description:'Your email will be used as your login credential.',
  },
}

export const Textarea: StoryObj = {
  args:{
    type :'textarea',
    name :'blog_post',
    label:'Blog post content',
  },
}

export const Checkbox: StoryObj = {
  args:{
    type :'checkbox',
    name :'newsletter_opt_in',
    label:'Newsletter opt-in',
  },
}

export const Select: StoryObj = {
  args:{
    type   :'select',
    name   :'region',
    label  :'Select your region',
    options:[
      {
        value:'north',
        label:'North',
      },
      {
        value:'south',
        label:'South',
      },
      {
        value   :'east',
        label   :'East',
        disabled:true,
      },
      {
        value:'west',
        label:'West',
      },
    ],
  },
}

export const SimpleChoices: StoryObj = {
  args:{
    type   :'simple-choices',
    name   :'favourite-colors',
    label  :'Select your favourite color',
    options:[
      {
        value:'red',
        label:'Red',
      },
      {
        value:'green',
        label:'Green',
      },
      {
        value:'blue',
        label:'Blue',
      },
      {
        value:'yellow',
        label:'Yellow',
      },
    ],
  },
}

export const SimpleChoicesMultiple: StoryObj = {
  args:{
    ...SimpleChoices.args,
    multiple:true,
  },
}

export const Choices: StoryObj = {
  args:{
    ...SimpleChoices.args,
    type:'choices',
  },
}

export const ChoicesMultiple: StoryObj = {
  args:{
    ...SimpleChoices.args,
    type    :'choices',
    multiple:true,
  },
}
