'use server'

import { updateCategory } from '@/lib/db/api/categories'
import { z } from 'zod'

import { Category } from '../../../../../types'

const categorySchema = z.object({
  title: z.string(),
  description: z.string(),
})

export async function updateCategoryAction(categoryId: Category['id'], formData: FormData) {
  const categoryFormData = Object.fromEntries([...formData]) as Omit<Category, 'id'>
  const { success, data, error } = categorySchema.safeParse(categoryFormData)

  if (!success) {
    console.error(error)
    return null
  }

  try {
    return await updateCategory({
      id: categoryId,
      ...data,
    })
  } catch (error) {
    console.error(error)
  }
  return null
}
