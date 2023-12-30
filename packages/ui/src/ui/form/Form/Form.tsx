/* @aztlan/generator-front 0.9.0 */
import * as React from 'react'
import {
  useInsertionEffect, useMemo,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import {
  useForm, FormProvider,
} from 'react-hook-form'
import { useSections } from '@aztlan/react-helpers'
import styleNames from '@aztlan/bem'

import Context from './Context.ts'
import Navigation from './common/Navigation.tsx'
import Content from './common/Content.tsx'

import * as formPropTypes from '../Field/propTypes.ts'

const baseClassName = styleNames.base
const componentClassName = 'form'

/**
 * This is the component description.
 */
function Form({
  id,
  className: userClassName,
  style,
  children,
  items,
  fieldProps: sharedFieldProps,
  type: formType = 'default',

  ...otherProps
}: InferProps<typeof Form.propTypes>): React.ReactElement {
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

  const sectionsProps = useSections(items)

  const contextValue = useMemo(
    () => ({
      ...sectionsProps,
      sharedFieldProps,
      type:formType,
    }),
    [
      sectionsProps,
      sharedFieldProps,
      formType,
    ],
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
        <Context.Provider value={contextValue}>
          {children}
          <input
            type="submit"
            value="Print in console"
          />
        </Context.Provider>
      </form>
    </FormProvider>
  )
}

Form.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The children JSX */
  children:PropTypes.node,

  /** Whether the form is multipart or not */
  type:PropTypes.oneOf([
    'default',
    'multipart',
  ]),

  /** An object of field props that will be applied to all the fields */
  fieldProps:PropTypes.shape({
    ...formPropTypes.wrapperShared,
    ...formPropTypes.inputShared, // Kinda
  }),

  /** The form sections to be rendered */
  /* eslint-disable-next-line react/forbid-prop-types */
  items:PropTypes.arrayOf(PropTypes.object),
}

Form.Navigation = Navigation
Form.Content = Content

export default Form
