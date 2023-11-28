import { useContext } from 'react'
import Context from './Context'

export default () => {
  const { viewerQueryReference } = useContext(Context)
  return viewerQueryReference
}
