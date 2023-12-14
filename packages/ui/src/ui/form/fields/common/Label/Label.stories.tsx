/* @aztlan/generator-front 0.5.0 */
import * as React from 'react'

// import { Label } from 'ui'
import Label from './Label.tsx'

export default {
  title: 'form/fields/common/Label',
  component: Label,
  subcomponents: {
    // Item:Label.Item
  },
  decorators: [
    // storyfn => <div className="">{ storyfn() }</div>,
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Base = {
  args: {
    name: 'name',
    children: 'Your name',
  },
}

export const Optional = {
  args: {
    name: 'name',
    children: 'Your name',
    optional: true,
  },
}

export const As = {
  args: {
    name: 'name',
    children: 'Your name',
    as: 'h2',
  },
}

export const NoChildren = {
  args: {
    name: 'name',
  },
}
