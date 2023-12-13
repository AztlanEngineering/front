/* @aztlan/generator-front 0.5.0 */
import * as React from 'react'

import FormInput from './FormInput.tsx'

export default {
  title: 'form/FormInput',
  component: FormInput,
  subcomponents: {
    // Item:FormInput.Item
  },
  decorators: [
    // storyfn => <div className="">{ storyfn() }</div>,
  ],
  argTypes: {
    type: { control: 'select', options: FormInput.allTypes },
  },
}

export const Base = {
  args: {
    type: 'text',
    label: 'Your name',
  },
}

export const Textarea = {
  args: {
    type: 'textarea',
    label: 'Blog post content',
  },
}

export const Select = {
  args: {
    type: 'select',
    label: 'Select your region',
  },
}

// export function Base() {
//  return <FormInput>Sample FormInput</FormInput>
// }
