/* @aztlan/generator-front 0.7.3 */
import {
  Meta, StoryObj,
} from '@storybook/react'
import * as decorators from 'story-utils/decorators.tsx'
// import { graphql } from 'react-relay'
import Component from './Select.tsx'
// import { addGraphQLOptions } from '../../extensions/index.ts'

export default {
  title     :'form/inputs/Select',
  component :Component,
  decorators:[
    decorators.grid,
    decorators.form,
  ],
} as Meta<typeof Component>

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

/*
export const Extensions: StoryFn<typeof Component> = Template.bind({})
Extensions.args = {
  name   :'color',
  label  :'Favourite color',
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
  extensions:[
    addGraphQLOptions(graphql`
      query SelectFruitOptionsQuery {
        fruits {
          value
          label
          disabled
        }
      }
    `),
    'fruits',
    {
      variables   :{},
      errorMessage:'Error fetching colors',
    },
  ],
} */
