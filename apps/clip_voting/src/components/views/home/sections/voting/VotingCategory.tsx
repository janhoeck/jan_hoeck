import { ClipCard } from '@/components/views/home/sections/voting/ClipCard'

import { Category, Clips } from '../../../../../types'

export type VotingCategoryProps = {
  category: Category
  clips: Clips
}

export const VotingCategory = (props: VotingCategoryProps) => {
  const { category, clips } = props
  return (
    <div className='flex flex-col items-center'>
      <div className='max-w-2xl'>
        <h2 className='text-center text-foreground text-3xl font-extrabold mb-4 font-maragsa'>{category.title}</h2>
        <p className='text-foreground text-lg text-center'>{category.description}</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-10'>
        {clips.map((clip) => (
          <ClipCard
            key={clip.id}
            clip={clip}
          />
        ))}
      </div>
    </div>
  )
}
