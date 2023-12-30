/* @aztlan/generator-front 0.9.0 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import {
  useForm, FormProvider,
} from 'react-hook-form'
import styleNames from '@aztlan/bem'

import { Field } from '../Field/index.ts'
import * as formPropTypes from '../Field/propTypes.ts'

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
}: InferProps<typeof SimpleForm.propTypes>): React.ReactElement {
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
            {...fieldProps}
            {...sharedFieldProps}
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

SimpleForm.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The fields to be rendered */
  fields:PropTypes.arrayOf(PropTypes.shape(Field.propTypes)),

  /** An object of field props that will be applied to all the fields */
  fieldProps:PropTypes.shape({
    ...formPropTypes.wrapperShared,
    ...formPropTypes.inputShared, // Kinda
  }),
}

export default SimpleForm
