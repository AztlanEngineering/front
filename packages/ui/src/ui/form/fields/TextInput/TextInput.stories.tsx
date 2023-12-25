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

export default {
  title     :'form/fields/TextInput',
  component :RawComponent,
  decorators:[
    decorators.grid,
    decorators.form,
  ],
} as Meta<typeof RawComponent>

const Template: StoryFn<typeof Component> = function (args) {
  return <Component {...args} />
}

export const Base: StoryFn<typeof Component> = Template.bind({})
Base.args = {
  name        :'name',
  label       :'Your name',
  autoComplete:'name',
}

export const GraphQLValidation: StoryFn<typeof Component> = Template.bind({})
GraphQLValidation.args = {
  name        :'username',
  label       :'Username',
  autoComplete:'username',
  validate    :createGraphQLFieldValidator(
    environment,
    graphql`
      query TextInputGraphQLValidationQuery($value: String!) {
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
}
