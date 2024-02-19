/* @aztlan/generator-front 0.4.0 */
import * as React from 'react'
import { useCallback } from 'react'
import {
  defineMessages, useIntl,
} from 'react-intl'
import {
  SimpleForm,
  addGraphQLOptions,
  withErrorHandling,
  addGraphQLValidation,
} from '@aztlan/ui'
import { useMutation } from 'react-relay'
import { graphql } from 'relay-runtime'
import Template from '../../common/templates/Base.js'

/*
const QUERY_LOAD_FRUIT_OPTIONS = graphql`
  query FileUploadFruitsQuery {
    fruits {
      value
      label
      disabled
    }
  }
` */

const MUTATION_UPLOAD_FILE = graphql`
  mutation FileUploadMutation($input: FileInput!) {
    upload3(input: $input) {
      success
    }
  }
`

const m = defineMessages({
  title:{
    // id: `${messagesPrefix}.title`,
    defaultMessage:'File Upload',
  },
  welcome:{
    description   :'Message to greet the user.',
    defaultMessage:'Welcome to the site, {name}!!!',
  },
})

function FileUpload() {
  const { formatMessage } = useIntl()
  const [
    commit,
    isInFlight,
  ] = useMutation(MUTATION_UPLOAD_FILE)

  const onSubmit = useCallback(
    (data) => {
      alert(JSON.stringify(
        data, null, 2,
      ))
      const input = { file: data.image?.[0] }
      console.log(
        'Data transform happening on commit', data, input,
      )
      commit({
        variables:{ input: { file: data.image[0] } },
        // uploadables:{ file: data.image[0] },
        // onCompleted,
      })
    },
    [commit],
  )

  return (
    <Template title={formatMessage(m.title)}>
      <h2 className="container">Form Test</h2>
      <SimpleForm
        className="container"
        defaultValues={{ fruits2: 'watermelon' }}
        onSubmit={onSubmit}
        fieldProps={{
          spanLabel         :6,
          spanLabelDesktop  :3,
          spanContent       :8,
          spanContentDesktop:5,
        }}
        fields={[
          {
            name        :'name',
            label       :'Your name',
            autoComplete:'name',
          },
          {
            name              :'image',
            label             :'Image',
            type              :'file',
            acceptContentTypes:[
              'image/png',
              'image/jpeg',
              'image/webp',
            ],
            sizeLimit:1024 * 1024 * 1,
          },
        ]}
      />
    </Template>
  )
}

export default FileUpload
