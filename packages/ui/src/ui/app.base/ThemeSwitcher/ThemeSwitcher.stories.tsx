/* @aztlan/generator-front 0.4.0 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
import decorators from 'story-utils/decorators.js'
import Component from './ThemeSwitcher.js'

const meta: Meta<typeof Component> = {
  title     :'common/ThemeSwitcher',
  component :Component,
  decorators:[
    // decorators.components.Application,
    decorators.components.Router,
    decorators.components.Relay,
  ],
}

export default meta

// export const Base: StoryObj<typeof Component> = { args: {} }

export function Default(args) {
  return <h1>TODO: Implement</h1>
}
