import { Headline } from '@/components/shared/Headline'
import { Divider } from '@jan_hoeck/ui'

import { GeneralStatisticSection } from './general/GeneralStatisticSection'
import { MostVotedSection } from './mostVoted/MostVotedSection'
import { VoteStatisticSection } from './vote/VoteStatisticSection'

export const DashboardView = () => {
  return (
    <div className='container mx-auto max-w-2xl'>
      <Headline>Dashboard</Headline>
      <GeneralStatisticSection />
      <Divider />
      <VoteStatisticSection />
      <Divider />
      <MostVotedSection />
    </div>
  )
}
