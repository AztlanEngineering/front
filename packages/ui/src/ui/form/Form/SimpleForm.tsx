/* @aztlan/generator-front 0.9.0 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import styleNames from '@aztlan/bem'
import {
  useForm, FormProvider,
} from 'react-hook-form'

import { Field } from '../Field/index.ts'
import Wrapper from '../Field/wrapper/Wrapper.tsx'
import { sharedWrapperPropTypes } from '../Field/propTypes.ts'

// Local Definitions

const baseClassName = styleNames.base

const componentClassName = 'form'

/**
 * This is the component description.
 */
function SimpleForm({
  id,
  className: userClassName,
  style,
  fields,
  fieldProps: sharedFieldProps,
}: // ...otherProps
InferProps<typeof SimpleForm.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const methods = useForm({ mode: 'onChange' })
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
  fieldProps:PropTypes.shape(sharedWrapperPropTypes),
}

export default SimpleForm
