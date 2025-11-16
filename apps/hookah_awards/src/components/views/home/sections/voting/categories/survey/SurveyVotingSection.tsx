import { getSurveysByCategoryId } from '@/lib/db/api/surveys'
import { unstable_cache } from 'next/cache'

import { Category } from '../../../../../../../types'
import { CategoryContainer } from '../CategoryContainer'
import { SurveyItemGrid } from './SurveyItemGrid'

export type SurveyVotingSectionProps = {
  category: Category
}

export const SurveyVotingSection = async (props: SurveyVotingSectionProps) => {
  const { category } = props

  const surveys = await getSurveysByCategoryId(category.id)

  return (
    <CategoryContainer category={category}>
      <SurveyItemGrid surveys={surveys} />
    </CategoryContainer>
  )
}
