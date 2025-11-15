import { Vote } from '../../../../types'

export const groupVotesByDay = (votes: Vote[]) => {
  const grouped = votes.reduce(
    (acc, vote) => {
      const date = new Date(vote.createdAt)
      const dateKey = date.toISOString().split('T')[0]!

      if (!acc[dateKey]) {
        acc[dateKey] = {
          date: new Date(dateKey + 'T00:00:00'),
          count: 0,
        }
      }
      acc[dateKey].count += 1

      return acc
    },
    {} as Record<string, { date: Date; count: number }>
  )

  return Object.values(grouped).sort((a, b) => a.date.getTime() - b.date.getTime())
}

export const buildChartData = (data: ReturnType<typeof groupVotesByDay>) => {
  return data.map((item) => ({
    count: item.count,
    date: item.date.toLocaleDateString('de-DE'),
  }))
}
