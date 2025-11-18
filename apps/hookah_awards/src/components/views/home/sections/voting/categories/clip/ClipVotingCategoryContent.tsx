import { getClipsByCategoryId } from '@/lib/db/api/clips'

import { Category } from '../../../../../../../types'
import ClipCardGrid from './ClipCardGrid'

export type ClipVotingCategoryContentProps = {
  category: Category
}

export const ClipVotingCategoryContent = async (props: ClipVotingCategoryContentProps) => {
  const { category } = props

  const clips = await getClipsByCategoryId(category.id)

  return (
    <ClipCardGrid
      clips={clips}
      category={category}
    />
  )
}
