'use server'

import { deleteClipById } from '@/lib/db/api/clips'
import { revalidatePath } from 'next/cache'

import { Clip } from '../../../../types'

export async function deleteClip(clip: Clip) {
  await deleteClipById(clip.id)
  revalidatePath('/', 'layout')
}
