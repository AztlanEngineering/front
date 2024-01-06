/* @aztlan/generator-front 0.9.1 */

import {
  Meta, StoryObj,
} from '@storybook/react'
import * as decorators from 'story-utils/decorators.tsx'
import Component from './Combobox.tsx'

export default {
  title     :'form/inputs/Combobox',
  component :Component,
  decorators:[
    decorators.relay,
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
    name       :'color',
    label      :'Your favorite color',
    openOnReset:true,
    options    :[
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
