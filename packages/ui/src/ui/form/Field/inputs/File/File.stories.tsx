/* @aztlan/generator-front 1.6.0 */
import {
  Meta, StoryObj,
} from '@storybook/react'
import decorators from 'story-utils/decorators.js'
import Component from './File.js'

const meta: Meta<typeof Component> = {
  title     :'form/inputs/File',
  component :Component,
  decorators:[
    decorators.components.Grid,
    decorators.components.Form,
  ],
  // argTypes:{ backgroundColor: { control: 'color' } },
}

export default meta

export const Base: StoryObj<typeof Component> = {
  args:{
    name       :'file',
    label      :'File',
    // placeholder:'',
    description:'Your file here',
  },
}

export const AcceptContentTypes: StoryObj<typeof Component> = {
  args:{
    name              :'image-upload',
    label             :'Image',
    // placeholder:'',
    description       :'Post your image here',
    acceptContentTypes:[
      'image/png',
      'image/jpeg',
      'image/webp',
    ],
  },
}

export const SizeLimit: StoryObj<typeof Component> = {
  args:{
    name     :'file-size-limit',
    label    :'File Upload',
    sizeLimit:1024 * 1024 * 1,
  },
}
