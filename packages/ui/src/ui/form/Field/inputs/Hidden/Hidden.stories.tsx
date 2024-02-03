/* @aztlan/generator-front 0.8.0 */
import {
  Meta, StoryObj,
} from '@storybook/react'
import * as decorators from 'story-utils/decorators.js'
import Component from './Hidden.js'

const defaultValues = { latitude: '23.4' }

const meta: Meta<typeof Component> = {
  title     :'form/inputs/Hidden',
  component :Component,
  decorators:[
    decorators.grid,
    decorators.getFormDecorator(defaultValues),
  ],
  // argTypes:{ backgroundColor: { control: 'color' } },
}

export default meta

export const Base: StoryObj<typeof Component> = {
  args:{
    name :'latitude',
    label:'This label should not display',
  },
}

/*
export const Base: StoryFn<typeof Component> = () => (
  <Component>Sample Hidden</Component>
)
*/

/*
const Template: StoryFn<typeof Component> = (args) => <Hidden {...args} />

export const Base: StoryFn<typeof Component> = Template.bind({})
Base.args = {
  children:'Sample Button',
} */
