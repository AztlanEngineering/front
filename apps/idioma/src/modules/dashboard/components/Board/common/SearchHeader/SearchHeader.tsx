/* @aztlan/generator-front 1.8.1 */
import * as React from 'react'
import {
  useInsertionEffect, useEffect,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import {
  FormProvider, useForm, useFormContext,
} from 'react-hook-form'
import {
  generatePath, useHistory,
} from 'react-router-dom'

import styleNames from '@aztlan/bem'
import {
  NavigationHeader,
  Field,
  addGraphQLComboboxSearchOptions,
} from '@aztlan/ui'
import { useOrganizationContext } from '../../hooks/index.js'

const baseClassName = styleNames.base
const componentClassName = 'search-header'

/**
 * description
 * @param {InferProps<typeof SearchHeader.propTypes>} props -
 * @returns {React.ReactElement} - Rendered SearchHeader
 */
function RawSearchHeader({
  id,
  className: userClassName,
  style,
  QUERY,
  accessor,
}: // ...otherProps

InferProps<typeof RawSearchHeader.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )
  const { baseOrganizationPath } = useOrganizationContext()

  const { watch } = useFormContext()
  const value = watch('search')
  const history = useHistory()
  useEffect(
    () => {
      if (value?.length > 2) {
        history.push(generatePath(
          baseOrganizationPath, { organization: value },
        ))
      }
    }, [value],
  )

  return (
    <NavigationHeader
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      left={<strong>*organization</strong>}
      // {...otherProps}
    >
      <div className="grid container">
        <Field
          name="search"
          type="combobox"
          optional
          spanLabel={3}
          spanLabelDesktop={3}
          spanContent={4}
          spanContentDesktop={4}
          extensions={[
            addGraphQLComboboxSearchOptions(
              QUERY, accessor, {
                minLength:2,
                transform:(data) => data.edges.map((edge) => ({
                  label:edge.node.name,
                  value:edge.node.url,
                })),
              },
            ),
          ]}
          options={[
            {
              label   :'Start typing to search',
              value   :'1',
              disabled:true,
            },
          ]}
        />
      </div>
    </NavigationHeader>
  )
}

RawSearchHeader.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The GraphQL query for the search */
  QUERY:PropTypes.object.isRequired,

  /** The accessor for the search */
  accessor:PropTypes.string.isRequired,
}

function SearchHeader(props) {
  const methods = useForm({
    mode:'onChange',
    // shouldUseNativeValidation:true,
    // ...otherProps,
  })

  return (
    <FormProvider {...methods}>
      <RawSearchHeader {...props} />
    </FormProvider>
  )
}

export default SearchHeader
