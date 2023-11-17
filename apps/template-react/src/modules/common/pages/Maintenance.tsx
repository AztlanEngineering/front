/* @aztlan/generator-front 0.4.0 */
import * as React from 'react'
import { defineMessages, useIntl } from 'react-intl'
import Template from '../../common/templates/Base'

const messagesPrefix = 'common.pages.maintenance'
const m = defineMessages({
  notAvailable: {
    id: `${messagesPrefix}.notAvailable`,
    defaultMessage: 'This website is currently not available',
  },
})

function Maintenance() {
  const { formatMessage } = useIntl()
  return (
    <Template title="Maintenance">
      <p>{formatMessage(m.notAvailable)}</p>
    </Template>
  )
}

export default Maintenance
