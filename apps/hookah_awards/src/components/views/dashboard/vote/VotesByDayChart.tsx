'use client'

import { AgChartProps, AgCharts } from 'ag-charts-react'
import { useMemo } from 'react'

import { Vote } from '../../../../types'
import { chartOptions } from './chartOptions'
import { buildChartData, groupVotesByDay } from './utils'

export type VotesByDayChartProps = {
  votes: Vote[]
}

const votes: Vote[] = [
  // 15.11.2025 - 6 Votes
  ...Array(6)
    .fill(null)
    .map((_, i) => ({
      userId: `example-${i}`,
      categoryId: '7ef3ae18-8d6c-4b07-8294-5c3d64c8f5b4',
      referenceId: 'afc165b2-2965-41b2-9de2-5e5eb9523e4e',
      referenceType: 'clip' as const,
      createdAt: new Date('2025-11-15 16:50:13.957+00'),
    })),

  // 16.11.2025 - 3 Votes
  ...Array(3)
    .fill(null)
    .map((_, i) => ({
      userId: `example-${i + 6}`,
      categoryId: '7ef3ae18-8d6c-4b07-8294-5c3d64c8f5b4',
      referenceId: 'afc165b2-2965-41b2-9de2-5e5eb9523e4e',
      referenceType: 'clip' as const,
      createdAt: new Date('2025-11-16 16:50:13.957+00'),
    })),

  // 17.11.2025 - 8 Votes
  ...Array(8)
    .fill(null)
    .map((_, i) => ({
      userId: `example-${i + 9}`,
      categoryId: '7ef3ae18-8d6c-4b07-8294-5c3d64c8f5b4',
      referenceId: 'afc165b2-2965-41b2-9de2-5e5eb9523e4e',
      referenceType: 'clip' as const,
      createdAt: new Date('2025-11-17 16:50:13.957+00'),
    })),

  // 18.11.2025 - 4 Votes
  ...Array(4)
    .fill(null)
    .map((_, i) => ({
      userId: `example-${i + 17}`,
      categoryId: '7ef3ae18-8d6c-4b07-8294-5c3d64c8f5b4',
      referenceId: 'afc165b2-2965-41b2-9de2-5e5eb9523e4e',
      referenceType: 'clip' as const,
      createdAt: new Date('2025-11-18 16:50:13.957+00'),
    })),

  // 19.11.2025 - 5 Votes
  ...Array(5)
    .fill(null)
    .map((_, i) => ({
      userId: `example-${i + 21}`,
      categoryId: '7ef3ae18-8d6c-4b07-8294-5c3d64c8f5b4',
      referenceId: 'afc165b2-2965-41b2-9de2-5e5eb9523e4e',
      referenceType: 'clip' as const,
      createdAt: new Date('2025-11-19 16:50:13.957+00'),
    })),
]

export const VotesByDayChart = (props: VotesByDayChartProps) => {
  //const { votes } = props

  const options = useMemo<AgChartProps['options']>(
    () => ({
      ...chartOptions,
      data: buildChartData(groupVotesByDay(votes)),
    }),
    [votes]
  )

  return <AgCharts options={options} />
}
