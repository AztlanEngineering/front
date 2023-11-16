/* @aztlan/generator-front 0.4.0 */
import * as React from 'react'

import { decorators } from '@aztlan/storybook-helpers'
import ThemeSwitcher from './ThemeSwitcher.tsx'

export default {
  title: 'common/ThemeSwitcher',
  component: ThemeSwitcher,
  subcomponents: {
    // Item:ThemeSwitcher.Item
  },
  decorators: [
    decorators.relay,
    // storyfn => <div className="">{ storyfn() }</div>,
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export function Base() {
  return <ThemeSwitcher />
}
