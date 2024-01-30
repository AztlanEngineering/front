/* @aztlan/generator-front 0.9.0 */
import {
  Meta, StoryObj,
} from '@storybook/react'
import * as decorators from 'story-utils/decorators.js'
import Component from './Field.js'
import { AVAILABLE_TYPES } from './constants.js'

const meta: Meta<typeof Component> = {
  title     :'form/Field',
  component :Component,
  decorators:[
    decorators.grid,
    decorators.form,
  ],
  argTypes:{
    type:{
      control:'select',
      options:AVAILABLE_TYPES,
    },
  },
}

export default meta

export const Base: StoryObj<typeof Component> = {
  args:{
    type        :'text',
    name        :'name',
    label       :'Your name',
    autoComplete:'name',
  },
}

export const WithDescription: StoryObj<typeof Component> = {
  args:{
    type        :'text',
    name        :'last_name',
    label       :'Your last name',
    description :'This is where we explain why this field is important',
    autoComplete:'name',
  },
}

export const Textarea: StoryObj<typeof Component> = {
  args:{
    type :'textarea',
    name :'blog_post',
    label:'Blog post content',
  },
}

export const Checkbox: StoryObj<typeof Component> = {
  args:{
    type :'checkbox',
    name :'newsletter_opt_in',
    label:'Newsletter opt-in',
  },
}

export const Select: StoryObj<typeof Component> = {
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

export const SimpleChoices: StoryObj<typeof Component> = {
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

export const SimpleChoicesMultiple: StoryObj<typeof Component> = {
  args:{
    ...SimpleChoices.args,
    name    :'favourite-colors-2',
    multiple:true,
  },
}

export const Choices: StoryObj<typeof Component> = {
  args:{
    ...SimpleChoices.args,
    name:'favourite-colors-3',
    type:'choices',
  },
}

export const ChoicesMultiple: StoryObj<typeof Component> = {
  args:{
    ...SimpleChoices.args,
    name    :'favourite-colors-4',
    type    :'choices',
    multiple:true,
  },
}
