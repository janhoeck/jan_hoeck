import { db } from '@/lib/db'
import { CategorySchema, categorySchema } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'

export const getCategories = async (): Promise<(typeof categorySchema.$inferSelect)[]> => {
  try {
    return await db.select().from(categorySchema).orderBy(categorySchema.createdAt)
  } catch (error) {
    console.error('Failed to execute getCategories:', error)
    return []
  }
}

export const deleteCategoryById = async (categoryId: CategorySchema['id']): Promise<void> => {
  await db.delete(categorySchema).where(eq(categorySchema.id, categoryId))
}

export const insertCategory = async (category: typeof categorySchema.$inferInsert) => {
  const createdCategories = await db.insert(categorySchema).values(category).returning()
  return createdCategories[0]
}

export const updateCategory = async (category: Omit<CategorySchema, 'type' | 'createdAt'>) => {
  const updatedCategories = await db
    .update(categorySchema)
    .set(category)
    .where(eq(categorySchema.id, category.id))
    .returning()
  return updatedCategories[0]
}
