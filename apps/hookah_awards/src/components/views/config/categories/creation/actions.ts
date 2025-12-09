'use server'

import { insertCategory } from '@/lib/db/api/categories'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

import { Category } from '../../../../../types'

const categorySchema = z.object({
  title: z.string(),
  description: z.string(),
  type: z.enum(['clip', 'survey']),
})

export async function createCategoryAction(formData: FormData) {
  const categoryFormData = Object.fromEntries([...formData]) as Omit<Category, 'id'>
  const { success, data, error } = categorySchema.safeParse(categoryFormData)

  if (!success) {
    console.error(error)
    return null
  }

  try {
    const category = await insertCategory(data)
    revalidatePath('/', 'layout')
    return category
  } catch (error) {
    console.error(error)
  }
  return null
}
