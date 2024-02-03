/* @aztlan/generator-front 0.8.0 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import styleNames from '@aztlan/bem'
import * as formPropTypes from './propTypes.js'
import type { FieldProps } from './types.js'

import {
  Checkbox,
  Combobox,
  Hidden,
  Text,
  Textarea,
  Select,
  SimpleChoices,
  Choices,
} from './inputs/index.js'

// Local Definitions

const baseClassName = styleNames.base

const componentClassName = 'input'

/**
 * This is the component description.
 */
function Field({
  className: userClassName,
  type: inputType = 'text',
  ...otherProps
}: FieldProps): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const className = [
    baseClassName,
    userClassName,
    componentClassName,
  ]
    .filter(Boolean)
    .join(' ')

  const fieldProps = {
    ...otherProps,
    className,
  }

  switch (inputType) {
    case 'textarea':
      return <Textarea {...fieldProps} />
    case 'select':
      return <Select {...fieldProps} />
    case 'checkbox':
      return <Checkbox {...fieldProps} />
    case 'simple-choices':
      return <SimpleChoices {...fieldProps} />
    case 'choices':
      return <Choices {...fieldProps} />
    case 'combobox':
      return <Combobox {...fieldProps} />
    case 'hidden':
      return <Hidden {...fieldProps} />
    case 'custom':
      return <otherProps.Component {...fieldProps} />
    default:
      return (
        <Text
          type={inputType}
          {...fieldProps}
        />
      )
  }
}

Field.propTypes = {
  ...formPropTypes.globalType,
  ...formPropTypes.Field,
  ...formPropTypes.Wrapper,
}

export default Field
