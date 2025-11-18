'use server'

import { deleteClipById } from '@/lib/db/api/clips'

import { Clip } from '../../../../types'

export async function deleteClip(clip: Clip) {
  await deleteClipById(clip.id)
}
