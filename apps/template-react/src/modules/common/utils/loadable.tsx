import React from 'react'
import baseLoadable from '@loadable/component'
import Loading from './Loading'
import Base from '../templates/Base'

export default function loadable(func) {
  return baseLoadable(func, {
    fallback: <Base wireframe wireframeTitle="Loading" />,
  })
}
