/* @aztlan/generator-front 0.4.0 */
import * as React from 'react'
/*
import {
  defineMessages, useIntl, FormattedMessage,
} from 'react-intl'
*/
import { ViewerProfile } from '@aztlan/ui'
import Template from '../templates/Base.js'

/*
const m = defineMessages({
  title: {
    // id: `${messagesPrefix}.title`,
    defaultMessage: 'Homepage',
  },
  welcome: {
    description: 'Message to greet the user.',
    defaultMessage: 'Welcome to the site, {name}!!!',
  },
}) */

function Profile() {
  return (
    <Template title="Profile">
      <p className="span-8">Welcome to the profile page</p>
      <ViewerProfile />
    </Template>
  )
}

export default Profile
