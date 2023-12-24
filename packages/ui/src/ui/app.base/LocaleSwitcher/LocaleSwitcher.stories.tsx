/* @aztlan/generator-front 0.4.0 */
import * as React from 'react'

import { StoryObj } from '@storybook/react'
import * as decorators from 'story-utils/decorators.tsx'
import LocaleSwitcher from './LocaleSwitcher.tsx'

export default {
  title     :'common/LocaleSwitcher',
  component :LocaleSwitcher,
  decorators:[decorators.intlApp],
  // argTypes  :{ backgroundColor: { control: 'color' } },
}

export const Base: StoryObj = { args: {} }
