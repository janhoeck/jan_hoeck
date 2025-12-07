import { Card, CardContent } from '@jan_hoeck/ui'

import { VotesByDayChart } from './VotesByDayChart'

export const VoteStatisticSection = async () => {
  return (
    <section>
      <h2 className='text-2xl text-foreground mb-6'>Vote Statistik</h2>
      <Card className='glass-card'>
        <CardContent>
          <VotesByDayChart />
        </CardContent>
      </Card>
    </section>
  )
}
