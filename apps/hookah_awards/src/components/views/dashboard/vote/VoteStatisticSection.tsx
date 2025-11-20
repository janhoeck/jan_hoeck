import { getVotes } from '@/lib/db/api/votes'
import { Card, CardContent } from '@jan_hoeck/ui'

import { VotesByDayChart } from './VotesByDayChart'

export const VoteStatisticSection = async () => {
  const votes = await getVotes()
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
