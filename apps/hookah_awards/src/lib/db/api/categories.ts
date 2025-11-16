import { db } from '@/lib/db'
import { categories } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'

import { Category } from '../../../types'

export const getCategories = async (): Promise<Category[]> => {
  try {
    const result = await db.select().from(categories)
    return result as Category[]
  } catch (error) {
    console.error('Failed to execute getCategories:', error)
    return []
  }
}

export const getCategoryById = async (categoryId: Category['id']): Promise<Category | null> => {
  try {
    const result = await db.select().from(categories).where(eq(categories.id, categoryId))
    if (result.length === 0) {
      return null
    }

    return result[0] as Category
  } catch (error) {
    console.error('Failed to execute getCategoryById:', error)
    return null
  }
}
