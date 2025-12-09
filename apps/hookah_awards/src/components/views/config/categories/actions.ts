'use server'

import { deleteCategoryById } from '@/lib/db/api/categories'
import { revalidatePath } from 'next/cache'

import { Category } from '../../../../types'

export async function deleteCategoryAction(category: Category) {
  await deleteCategoryById(category.id)
  revalidatePath('/', 'layout')
}
