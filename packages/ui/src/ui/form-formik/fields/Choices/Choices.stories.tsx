/* @aztlan/generator-front 0.7.3 */
import * as React from 'react'

import {
  Meta, StoryFn,
} from '@storybook/react'
import * as decorators from 'story-utils/decorators.tsx'
import Component, { RawChoices as RawComponent } from './Choices.tsx'

export default {
  title     :'form-formik/fields/Choices',
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
  name   :'name',
  label  :'Your name',
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
}
