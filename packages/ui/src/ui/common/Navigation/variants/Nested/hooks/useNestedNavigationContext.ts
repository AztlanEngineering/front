import { useContext } from 'react'
import Context from '../Context.js'

export default function useNestedNavigation() {
  const context = useContext(Context)

  return context
}
