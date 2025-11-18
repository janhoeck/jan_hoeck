'use client'

import { useDataContext } from '../DataContext'
import { ClipTable } from './ClipTable'

export const ClipTableContainer = () => {
  const { clips } = useDataContext()

  if (clips.length === 0) {
    return <span className='text-muted-foreground'>Keine Clips vorhanden</span>
  }

  return <ClipTable />
}
