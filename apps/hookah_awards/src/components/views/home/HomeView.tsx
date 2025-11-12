import { VotingSection } from '@/components/views/home/sections/voting/VotingSection'

import { CategoriesWithClips } from '../../../types'
import { HeroSection } from './sections/hero/HeroSection'

export type HomeViewProps = {
  categoriesWithVideos: CategoriesWithClips
}

export const HomeView = (props: HomeViewProps) => {
  const { categoriesWithVideos } = props
  return (
    <div>
      <HeroSection className='mb-40' />
      <VotingSection categoriesWithVideos={categoriesWithVideos} />
    </div>
  )
}
