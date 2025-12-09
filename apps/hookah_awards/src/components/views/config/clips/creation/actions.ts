'use server'

import { insertClip } from '@/lib/db/api/clips'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

import { Clip } from '../../../../../types'

const clipSchema = z.object({
  title: z.string(),
  description: z.string(),
  link: z.url(),
  categoryId: z.string(),
})

export async function createClipAction(formData: FormData) {
  const clipFormData = Object.fromEntries([...formData]) as Omit<Clip, 'id'>
  const { success, data, error } = clipSchema.safeParse(clipFormData)

  if (!success) {
    console.error(error)
    return null
  }

  try {
    const clip = await insertClip(data)
    revalidatePath('/', 'layout')
    return clip
  } catch (error) {
    console.error(error)
  }
  return null
}
