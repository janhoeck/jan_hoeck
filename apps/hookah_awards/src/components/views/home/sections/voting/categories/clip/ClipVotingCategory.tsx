import { Category, Clip } from '../../../../../../../types'
import { CategoryContainer } from '../CategoryContainer'
import ClipCardGrid from './ClipCardGrid'

export type ClipVotingCategoryProps = {
  category: Category
}

export const ClipVotingCategory = async (props: ClipVotingCategoryProps) => {
  const { category } = props

  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/data/clips/${category.id}`)
  if (!response.ok) {
    return null
  }

  const clips: Clip[] = await response.json()

  return (
    <CategoryContainer category={category}>
      <ClipCardGrid
        clips={clips}
        category={category}
      />
    </CategoryContainer>
  )
}
