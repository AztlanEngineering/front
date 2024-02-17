import { InferProps } from 'prop-types'
import * as formPropTypes from './propTypes.js'

// We will change the previous list of imports to this template
import type { TProps as CheckboxProps } from './inputs/Checkbox/types.js'
import type { TProps as ChoicesProps } from './inputs/Choices/types.js'
import type { TProps as ComboboxProps } from './inputs/Combobox/types.js'
import type { TProps as FileProps } from './inputs/File/types.js'
import type { TProps as HiddenProps } from './inputs/Hidden/types.js'
import type { TProps as SelectProps } from './inputs/Select/types.js'
import type { TProps as SimpleChoicesProps } from './inputs/SimpleChoices/types.js'
import type { TProps as TextProps } from './inputs/Text/types.js'
import type { TProps as TextareaProps } from './inputs/Textarea/types.js'

export type UnionInputProps =
  | CheckboxProps
  | ChoicesProps
  | ComboboxProps
  | FileProps
  | HiddenProps
  | TextProps
  | TextareaProps
  | SelectProps
  | SimpleChoicesProps

export type FieldProps = UnionInputProps &
InferProps<typeof formPropTypes.Field> &
InferProps<typeof formPropTypes.globalType> & {
  className?:string;
}
