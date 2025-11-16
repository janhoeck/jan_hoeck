import React from 'react'

export const ClipCardGridSkeleton = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 animate-pulse'>
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className='bg-card-bg rounded-xl overflow-hidden w-96 max-w-full mx-auto shadow-lg w-96'
        >
          <div className='w-full h-48 bg-foreground/10'></div>

          <div className='p-6 space-y-3'>
            <div className='h-5 w-3/4 bg-foreground/10 rounded'></div>
            <div className='h-4 w-1/2 bg-foreground/10 rounded'></div>
          </div>

          <div className='px-6 pb-6'>
            <div className='h-10 w-full bg-foreground/10 rounded-full'></div>
          </div>
        </div>
      ))}
    </div>
  )
}
