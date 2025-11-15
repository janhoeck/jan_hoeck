import { Suspense } from 'react'
import { twMerge } from 'tailwind-merge'

import { Category } from '../../../../../types'
import { ClipVotingCategory } from './categories/clip/ClipVotingCategory'
import { SurveyVotingSection } from './categories/survey/SurveyVotingSection'

export type VotingSectionProps = {
  className?: string
}

export const VotingSection = async (props: VotingSectionProps) => {
  const { className } = props

  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`)
  console.log('categories', response)
  if (!response.ok) {
    return null
  }

  const categories: Category[] = await response.json()
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
