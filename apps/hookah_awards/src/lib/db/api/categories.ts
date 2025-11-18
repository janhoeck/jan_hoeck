import { db } from '@/lib/db'
import { categories } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'

import { Category } from '../../../types'

export const getCategories = async (): Promise<(typeof categories.$inferSelect)[]> => {
  try {
    return await db.select().from(categories)
  } catch (error) {
    console.error('Failed to execute getCategories:', error)
    return []
  }
}

export const deleteCategoryById = async (categoryId: Category['id']): Promise<void> => {
  await db.delete(categories).where(eq(categories.id, categoryId))
}

export const insertCategory = async (category: typeof categories.$inferInsert) => {
  const createdCategories = await db.insert(categories).values(category).returning()
  return createdCategories[0]
}
