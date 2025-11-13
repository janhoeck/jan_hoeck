import { Category, Survey } from '../../../../../../../types'
import { CategoryContainer } from '../CategoryContainer'
import { SurveyItemGrid } from './SurveyItemGrid'

export type SurveyVotingSectionProps = {
  category: Category
}

export const SurveyVotingSection = async (props: SurveyVotingSectionProps) => {
  const { category } = props

  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/data/surveys/${category.id}`)
  if (!response.ok) {
    return null
  }

  const surveys: Survey[] = await response.json()

  return (
    <CategoryContainer category={category}>
      <SurveyItemGrid surveys={surveys} />
    </CategoryContainer>
  )
}
