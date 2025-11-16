import { getSurveysByCategoryId } from '@/lib/db/api/surveys'
import { unstable_cache } from 'next/cache'

import { Category } from '../../../../../../../types'
import { CategoryContainer } from '../CategoryContainer'
import { SurveyItemGrid } from './SurveyItemGrid'

export type SurveyVotingSectionProps = {
  category: Category
}

const getCachedSurveysByCategoryId = (categoryId: Category['id']) =>
  unstable_cache(() => getSurveysByCategoryId(categoryId), [categoryId], {
    revalidate: 14400, // 4 hours
    tags: ['surveys'],
  })()

export const SurveyVotingSection = async (props: SurveyVotingSectionProps) => {
  const { category } = props

  const surveys = await getCachedSurveysByCategoryId(category.id)

  return (
    <CategoryContainer category={category}>
      <SurveyItemGrid surveys={surveys} />
    </CategoryContainer>
  )
}
