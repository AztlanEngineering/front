import * as React from 'react'
import { Button } from '@aztlan/design-system'
// @ts-ignore
import styles from '@aztlan/bem/exports.scss'

function App() {
  return (
    <>
      <Button>Test</Button>
      <h1>Hey there welcome</h1>
      <h2>{styles.modifierGhost}</h2>
    </>
  )
}

export default App
