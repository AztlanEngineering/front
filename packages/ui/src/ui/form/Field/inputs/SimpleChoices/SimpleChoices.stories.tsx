/* @aztlan/generator-front 0.7.3 */
import {
  Meta, StoryObj,
} from '@storybook/react'
import decorators from 'story-utils/decorators.js'
import Component from './SimpleChoices.js'

const meta: Meta<typeof Component> = {
  title     :'form/inputs/SimpleChoices',
  component :Component,
  decorators:[
    decorators.components.Grid,
    decorators.components.Form,
  ],
}

export default meta

export const Base: StoryObj<typeof Component> = {
  args:{
    name       :'color',
    label      :'Favourite color',
    description:'This is a select where you can choose your favourite color.',
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

export const Multiple: StoryObj<typeof Component> = {
  args:{
    name       :'color2',
    label      :'Favourite color',
    description:'This is a select where you can choose your favourite color.',
    multiple   :true,
    options    :[
      {
        value:'purple',
        label:'Purple',
      },
      {
        value:'pink',
        label:'Pink',
      },
      {
        value:'orange',
        label:'Orange',
      },
      {
        value:'brown',
        label:'Brown',
      },
    ],
  },
}

export const DisabledInput: StoryObj<typeof Component> = {
  args:{
    name    :'region',
    label   :'Region',
    disabled:true,
    options :[
      {
        value:'north',
        label:'North',
      },
      {
        value:'south',
        label:'South',
      },
    ],
  },
}

export const DisabledValue: StoryObj<typeof Component> = {
  args:{
    name   :'region-2',
    label  :'Region',
    options:[
      {
        value:'north',
        label:'North',
      },
      {
        value   :'south',
        label   :'South',
        disabled:true,
      },
      {
        value:'east',
        label:'East',
      },
      {
        value:'west',
        label:'West',
      },
    ],
  },
}
