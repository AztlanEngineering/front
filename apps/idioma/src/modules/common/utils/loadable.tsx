import React from 'react'
import baseLoadable from '@loadable/component'
import Base from '../templates/Base.js'

export default function loadable(func) {
  return baseLoadable(
    func, {
      fallback:<Base
        wireframe
        wireframeTitle="Loading"
      />,
    },
  )
}
