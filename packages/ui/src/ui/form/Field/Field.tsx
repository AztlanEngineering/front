/* @aztlan/generator-front 0.8.0 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import styleNames from '@aztlan/bem'
import { AVAILABLE_TYPES } from './constants.ts'
import * as formPropTypes from './propTypes.ts'

import {
  Checkbox,
  Text,
  Textarea,
  Select,
  SimpleChoices,
  Choices,
} from './inputs/index.ts'

type UnionInputProps =
  | React.ComponentProps<typeof Checkbox>
  | React.ComponentProps<typeof Text>
  | React.ComponentProps<typeof Textarea>
  | React.ComponentProps<typeof Select>
  | React.ComponentProps<typeof SimpleChoices>
  | React.ComponentProps<typeof Choices>

type FieldProps = UnionInputProps & { type: typeof AVAILABLE_TYPES[number] }

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
  ...formPropTypes.Field,
  ...formPropTypes.Wrapper,
}

export default Field
