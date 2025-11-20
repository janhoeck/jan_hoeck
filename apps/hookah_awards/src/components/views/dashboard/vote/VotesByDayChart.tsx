'use client'

import { AgChartProps, AgCharts } from 'ag-charts-react'
import { useMemo } from 'react'

import { Vote } from '../../../../types'
import { chartOptions } from './chartOptions'
import { buildChartData, groupVotesByDay } from './utils'

export type VotesByDayChartProps = {
  votes: Vote[]
}

export const VotesByDayChart = (props: VotesByDayChartProps) => {
  const { votes } = props

  const options = useMemo<AgChartProps['options']>(
    () => ({
      ...chartOptions,
      data: buildChartData(groupVotesByDay(votes)),
    }),
    [votes]
  )

  return <AgCharts options={options} />
}
