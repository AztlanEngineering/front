/* @aztlan/generator-front 0.4.0 */
// import * as React from 'react'

import { StoryObj } from '@storybook/react'
import * as decorators from 'story-utils/decorators.tsx'
import ThemeSwitcher from './ThemeSwitcher.tsx'

export default {
  title     :'common/ThemeSwitcher',
  component :ThemeSwitcher,
  decorators:[decorators.app],
}

export const Base: StoryObj = { args: {} }
