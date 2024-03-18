/* @aztlan/generator-front 0.4.0 */
import * as React from 'react'
import {
  defineMessages, useIntl,
} from 'react-intl'
import {
  SimpleForm,
  addGraphQLOptions,
  addGraphQLComboboxSearchOptions,
  addEditable,
  withErrorHandling,
  addGraphQLValidation,
} from '@aztlan/ui'
import { graphql } from 'relay-runtime'
import Template from '../../common/templates/Base.js'

const QUERY_LOAD_FRUIT_OPTIONS = graphql`
  query FormTestFruitsQuery {
    fruits {
      value
      label
      disabled
    }
  }
`
const QUERY_USERNAME_AVAILABILITY = graphql`
  query FormTestValidationQuery($value: String!) {
    isUsernameAvailable(value: $value)
  }
`
const QUERY_SEARCH_FRUITS_OPTIONS = graphql`
  query FormTestSearchFruitsQuery($value: String!) {
    searchFruits(search: $value) {
      value
      label
      disabled
    }
  }
`

const m = defineMessages({
  title:{
    // id: `${messagesPrefix}.title`,
    defaultMessage:'Homepage',
  },
  welcome:{
    description   :'Message to greet the user.',
    defaultMessage:'Welcome to the site, {name}!!!',
  },
})

function FormTest() {
  const { formatMessage } = useIntl()
  return (
    <Template title={formatMessage(m.title)}>
      <h2 className="container">Form Test</h2>
      <SimpleForm
        className="container"
        defaultValues={{
          fruits2:'watermelon',
          theme  :'dark-theme',
        }}
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
            name        :'email',
            label       :'Your email',
            autoComplete:'email',
          },
          {
            name        :'username',
            label       :'Username',
            autoComplete:'email',
            extensions  :[
              addGraphQLValidation(
                QUERY_USERNAME_AVAILABILITY,
                'isUsernameAvailable',
                {
                  invalidError :'This username is already taken',
                  fetchError   :'There was an error while checking the username availability',
                  responseError:"The server didn't return a valid response",
                  minLength    :4,
                },
              ),
            ],
          },
          {
            name        :'fruits',
            label       :"What's your favorite fruit?",
            autoComplete:'off',
            type        :'select',
            /*
            options     :[
              {
                label   :'Apple',
                value   :'apple',
                disabled:false,
              },
              {
                label   :'Banana',
                value   :'banana',
                disabled:false,
              },
              {
                label   :'Orange',
                value   :'orange',
                disabled:false,
              },
              {
                label   :'Pineapple',
                value   :'pineapple',
                disabled:true,
              },
            ], */
            extensions  :[
              withErrorHandling,
              addGraphQLOptions(
                QUERY_LOAD_FRUIT_OPTIONS, 'fruits',
              ),
              withErrorHandling,
            ],
          },
          {
            name      :'fruits2',
            label     :"What's your favorite fruit?",
            type      :'combobox',
            extensions:[
              withErrorHandling,
              addGraphQLOptions(
                QUERY_LOAD_FRUIT_OPTIONS, 'fruits',
              ),
            ],
          },
          {
            name   :'searchfruit',
            label  :'Search for a fruit',
            type   :'combobox',
            options:[
              {
                label:'xApple',
                value:'apple',
              },
              {
                label:'xBanana',
                value:'banana',
              },
              {
                label:'xOrange',
                value:'orange',
              },
            ],
            extensions:[
              addGraphQLComboboxSearchOptions(
                QUERY_SEARCH_FRUITS_OPTIONS,
                'searchFruits',
                { minLength: 1 },
              ),
            ],
          },
          {
            name        :'theme',
            label       :'Theme',
            type        :'text',
            autoComplete:'off',
            extensions  :[addEditable()],
          },
        ]}
      />
      {/*
      <h2 className="container">Vanilla </h2>
      <div className="container">
        <Formik initialValues={{ email: 'test@test.com' }}>
          <>
            <Field
              name="name"
              type="text"
            />
            <Field
              validate={validateEmail}
              name="email"
              type="email"
            />
          </>
        </Formik>
      </div>
          */}
    </Template>
  )
}

FormTest.QUERY = QUERY_LOAD_FRUIT_OPTIONS

export default FormTest
