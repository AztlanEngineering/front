/* @aztlan/generator-front 0.4.0 */
import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
import * as decorators from 'story-utils/decorators.tsx'
import Component from './LocaleSwitcher.tsx'

export default {
  title     :'common/LocaleSwitcher',
  component :Component,
  decorators:[decorators.intlApp],
} as Meta<typeof Component>

export const Base: StoryObj<typeof Component> = { args: {} }
