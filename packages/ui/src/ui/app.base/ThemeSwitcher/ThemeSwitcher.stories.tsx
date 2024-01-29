/* @aztlan/generator-front 0.4.0 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
import * as decorators from 'story-utils/decorators.js'
import Component from './ThemeSwitcher.js'

const meta: Meta<typeof Component> = {
  title     :'common/ThemeSwitcher',
  component :Component,
  decorators:[decorators.app],
}

export default meta

export const Base: StoryObj<typeof Component> = { args: {} }
