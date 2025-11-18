import { Divider } from '@/components/shared/Divider'

import { GeneralStatisticSection } from './GeneralStatisticSection'
import { VoteStatisticSection } from './vote/VoteStatisticSection'

export const DashboardView = () => {
  return (
    <div className='container mx-auto max-w-2xl'>
      <h1 className='text-6xl font-extrabold font-sans-pro uppercase text-foreground mb-12 text-center'>Dashboard</h1>
      <GeneralStatisticSection />
      <Divider />
      <VoteStatisticSection />
      <Divider />
      <VoteStatisticSection />
    </div>
  )
}
