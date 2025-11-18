import { db } from '@/lib/db'
import { clips } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'

import { Category, Clip } from '../../../types'

export const getClips = async (): Promise<(typeof clips.$inferSelect)[]> => {
  try {
    return await db.select().from(clips)
  } catch (error) {
    console.error('Failed to execute getClips:', error)
    return []
  }
}

export const getClipsByCategoryId = async (categoryId: Category['id']): Promise<(typeof clips.$inferSelect)[]> => {
  try {
    return await db.select().from(clips).where(eq(clips.categoryId, categoryId))
  } catch (error) {
    console.error('Failed to execute getClipsByCategoryId:', error)
    return []
  }
}

export const deleteClipById = async (clipId: Clip['id']): Promise<void> => {
  await db.delete(clips).where(eq(clips.id, clipId))
}

export const insertClip = async (clip: typeof clips.$inferInsert) => {
  const createdClip = await db.insert(clips).values(clip).returning()
  return createdClip[0]
}
