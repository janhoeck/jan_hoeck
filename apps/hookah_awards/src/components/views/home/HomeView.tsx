import { Suspense } from 'react'

import { HeroSection } from './sections/hero/HeroSection'
import { VotingSection } from './sections/voting/VotingSection'

export const HomeView = async () => {
  return (
    <div>
      <HeroSection className='mb-30' />
      <Suspense fallback={null}>
        <VotingSection />
      </Suspense>
    </div>
  )
}
