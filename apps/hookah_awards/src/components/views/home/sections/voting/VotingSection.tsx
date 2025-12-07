import { getCategories } from '@/lib/db/api/categories'
import { Suspense } from 'react'
import { twMerge } from 'tailwind-merge'

import ClipVotingCategory from './categories/clip/ClipVotingCategory'
import { SurveyVotingSection } from './categories/survey/SurveyVotingSection'
import { VotesContextProvider } from './context/VotesContextProvider'

export type VotingSectionProps = {
  className?: string
}

export const VotingSection = async (props: VotingSectionProps) => {
  const { className } = props

  const categories = await getCategories()

  return (
    <section className={twMerge('flex flex-col space-y-40', className)}>
      <VotesContextProvider>
        {categories.map((category) => (
          <Suspense
            key={category.id}
            fallback={null}
          >
            {category.type === 'clip' && <ClipVotingCategory category={category} />}
            {category.type === 'survey' && <SurveyVotingSection category={category} />}
          </Suspense>
        ))}
      </VotesContextProvider>
    </section>
  )
}
