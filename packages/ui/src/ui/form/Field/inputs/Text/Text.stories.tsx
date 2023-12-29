/* @aztlan/generator-front 0.8.0 */
import {
  Meta, StoryObj,
} from '@storybook/react'
import * as decorators from 'story-utils/decorators.tsx'
import Component from './Text.tsx'

export default {
  title     :'form/inputs/Text',
  component :Component,
  decorators:[
    decorators.grid,
    decorators.form,
  ],
  argTypes:{ backgroundColor: { control: 'color' } },
  /*
  parameters: {
    layout: 'centered|fullscreen|padded(default)',
  }, */
} as Meta<typeof Component>

export const Base: StoryObj<typeof Component> = {
  args:{
    type        :'text',
    name        :'name',
    label       :'Your name',
    placeholder :'John Doe',
    autoComplete:'name',
    description :'please enter your name. It will be associated with your account.',
  },
}

export const Optional: StoryObj<typeof Component> = {
  args:{
    type        :'text',
    name        :'handle',
    label       :'Your handle',
    placeholder :'@handle',
    optional    :true,
    autoComplete:'username',
  },
}

export const Disabled: StoryObj<typeof Component> = {
  args:{
    type        :'text',
    name        :'object-id',
    label       :'Object id',
    placeholder :'5f9d7a9a0f0b7a0f0b7a0f0b',
    disabled    :true,
    autoComplete:'off',
  },
}
