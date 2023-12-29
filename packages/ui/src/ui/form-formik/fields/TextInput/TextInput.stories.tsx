/* @aztlan/generator-front 0.7.3 */
import * as React from 'react'

import {
  Meta, StoryFn,
} from '@storybook/react'
import * as decorators from 'story-utils/decorators.tsx'
import { graphql } from 'relay-runtime'
import environment from '@aztlan/storybook-addon-relay/src/decorators/environment'
import Component, { RawTextInput as RawComponent } from './TextInput.tsx'
import { createGraphQLFieldValidator } from '../../validators.ts'
import { addGraphQLValidation } from '../../extensions/index.ts'

export default {
  title     :'form-formik/fields/TextInput',
  component :RawComponent,
  decorators:[
    decorators.grid,
    decorators.formik,
    decorators.relay,
  ],
} as Meta<typeof RawComponent>

const QUERY_VALIDATE_USERNAME = graphql`
  query TextInputGraphQLValidationQuery($value: String!) {
    isUsernameAvailable(value: $value)
  }
`

const Template: StoryFn<typeof Component> = function (args) {
  return <Component {...args} />
}

export const Base: StoryFn<typeof Component> = Template.bind({})
Base.args = {
  name        :'name',
  label       :'Your name',
  autoComplete:'name',
}

export const GraphQLValidatiorFunction: StoryFn<typeof Component> = Template.bind({})
GraphQLValidatiorFunction.args = {
  name        :'username',
  label       :'Username',
  autoComplete:'username',
  validate    :createGraphQLFieldValidator(
    environment,
    QUERY_VALIDATE_USERNAME,
    'isUsernameAvailable',
    {
      invalidMessage:'This username is already taken',
      errorMessage  :'There was an error while checking the username availability',
      minLength     :4,
    },
  ),
}

export const Extensions: StoryFn<typeof Component> = Template.bind({})
Extensions.args = {
  name        :'username2',
  label       :'Choose your username',
  autoComplete:'username',
  extensions  :[
    addGraphQLValidation(
      QUERY_VALIDATE_USERNAME, 'isUsernameAvailable', {
        invalidMessage:'Username is taken',
        errorMessage  :'Cannot validate username right now',
        minLength     :4,
        debounceWait  :300,
      },
    ),
  ],
}
