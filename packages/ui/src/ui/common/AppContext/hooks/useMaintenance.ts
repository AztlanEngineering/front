import { useMemo } from 'react'

interface MaintenanceProps {
  start?: Date;
  end?: Date;
}

const useMaintenance = (maintenance: boolean | MaintenanceProps) => {
  const isInMaintenanceMode = useMemo(
    () => {
      if (typeof maintenance === 'boolean') {
        return maintenance
      }

      const now = new Date()
      const hasStartPassed = maintenance.start ? now >= maintenance.start : true
      const hasEndPassed = maintenance.end ? now > maintenance.end : false

      return hasStartPassed && !hasEndPassed
    }, [maintenance],
  )
  return isInMaintenanceMode
}

export default useMaintenance
