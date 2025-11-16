import React from 'react'

import { ClipCardGridSkeleton } from './categories/clip/ClipCardGridSkeleton'

export function VotingSectionSkeleton() {
  return (
    <div className='w-full py-10 animate-pulse'>
      <div className='flex flex-col items-center mb-10 gap-3'>
        <div className='h-8 w-64 bg-foreground/10 rounded'></div>
        <div className='h-4 w-80 bg-foreground/10 rounded'></div>
        <div className='h-4 w-72 bg-foreground/10 rounded'></div>
      </div>

      <ClipCardGridSkeleton />
    </div>
  )
}
