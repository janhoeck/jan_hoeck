import { db } from '@/lib/db'
import { CategorySchema, SurveySchema, surveySchema } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'

import { Survey } from '../../../types'

export const getSurveys = async (): Promise<(typeof surveySchema.$inferSelect)[]> => {
  try {
    return await db.select().from(surveySchema)
  } catch (error) {
    console.error('Failed to execute getSurveys:', error)
    return []
  }
}

export const getSurveysByCategoryId = async (categoryId: CategorySchema['id']): Promise<Survey[]> => {
  try {
    const result = await db.select().from(surveySchema).where(eq(surveySchema.categoryId, categoryId))
    return result as Survey[]
  } catch (error) {
    console.error('Failed to execute getSurveysByCategoryId:', error)
    return []
  }
}

export const deleteSurveyById = async (surveyId: SurveySchema['id']): Promise<void> => {
  await db.delete(surveySchema).where(eq(surveySchema.id, surveyId))
}

export const insertSurvey = async (survey: typeof surveySchema.$inferInsert) => {
  const createdSurvey = await db.insert(surveySchema).values(survey).returning()
  return createdSurvey[0]
}

export const updateSurvey = async (survey: Omit<SurveySchema, 'createdAt'>) => {
  const updatedSurveys = await db.update(surveySchema).set(survey).where(eq(surveySchema.id, survey.id)).returning()
  return updatedSurveys[0]
}
