/* @aztlan/generator-front 0.4.0 */
import * as React from 'react'
import { defineMessages, useIntl } from 'react-intl'
import Template from '../../common/templates/Base'

const messagesPrefix = 'common.pages.404'
const m = defineMessages({
  notFound: {
    defaultMessage: 'The page you requested is not found.',
  },
})

function Status404() {
  const { formatMessage } = useIntl()
  return (
    <Template title="Error 404">
      <p>{formatMessage(m.notFound)}</p>
    </Template>
  )
}

export default Status404
