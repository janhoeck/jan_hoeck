import { getCategories } from '@/lib/db/api/categories'
import { unstable_cache } from 'next/cache'
import { Suspense } from 'react'
import { twMerge } from 'tailwind-merge'

import ClipVotingCategory from './categories/clip/ClipVotingCategory'
import { SurveyVotingSection } from './categories/survey/SurveyVotingSection'

export type VotingSectionProps = {
  className?: string
}

const getCachedCategories = unstable_cache(async () => getCategories(), ['categories'], {
  revalidate: 14400, // 4 hours
  tags: ['categories'],
})

export const VotingSection = async (props: VotingSectionProps) => {
  const { className } = props

  const categories = await getCachedCategories()

  return (
    <section className={twMerge('flex flex-col space-y-40', className)}>
      {categories.map((category) => (
        <Suspense
          key={category.id}
          fallback={null}
        >
          {category.type === 'clip' && <ClipVotingCategory category={category} />}
          {category.type === 'survey' && <SurveyVotingSection category={category} />}
        </Suspense>
      ))}
    </section>
  )
}
