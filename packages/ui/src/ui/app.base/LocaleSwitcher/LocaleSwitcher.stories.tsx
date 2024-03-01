/* @aztlan/generator-front 0.4.0 */
// import * as React from 'react'

import {
  Meta, StoryObj,
} from '@storybook/react'
import decorators from 'story-utils/decorators.js'
import Component from './LocaleSwitcher.js'

const meta: Meta<typeof Component> = {
  title     :'common/LocaleSwitcher',
  component :Component,
  decorators:[
    // decorators.components.IntlApp,
    decorators.components.Relay,
    decorators.components.Router,
  ],
}

export default meta

/*
export const Base: StoryObj<typeof Component> = {
  args:{
    locales:{
      en:'English',
      es:'Español',
      fr:'Français',
      ru:'Русский',
    },
  },
} */

export function Default(args) {
  return <h1>TODO: Implement</h1>
}
