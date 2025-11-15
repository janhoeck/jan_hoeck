import { ErrorBanner } from '@/components/shared/ErrorBanner'

import { Category, Clip } from '../../../../../../../types'
import { CategoryContainer } from '../CategoryContainer'
import ClipCardGrid from './ClipCardGrid'

export type ClipVotingCategoryProps = {
  category: Category
}

export const ClipVotingCategory = async (props: ClipVotingCategoryProps) => {
  const { category } = props

  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/clips/${category.id}`)
  const clips: Clip[] = response.ok ? await response.json() : []

  return (
    <CategoryContainer category={category}>
      {!response.ok && <ErrorBanner />}
      <ClipCardGrid
        clips={clips}
        category={category}
      />
    </CategoryContainer>
  )
}
