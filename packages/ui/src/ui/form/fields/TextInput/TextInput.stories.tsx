/* @aztlan/generator-front 0.7.3 */
import * as React from 'react'

import {
  Meta, StoryFn,
} from '@storybook/react'
import * as decorators from 'story-utils/decorators.tsx'
import Component, { RawTextInput as RawComponent } from './TextInput.tsx'

export default {
  title     :'form/fields/TextInput',
  component :RawComponent,
  decorators:[decorators.form],
} as Meta<typeof RawComponent>

const Template: StoryFn<typeof Component> = function (args) {
  return <Component {...args} />
}

export const Base: StoryFn<typeof Component> = Template.bind({})
Base.args = {
  name :'name',
  label:'Your name',
}
