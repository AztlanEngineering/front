/* @aztlan/generator-front 0.5.0 */
import * as React from 'react'

import { Formik } from 'formik'
import FormInput from './FormInput.tsx'

export default {
  title: 'form/FormInput',
  component: FormInput,
  subcomponents: {
    // Item:FormInput.Item
  },
  decorators: [
    (StoryFn) => <div className="grid">{StoryFn()}</div>,
    (StoryFn) => <Formik initialValues={{}}>{StoryFn()}</Formik>,
    // storyfn => <div className="">{ storyfn() }</div>,
  ],
  argTypes: {
    type: { control: 'select', options: FormInput.allTypes },
  },
}

export const Base = {
  args: {
    type: 'text',
    name: 'name',
    label: 'Your name',
  },
}

export const Textarea = {
  args: {
    type: 'textarea',
    name: 'blog_post',
    label: 'Blog post content',
  },
}

export const Select = {
  args: {
    type: 'select',
    name: 'region',
    label: 'Select your region',
  },
}

// export function Base() {
//  return <FormInput>Sample FormInput</FormInput>
// }
