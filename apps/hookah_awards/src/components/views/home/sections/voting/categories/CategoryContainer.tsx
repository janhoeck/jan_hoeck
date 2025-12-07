import { PropsWithChildren } from 'react'

import { Category } from '../../../../../../types'

export type CategoryContainerProps = PropsWithChildren<{
  category: Category
}>

export const CategoryContainer = (props: CategoryContainerProps) => {
  const { category, children } = props

  return (
    <div className='flex flex-col items-center'>
      {/* Category Header */}
      <div className='text-center mb-8 space-y-3'>
        <div className='flex items-center justify-center gap-3'>
          <div className='w-2 h-2 rounded-full bg-primary animate-glow-pulse' />
          <h2 className='font-bebas-neue text-3xl md:text-4xl tracking-wider text-primary'>{category.title}</h2>
          <div className='w-2 h-2 rounded-full bg-primary animate-glow-pulse' />
        </div>
        <p className='text-muted-foreground max-w-2xl mx-auto'>{category.description}</p>
      </div>
      {children}
    </div>
  )
}
