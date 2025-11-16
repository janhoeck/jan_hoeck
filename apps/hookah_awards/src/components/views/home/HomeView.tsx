import { Suspense } from 'react'

import { HeroSection } from './sections/hero/HeroSection'
import { VotingSection } from './sections/voting/VotingSection'
import { VotingSectionSkeleton } from './sections/voting/VotingSectionSkeleton'

export const HomeView = async () => {
  return (
    <div>
      <HeroSection className='mb-30' />
      <Suspense fallback={<VotingSectionSkeleton />}>
        <VotingSection />
      </Suspense>
    </div>
  )
}
