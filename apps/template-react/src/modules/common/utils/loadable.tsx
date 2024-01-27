import React from 'react'
import baseLoadable from '@loadable/component'
import Base from '../templates/Base.tsx'

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
