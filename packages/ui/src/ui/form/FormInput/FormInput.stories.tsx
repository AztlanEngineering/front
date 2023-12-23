/* @aztlan/generator-front 0.5.0 */
import * as React from 'react'

import { Formik } from 'formik'
import FormInput from './FormInput.tsx'
import { allTypes } from '../constants.ts'
import Debugger from '../Debugger.ts'

function validateEmail(value) {
  let error
  if (!value) {
    error = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address'
  }
  return error
}

export default {
  title     :'form/FormInput',
  component :FormInput,
  decorators:[
    (StoryFn) => <div className="grid">{StoryFn()}</div>,
    (StoryFn) => (
      <Formik
        initialValues={
          {
            // email: 'test',
          }
        }
      >
        <>
          {StoryFn()}
          <Debugger />
        </>
      </Formik>
    ),
    // storyfn => <div className="">{ storyfn() }</div>,
  ],
  argTypes:{
    type:{
      control:'select',
      options:allTypes,
    },
  },
}

export const Base = {
  args:{
    type :'text',
    name :'name',
    label:'Your name',
  },
}

export const WithDescription = {
  args:{
    type       :'text',
    name       :'last_name',
    label      :'Your last name',
    description:'This is where we explain why this field is important',
  },
}

export const WithValidation = {
  args:{
    type       :'email',
    name       :'email',
    label      :'Your email',
    validate   :validateEmail,
    description:'Your email will be used as your login credential.',
  },
}

export const Textarea = {
  args:{
    type :'textarea',
    name :'blog_post',
    label:'Blog post content',
  },
}

export const Checkbox = {
  args:{
    type :'checkbox',
    name :'newsletter_opt_in',
    label:'Newsletter opt-in',
  },
}

export const Select = {
  args:{
    type   :'select',
    name   :'region',
    label  :'Select your region',
    options:[
      {
        value:'north',
        label:'North',
      },
      {
        value:'south',
        label:'South',
      },
      {
        value   :'east',
        label   :'East',
        disabled:true,
      },
      {
        value:'west',
        label:'West',
      },
    ],
  },
}

export const SimpleChoices = {
  args:{
    type   :'simple-choices',
    name   :'favourite-colors',
    label  :'Select your favourite color',
    options:[
      {
        value:'red',
        label:'Red',
      },
      {
        value:'green',
        label:'Green',
      },
      {
        value:'blue',
        label:'Blue',
      },
      {
        value:'yellow',
        label:'Yellow',
      },
    ],
  },
}

export const SimpleChoicesMultiple = {
  args:{
    ...SimpleChoices.args,
    multiple:true,
  },
}

export const Choices = {
  args:{
    ...SimpleChoices.args,
    type:'choices',
  },
}

export const ChoicesMultiple = {
  args:{
    ...SimpleChoices.args,
    type    :'choices',
    multiple:true,
  },
}

// export function Base() {
//  return <FormInput>Sample FormInput</FormInput>
// }
