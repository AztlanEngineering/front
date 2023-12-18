/* @aztlan/generator-front 0.4.0 */
import * as React from 'react'
import {
  defineMessages, useIntl,
} from 'react-intl'
import Template from '../templates/Base'

const messagesPrefix = 'common.pages.maintenance'
const m = defineMessages({
  notAvailable:{
    defaultMessage:'This website is currently not available',
  },
})

function Maintenance() {
  const {
    formatMessage,
  } = useIntl()
  return (
    <Template title="Maintenance">
      <p className="container">{formatMessage(m.notAvailable)}</p>
    </Template>
  )
}

export default Maintenance
