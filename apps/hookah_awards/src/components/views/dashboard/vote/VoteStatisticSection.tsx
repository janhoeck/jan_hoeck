import { Card, CardContent } from '@jan_hoeck/ui'

import { Vote } from '../../../../types'
import { VotesByDayChart } from './VotesByDayChart'

export const VoteStatisticSection = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/votes`)
  if (!response.ok) {
    return null
  }

  const votes = (await response.json()) as Vote[]

  return (
    <section>
      <h2 className='text-2xl text-foreground mb-6'>Vote Statistik</h2>
      <Card>
        <CardContent>
          <VotesByDayChart votes={votes} />
        </CardContent>
      </Card>
    </section>
  )
}
