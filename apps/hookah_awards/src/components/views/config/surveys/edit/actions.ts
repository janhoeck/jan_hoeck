'use server'

import { updateSurvey } from '@/lib/db/api/surveys'
import { z } from 'zod'

import { Survey } from '../../../../../types'
import { revalidatePath } from 'next/cache'

const surveySchema = z.object({
  title: z.string(),
  description: z.string(),
  categoryId: z.string(),
})

export async function updateSurveyAction(surveyId: Survey['id'], formData: FormData) {
  const surveyFormData = Object.fromEntries([...formData]) as Omit<Survey, 'id'>
  const { success, data, error } = surveySchema.safeParse(surveyFormData)

  if (!success) {
    console.error(error)
    return null
  }

  try {
    const survey = await updateSurvey({
      id: surveyId,
      ...data,
    })
    revalidatePath('/', 'layout')
    return survey
  } catch (error) {
    console.error(error)
  }
  return null
}
