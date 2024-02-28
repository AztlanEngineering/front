/* @aztlan/generator-front 0.4.0 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
import * as decorators from 'story-utils/decorators.js'
import Component from './LocaleSwitcher.js'

const meta: Meta<typeof Component> = {
  title     :'common/LocaleSwitcher',
  component :Component,
  decorators:[
    decorators.intlApp,
    decorators.relay,
  ],
}

export default meta

export const Base: StoryObj<typeof Component> = {
  args:{
    locales:{
      en:'English',
      es:'Español',
      fr:'Français',
      ru:'Русский',
    },
  },
}
