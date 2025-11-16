import { ErrorBanner } from '@/components/shared/ErrorBanner'

import { Category, Clip } from '../../../../../../../types'
import ClipCardGrid from './ClipCardGrid'

export type ClipVotingCategoryContentProps = {
  category: Category
}

export const ClipVotingCategoryContent = async (props: ClipVotingCategoryContentProps) => {
  const { category } = props

  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/clips/${category.id}`)
  const clips: Clip[] = response.ok ? await response.json() : []

  if (!response.ok) {
    return <ErrorBanner />
  }

  return (
    <ClipCardGrid
      clips={clips}
      category={category}
    />
  )
}
