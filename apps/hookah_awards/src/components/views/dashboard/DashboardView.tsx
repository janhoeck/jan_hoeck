import { GeneralStatisticSection } from './GeneralStatisticSection'
import { VoteStatisticSection } from './vote/VoteStatisticSection'

export const DashboardView = () => {
  return (
    <div className='container mx-auto max-w-2xl'>
      <h1 className='text-6xl font-extrabold font-sans-pro uppercase text-foreground mb-12 text-center'>Dashboard</h1>
      <GeneralStatisticSection />
      <hr className='text-muted-foreground my-10' />
      <VoteStatisticSection />
      <hr className='text-muted-foreground my-10' />
      <VoteStatisticSection />
    </div>
  )
}
