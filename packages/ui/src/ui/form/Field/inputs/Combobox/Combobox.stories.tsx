/* @aztlan/generator-front 0.9.1 */

import {
  Meta, StoryObj,
} from '@storybook/react'
import * as decorators from 'story-utils/decorators.js'
import Component from './Combobox.js'

const meta: Meta<typeof Component> = {
  title     :'form/inputs/Combobox',
  component :Component,
  decorators:[
    decorators.relay,
    decorators.grid,
    decorators.form,
  ],
  //argTypes:{ backgroundColor: { control: 'color' } },
  /*
  parameters: {
    layout: 'centered|fullscreen|padded(default)',
  }, */
}

export default meta

export const Base: StoryObj<typeof Component> = {
  args:{
    name   :'color',
    label  :'Your favorite color',
    // openOnReset:true,
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
