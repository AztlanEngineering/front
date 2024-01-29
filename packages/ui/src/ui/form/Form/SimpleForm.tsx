/* @aztlan/generator-front 0.9.0 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import {
  useForm, FormProvider,
} from 'react-hook-form'
import styleNames from '@aztlan/bem'
import type { TSimpleFormProps } from './types.js'
import { SimpleFormPropTypes } from './types.js'

import type { FieldProps } from '../Field/types.js'

import { Field } from '../Field/index.js'
import * as formPropTypes from '../Field/propTypes.js'

const baseClassName = styleNames.base
const componentClassName = 'form'

// TODO add propTypes and types using https://www.react-hook-form.com/ts/#RegisterOptions
/**
 * A simple form that uses react-hook-form and displays a fieldMap.
 * All props that are not-declared are passed to the useForm hook. Read more [here](https://www.react-hook-form.com/api/useform/)
 */
function SimpleForm({
  id,
  className: userClassName,
  style,
  fields,
  fieldProps: sharedFieldProps,
  ...otherProps
}: TSimpleFormProps): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const methods = useForm({
    mode:'onChange',
    // shouldUseNativeValidation:true,
    ...otherProps,
  })

  const onSubmit = (data) => console.log(
    '[FORM SUBMIT]', data,
  )

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        id={id}
        className={[
          baseClassName,
          componentClassName,
          userClassName,
          'grid',
        ]
          .filter((e) => e)
          .join(' ')}
        style={style}
      >
        {fields.map((fieldProps) => (
          <Field
            key={fieldProps.name}
            {...fieldProps as Partial<FieldProps>}
            {...sharedFieldProps as Partial<FieldProps>}
          />
        ))}
        <input
          type="submit"
          value="Print in console"
        />
      </form>
    </FormProvider>
  )
}

SimpleForm.propTypes = SimpleFormPropTypes

export default SimpleForm
