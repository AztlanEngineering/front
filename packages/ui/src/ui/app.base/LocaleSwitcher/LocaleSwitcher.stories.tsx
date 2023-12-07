/* @aztlan/generator-front 0.4.0 */
import * as React from 'react'

// import { decorators } from '@aztlan/storybook-helpers'
import * as decorators from 'storybook/decorators'
import LocaleSwitcher from './LocaleSwitcher'

export default {
  title: 'common/LocaleSwitcher',
  component: LocaleSwitcher,
  subcomponents: {
    // Item:LocaleSwitcher.Item
  },
  decorators: [
    decorators.intlApp,
    // storyfn => <div className="">{ storyfn() }</div>,
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export function Base() {
  return <LocaleSwitcher />
}
