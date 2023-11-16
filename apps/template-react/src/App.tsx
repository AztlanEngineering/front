import * as React from 'react'
import { Button } from '@aztlan/design-system'
import { QueryTester } from './ui'
import routes from './modules/routes'
import { SwitchRoutes } from './modules/common/ui'
import Status404Page from './modules/common/pages/Status404.tsx'
// @ts-ignore

function App() {
  return <SwitchRoutes items={routes} NotFoundPage={Status404Page} />
}
/*
    <>
      <Button>Test</Button>
      <QueryTester />
      <h1>Hey there welcome</h1>
    </>
      */

export default App
