import { db } from '@/lib/db'
import { surveys } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'

import { Category, Survey } from '../../../types'

export const getSurveysByCategoryId = async (categoryId: Category['id']): Promise<Survey[]> => {
  try {
    const result = await db.select().from(surveys).where(eq(surveys.categoryId, categoryId))
    return result as Survey[]
  } catch (error) {
    console.error('Failed to execute getSurveysByCategoryId:', error)
    return []
  }
}
