import React from 'react'
import baseLoadable from '@loadable/component'
import Loading from './Loading'

export default function loadable(func) {
  return baseLoadable(func, { fallback: <h1>loading !!!</h1> })
}
