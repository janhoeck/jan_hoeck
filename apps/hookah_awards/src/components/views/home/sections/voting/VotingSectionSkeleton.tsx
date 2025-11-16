import React from 'react'

export function VotingSectionSkeleton() {
  return (
    <div className='w-full py-10 animate-pulse'>
      {/* Title */}
      <div className='flex flex-col items-center mb-10 gap-3'>
        <div className='h-8 w-64 bg-foreground/10 rounded'></div>
        <div className='h-4 w-80 bg-foreground/10 rounded'></div>
        <div className='h-4 w-72 bg-foreground/10 rounded'></div>
      </div>

      {/* Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className='bg-card-bg rounded-xl overflow-hidden shadow-lg'
          >
            {/* Image skeleton */}
            <div className='w-full h-48 bg-foreground/10'></div>

            {/* Text */}
            <div className='p-6 space-y-3'>
              <div className='h-5 w-3/4 bg-foreground/10 rounded'></div>
              <div className='h-4 w-1/2 bg-foreground/10 rounded'></div>
            </div>

            {/* Button */}
            <div className='px-6 pb-6'>
              <div className='h-10 w-full bg-foreground/10 rounded-full'></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
