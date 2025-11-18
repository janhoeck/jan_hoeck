'use server'

import { deleteCategoryById } from '@/lib/db/api/categories'

import { Category } from '../../../../types'

export async function deleteCategory(category: Category) {
  await deleteCategoryById(category.id)
}
