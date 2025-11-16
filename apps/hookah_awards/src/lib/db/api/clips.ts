import { db } from '@/lib/db'
import { clips } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'

import { Category, Clip } from '../../../types'

export const getClipsByCategoryId = async (categoryId: Category['id']): Promise<Clip[]> => {
  try {
    const result = await db.select().from(clips).where(eq(clips.categoryId, categoryId))
    return result as Clip[]
  } catch (error) {
    console.error('Failed to execute getClipsByCategoryId:', error)
    return []
  }
}
