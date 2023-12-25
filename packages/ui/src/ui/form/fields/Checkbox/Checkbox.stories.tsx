/* @aztlan/generator-front 0.7.3 */
import * as React from 'react'

import {
  Meta, StoryFn,
} from '@storybook/react'
import * as decorators from 'story-utils/decorators.tsx'
import Component, { RawCheckbox as RawComponent } from './Checkbox.tsx'

export default {
  title     :'form/fields/Checkbox',
  component :RawComponent,
  decorators:[
    decorators.grid,
    decorators.form,
  ],
} as Meta<typeof RawComponent>

const Template: StoryFn<typeof Component> = function (args) {
  return <Component {...args} />
}

export const Base: StoryFn<typeof Component> = Template.bind({})
Base.args = {
  name :'newsletter',
  label:'Subscribe to the newsletter ?',
}
