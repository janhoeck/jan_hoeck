'use server'

import { updateClip } from '@/lib/db/api/clips'
import { z } from 'zod'

import { Clip } from '../../../../../types'
import { revalidatePath } from 'next/cache'

const clipSchema = z.object({
  title: z.string(),
  description: z.string(),
  link: z.url(),
  categoryId: z.string(),
})

export async function updateClipAction(clipId: Clip['id'], formData: FormData) {
  const clipFormData = Object.fromEntries([...formData]) as Omit<Clip, 'id'>
  const { success, data, error } = clipSchema.safeParse(clipFormData)

  if (!success) {
    console.error(error)
    return null
  }

  try {
    const clip =  await updateClip({
      id: clipId,
      ...data,
    })
    revalidatePath('/', 'layout')
    return clip
  } catch (error) {
    console.error(error)
  }
  return null
}
