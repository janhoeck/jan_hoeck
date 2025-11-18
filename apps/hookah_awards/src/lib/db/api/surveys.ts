import { db } from '@/lib/db'
import { surveys } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'

import { Category, Survey } from '../../../types'

export const getSurveys = async (): Promise<(typeof surveys.$inferSelect)[]> => {
  try {
    return await db.select().from(surveys)
  } catch (error) {
    console.error('Failed to execute getSurveys:', error)
    return []
  }
}

export const getSurveysByCategoryId = async (categoryId: Category['id']): Promise<Survey[]> => {
  try {
    const result = await db.select().from(surveys).where(eq(surveys.categoryId, categoryId))
    return result as Survey[]
  } catch (error) {
    console.error('Failed to execute getSurveysByCategoryId:', error)
    return []
  }
}

export const deleteSurveyById = async (surveyId: Survey['id']): Promise<void> => {
  await db.delete(surveys).where(eq(surveys.id, surveyId))
}

export const insertSurvey = async (survey: typeof surveys.$inferInsert) => {
  const createdSurvey = await db.insert(surveys).values(survey).returning()
  return createdSurvey[0]
}
