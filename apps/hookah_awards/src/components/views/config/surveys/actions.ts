'use server'

import { deleteSurveyById } from '@/lib/db/api/surveys'

import { Survey } from '../../../../types'

export async function deleteSurveyAction(survey: Survey) {
  await deleteSurveyById(survey.id)
}
