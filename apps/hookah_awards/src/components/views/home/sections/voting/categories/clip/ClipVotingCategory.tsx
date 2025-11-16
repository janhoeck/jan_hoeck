import { Suspense } from 'react'

import { Category } from '../../../../../../../types'
import { CategoryContainer } from '../CategoryContainer'
import { ClipCardGridSkeleton } from './ClipCardGridSkeleton'
import { ClipVotingCategoryContent } from './ClipVotingCategoryContent'

export type ClipVotingCategoryProps = {
  category: Category
}

const ClipVotingCategory = async (props: ClipVotingCategoryProps) => {
  const { category } = props

  return (
    <CategoryContainer category={category}>
      <Suspense fallback={<ClipCardGridSkeleton />}>
        <ClipVotingCategoryContent category={category} />
      </Suspense>
    </CategoryContainer>
  )
}
export default ClipVotingCategory
