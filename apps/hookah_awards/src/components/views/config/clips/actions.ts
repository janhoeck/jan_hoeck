'use server'

import { deleteClipById } from '@/lib/db/api/clips'

import { Clip } from '../../../../types'
import { revalidatePath } from 'next/cache'

export async function deleteClip(clip: Clip) {
  await deleteClipById(clip.id)
  revalidatePath('/', 'layout')
}
