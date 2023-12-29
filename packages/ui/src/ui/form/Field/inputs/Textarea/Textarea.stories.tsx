/* @aztlan/generator-front 0.8.0 */
import {
  Meta, StoryObj,
} from '@storybook/react'
import * as decorators from 'story-utils/decorators.tsx'
import Component from './Textarea.tsx'

export default {
  title     :'form/inputs/Textarea',
  component :Component,
  decorators:[
    decorators.grid,
    decorators.form,
  ],
  argTypes:{ backgroundColor: { control: 'color' } },
} as Meta<typeof Component>

export const Base: StoryObj<typeof Component> = {
  args:{
    name       :'blog-post',
    label      :'Your blog post',
    rows       :7,
    placeholder:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.',
    description:'This is a textarea where you can type the content of your article.',
  },
}

export const Disabled: StoryObj<typeof Component> = {
  args:{
    name       :'idea',
    label      :'Write some idea here',
    placeholder:'This input is disabled.',
    disabled   :true,
  },
}

/*
export const Base: StoryFn<typeof Component> = () => (
  <Component>Sample Textarea</Component>
)
*/

/*
const Template: StoryFn<typeof Component> = (args) => <Textarea {...args} />

export const Base: StoryFn<typeof Component> = Template.bind({})
Base.args = {
  children:'Sample Button',
} */
