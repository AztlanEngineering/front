import * as React from 'react'
import { Button, useApp } from '@aztlan/design-system'
import { useTheme } from '@aztlan/react-helpers'
import { QueryTester } from './ui'
import routes from './modules/routes'
import { SwitchRoutes } from './modules/common/ui'
import Status404Page from './modules/common/pages/Status404.tsx'
// @ts-ignore

function App() {
  const { theme } = useApp()
  return (
    <main className={`${theme || ''} background far`}>
      <SwitchRoutes items={routes} NotFoundPage={Status404Page} />
    </main>
  )
}
/*
    <>
      <Button>Test</Button>
      <QueryTester />
      <h1>Hey there welcome</h1>
    </>
      */

export default App
