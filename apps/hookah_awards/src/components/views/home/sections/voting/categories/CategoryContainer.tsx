import { PropsWithChildren } from 'react'

import { Category } from '../../../../../../types'
import { CategoryContextProvider } from './context/CategoryContextProvider'

export type CategoryContainerProps = PropsWithChildren<{
  category: Category
}>

export const CategoryContainer = (props: CategoryContainerProps) => {
  const { category, children } = props

  return (
    <div className='flex flex-col items-center'>
      <div className='max-w-2xl mb-10'>
        <h2 className='text-center text-foreground text-3xl font-extrabold mb-4 font-maragsa uppercase tracking-wide'>
          {category.title}
        </h2>
        <p className='text-foreground text-lg text-center'>{category.description}</p>
      </div>
      <CategoryContextProvider categoryId={category.id}>{children}</CategoryContextProvider>
    </div>
  )
}
