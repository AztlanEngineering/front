/* @aztlan/generator-front 0.7.3 */
import {
  Meta, StoryObj,
} from '@storybook/react'
import * as decorators from 'story-utils/decorators.js'
import Component from './Checkbox.js'

const meta: Meta<typeof Component> = {
  title     :'form/inputs/Checkbox',
  component :Component,
  decorators:[
    decorators.grid,
    decorators.form,
  ],
}

export default meta

export const Base: StoryObj<typeof Component> = {
  args:{
    name       :'opt-in',
    label      :'Sign up for newsletter',
    description:'Do you wish to receive our newsletter? It will only be sent on rare occasions.',
  },
}

export const Disabled: StoryObj<typeof Component> = {
  args:{
    name       :'beta',
    label      :'Register for beta testing',
    description:'This feature is not yet available',
    disabled   :true,
  },
}
