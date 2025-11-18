'use server'

import { insertCategory } from '@/lib/db/api/categories'
import { z } from 'zod'

import { Category } from '../../../../../types'

const categorySchema = z.object({
  title: z.string(),
  description: z.string(),
  type: z.enum(['clip', 'survey']),
})

export async function createCategory(formData: FormData) {
  const categoryFormData = Object.fromEntries([...formData]) as Omit<Category, 'id'>
  const { success, data, error } = categorySchema.safeParse(categoryFormData)

  if (!success) {
    console.error(error)
    return null
  }

  try {
    return await insertCategory(data)
  } catch (error) {
    console.error(error)
  }
  return null
}
