import { getClipsByCategoryId } from '@/lib/db/api/clips'
import { unstable_cache } from 'next/cache'

import { Category } from '../../../../../../../types'
import ClipCardGrid from './ClipCardGrid'

export type ClipVotingCategoryContentProps = {
  category: Category
}

export const ClipVotingCategoryContent = async (props: ClipVotingCategoryContentProps) => {
  const { category } = props

  const clips = await unstable_cache(() => getClipsByCategoryId(category.id), ['clips', category.id], {
    revalidate: 14400, // 4 hours
    tags: ['clips'],
  })()

  return (
    <ClipCardGrid
      clips={clips}
      category={category}
    />
  )
}
