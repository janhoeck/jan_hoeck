import { twMerge } from 'tailwind-merge'

import { CategoriesWithClips } from '../../../../../types'
import { VotingCategory } from './VotingCategory'

export type VotingSectionProps = {
  className?: string
  categoriesWithVideos: CategoriesWithClips
}

export const VotingSection = (props: VotingSectionProps) => {
  const { className, categoriesWithVideos } = props

  return (
    <section className={twMerge(className)}>
      {categoriesWithVideos.map((category) => (
        <VotingCategory
          key={category.id}
          category={category}
          clips={category.clips}
        />
      ))}
    </section>
  )
}
