'use client'

import { useDataContext } from '@/components/contexts/data/DataContext'
import { AgChartProps, AgCharts } from 'ag-charts-react'
import { useMemo } from 'react'

import { chartOptions } from './chartOptions'
import { buildChartData, groupVotesByDay } from './utils'

export const VotesByDayChart = () => {
  const { votes } = useDataContext()

  const options = useMemo<AgChartProps['options']>(
    () => ({
      ...chartOptions,
      data: buildChartData(groupVotesByDay(votes)),
    }),
    [votes]
  )

  return <AgCharts options={options} />
}
