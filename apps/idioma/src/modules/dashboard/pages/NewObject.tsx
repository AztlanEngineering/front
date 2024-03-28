/* @aztlan/generator-front 1.4.1 */
import * as React from 'react'
import {
  useEffect, useCallback, useMemo,
} from 'react'
import {
  Link, useParams, useHistory,
} from 'react-router-dom'
import {
  getEntityByName,
  ActivitystreamsEntitySelectCreateForm,
  ActivitystreamsCreateForm,
  useOrganizationContext,
} from '@ldmnet/ui'
import Template from '../layers/Main.js'
import mutations from '../graphql/mutations.js'
import paths from '../paths.js'

function New() {
  const {
    organization, type: modelType,
  } = useParams()
  const history = useHistory()
  const onCompleted = useCallback(
    (data) => {
      const [payload] = Object.values(data)
      const path = paths.generatePath(
        'VIEW_GLOBAL_ID', {
          organization,
          globalId:payload.instance.id,
        },
      )
      history.push(path)
    },
    [organization],
  )

  const { uuid: organizationUUID } = useOrganizationContext()

  const formProps = useMemo(
    () => ({
      mutationMap:mutations,
      onCompleted,
      initialValues:{
        xOwner:organizationUUID,
      },
      fieldProps :{
        spanLabel         :8,
        spanLabelDesktop  :3,
        spanContent       :8,
        spanContentDesktop:7,
      },
    }),
    [
      onCompleted,
      mutations,
    ],
  )
  if (modelType) {
    const Model = getEntityByName(modelType)
    return (
      <ActivitystreamsCreateForm
        Model={Model}
        {...formProps}
      />
    )
  }
  return <ActivitystreamsEntitySelectCreateForm {...formProps} />
}

export default New
