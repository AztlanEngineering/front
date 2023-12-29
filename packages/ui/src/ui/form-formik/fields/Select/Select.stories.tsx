/* @aztlan/generator-front 0.7.3 */
import * as React from 'react'

import {
  Meta, StoryFn,
} from '@storybook/react'
import * as decorators from 'story-utils/decorators.tsx'
import { graphql } from 'react-relay'
import Component, { RawSelect as RawComponent } from './Select.tsx'
import { addGraphQLOptions } from '../../extensions/index.ts'

export default {
  title     :'form-formik/fields/Select',
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
}

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
}
