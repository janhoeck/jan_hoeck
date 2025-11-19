import React from 'react'

import { ClipCardGridSkeleton } from './categories/clip/ClipCardGridSkeleton'

export function VotingSectionSkeleton() {
  return (
    <div className='w-full animate-pulse flex flex-col items-center'>
      <div className='max-w-2xl mb-10 flex flex-col items-center'>
        <div className='h-8 w-64 mb-6 bg-foreground/10 rounded'></div>
        <div className='h-4 w-80 mb-4 bg-foreground/10 rounded'></div>
        <div className='h-4 w-72 bg-foreground/10 rounded'></div>
      </div>

      <ClipCardGridSkeleton />
    </div>
  )
}
