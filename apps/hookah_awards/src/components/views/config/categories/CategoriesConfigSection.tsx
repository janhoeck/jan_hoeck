import { CategoryTableContainer } from './CategoryTableContainer'
import { CreateCategoryButton } from './creation/CreateCategoryButton'

export const CategoriesConfigSection = () => {
  return (
    <section>
      <div className='flex justify-between'>
        <h2 className='text-2xl text-foreground mb-6'>Kategorien</h2>
        <CreateCategoryButton />
      </div>
      <CategoryTableContainer />
    </section>
  )
}
