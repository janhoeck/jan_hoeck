'use server'

import { deleteSurveyById } from '@/lib/db/api/surveys'
import { revalidatePath } from 'next/cache'

import { Survey } from '../../../../types'

export async function deleteSurveyAction(survey: Survey) {
  await deleteSurveyById(survey.id)
  revalidatePath('/', 'layout')
}
