'use server'

import { deleteCategoryById } from '@/lib/db/api/categories'

import { Category } from '../../../../types'
import { revalidatePath } from 'next/cache'

export async function deleteCategoryAction(category: Category) {
  await deleteCategoryById(category.id)
  revalidatePath('/', 'layout')
}
