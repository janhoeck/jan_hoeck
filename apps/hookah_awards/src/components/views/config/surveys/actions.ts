'use server'

import { deleteSurveyById } from '@/lib/db/api/surveys'

import { Survey } from '../../../../types'
import { revalidatePath } from 'next/cache'

export async function deleteSurveyAction(survey: Survey) {
  await deleteSurveyById(survey.id)
  revalidatePath('/', 'layout')
}
