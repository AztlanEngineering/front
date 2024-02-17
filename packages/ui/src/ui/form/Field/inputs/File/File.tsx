/* @aztlan/generator-front 1.6.0 */
import * as React from 'react'
import {
  useInsertionEffect, useMemo,
} from 'react'

import { useFormContext } from 'react-hook-form'
import styleNames from '@aztlan/bem'
import { propTypes } from './types.js'
import type { TProps } from './types.js'

import withWrapper from '../../wrapper/withWrapper.js'

const baseClassName = styleNames.base
const componentClassName = 'file'

/*
const contentTypeMap = {
  'image/png': 'png',
  'image/jpeg': 'jpeg',
  'image/webp': 'webp',
} */

/**
 * Validates the file size.
 * @param {FileList} fileList - The files selected by the user.
 * @returns {string | true} - Returns true if the file size is valid,
 * otherwise returns an error message.
 */
const validateFileSize = (
  fileList, sizeLimit,
) => {
  if (fileList.length > 0 && fileList[0].size > sizeLimit) {
    return `File size should not exceed ${sizeLimit / 1024 / 1024}MB`
  }
  return true
}

/**
 * Validates the file content type.
 * @param {FileList} fileList - The files selected by the user.
 * @param {string[]} acceptContentTypes - The acceptable content types.
 * @returns {string | true} - Returns true if the content type is valid,
 * otherwise returns an error message.
 */
const validateContentType = (
  fileList, acceptContentTypes,
) => {
  if (fileList.length > 0 && !acceptContentTypes.includes(fileList[0].type)) {
    return `Invalid file type. Allowed types are: ${acceptContentTypes.join(', ')}`
  }
  return true
}

/**
 * description
 * @param {InferProps<typeof File.propTypes>} props -
 * @returns {React.ReactElement} - Rendered File
 */
function File({
  className: userClassName,
  style,
  name,
  acceptContentTypes,
  sizeLimit = 5 * 1024 * 1024, // 5MB
  registerProps:userRegisterProps,
  // ...otherProps

}: TProps): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const accept = useMemo(
    () => acceptContentTypes?.join(', '), [acceptContentTypes],
  )

  const { register } = useFormContext()

  const registerProps = useMemo(
    () => {
      const props = userRegisterProps || {}
      const validate = props.validate || {}
      if (acceptContentTypes) {
        validate.validateContentType = (fileList) => validateContentType(
          fileList, acceptContentTypes,
        )
      }
      if (sizeLimit) {
        validate.validateFileSize = (fileList) => validateFileSize(
          fileList, sizeLimit,
        )
      }
      return {
        ...props,
        validate,
      }
    },
    [
      userRegisterProps,
      acceptContentTypes,
      sizeLimit,
    ],
  )

  return (
    <div
      className={[

        baseClassName,

        componentClassName,
        userClassName,
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      <input
        type="file"
        {...register(
          name, registerProps,
        )}
        accept={accept}
      />
    </div>
  )
}

File.propTypes = propTypes

export default withWrapper(File)
