/* @aztlan/generator-front 0.7.3 */
import * as React from 'react'

import {
  Meta, StoryFn,
} from '@storybook/react'
import * as decorators from 'story-utils/decorators.tsx'
import Component, { RawTextarea as RawComponent } from './Textarea.tsx'

export default {
  title     :'form-formik/fields/Textarea',
  component :RawComponent,
  decorators:[
    decorators.grid,
    decorators.formik,
  ],
} as Meta<typeof RawComponent>

const Template: StoryFn<typeof Component> = function (args) {
  return <Component {...args} />
}

export const Base: StoryFn<typeof Component> = Template.bind({})
Base.args = {
  name :'description',
  label:'Your description',
}
