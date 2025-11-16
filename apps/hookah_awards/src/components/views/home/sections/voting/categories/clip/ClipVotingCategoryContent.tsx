import { getClipsByCategoryId } from '@/lib/db/api/clips'
import { unstable_cache } from 'next/cache'

import { Category } from '../../../../../../../types'
import ClipCardGrid from './ClipCardGrid'

export type ClipVotingCategoryContentProps = {
  category: Category
}

const getCachedClipsByCategoryId = (categoryId: Category['id']) =>
  unstable_cache(() => getClipsByCategoryId(categoryId), [categoryId], {
    revalidate: 14400, // 4 hours
    tags: ['clips'],
  })()

export const ClipVotingCategoryContent = async (props: ClipVotingCategoryContentProps) => {
  const { category } = props

  const clips = await getCachedClipsByCategoryId(category.id)

  return (
    <ClipCardGrid
      clips={clips}
      category={category}
    />
  )
}
