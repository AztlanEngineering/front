/* @aztlan/generator-front 0.4.0 */
import * as React from 'react'

// import { decorators } from '@aztlan/storybook-helpers'
import * as decorators from 'storybook/decorators'
import ThemeSwitcher from './ThemeSwitcher'

export default {
  title: 'common/ThemeSwitcher',
  component: ThemeSwitcher,
  subcomponents: {
    // Item:ThemeSwitcher.Item
  },
  decorators: [
    decorators.app,
    // storyfn => <div className="">{ storyfn() }</div>,
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export function Base() {
  return <ThemeSwitcher />
}
