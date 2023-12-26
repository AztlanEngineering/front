/* @aztlan/generator-front 0.4.0 */
import * as React from 'react'
import { useLazyLoadQuery } from 'react-relay'
import {
  defineMessages, useIntl, FormattedMessage,
} from 'react-intl'
import {
  SimpleForm, addGraphQLValidation, validateEmail,
} from '@aztlan/ui'
import {
  Formik, Field,
} from 'formik'
import { graphql } from 'relay-runtime'
import Template from '../../common/templates/Base.tsx'
import { relayEnvironment } from '../../../client.tsx'

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

function Home() {
  const { formatMessage } = useIntl()
  return (
    <Template
      title={formatMessage(m.title)}
      className
    >
      <h2 className="container">Form Test</h2>
      <SimpleForm
        debug
        className="container"
        inputProps={{
          spanLabel         :6,
          spanLabelDesktop  :3,
          spanContent       :8,
          spanContentDesktop:5,
        }}
        inputs={[
          {
            name        :'name',
            label       :'Your name',
            autoComplete:'name',
          },
          {
            name        :'email',
            label       :'Your email',
            autoComplete:'email',
            validate    :validateEmail,
          },
          {
            name        :'username',
            label       :'Username',
            autoComplete:'email',
            extensions  :[
              addGraphQLValidation(
                graphql`
                  query FormTestValidationQuery($value: String!) {
                    isUsernameAvailable(value: $value)
                  }
                `,
                'isUsernameAvailable',
                {
                  invalidMessage:'This username is already taken',
                  errorMessage  :'There was an error while checking the username availability',
                  minLength     :4,
                },
              ),
            ],
          },
        ]}
        initialValues={{
          name    :'John',
          email   :'',
          username:'johndoe',
        }}
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

export default Home
