import { useEffect } from 'react'
import { useFormikContext } from 'formik'

function Debugger() {
  const { values } = useFormikContext()
  useEffect(
    () => {
      console.log(
        '[Formik Values]', values,
      )
    }, [values],
  )
  return null
}

export default Debugger
