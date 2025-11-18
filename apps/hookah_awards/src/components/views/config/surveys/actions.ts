'use server'

import { deleteClipById } from '@/lib/db/api/clips'

import { Survey } from '../../../../types'

export async function deleteSurvey(survey: Survey) {
  await deleteClipById(survey.id)
}
