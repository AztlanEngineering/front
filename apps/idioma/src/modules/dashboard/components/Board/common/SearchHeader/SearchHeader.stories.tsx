/* @aztlan/generator-front 3.1.2 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
// import { Meta, StoryFn } from '@storybook/react'
import decorators from '../../../../../../decorators.js'
import Component from './SearchHeader.js'

const meta: Meta<typeof Component> = {
  title     :'common/Board/SearchHeader',
  component :Component,
  decorators:[
    decorators.components.Relay,
    decorators.components.Router,
    // decorators.app,
    // storyfn => <div className="">{ storyfn() }</div>,
  ],
  /*
  parameters: {
    layout: 'centered|fullscreen|padded(default)',
  }, */
}

export default meta

export const Base: StoryObj<typeof Component> = { args: { children: 'Sample SearchHeader' } }
