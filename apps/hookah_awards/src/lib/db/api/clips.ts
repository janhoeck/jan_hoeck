import { db } from '@/lib/db'
import { CategorySchema, ClipSchema, clipSchema } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'

export const getClips = async (): Promise<(typeof clipSchema.$inferSelect)[]> => {
  try {
    return await db.select().from(clipSchema)
  } catch (error) {
    console.error('Failed to execute getClips:', error)
    return []
  }
}

export const getClipsByCategoryId = async (
  categoryId: CategorySchema['id']
): Promise<(typeof clipSchema.$inferSelect)[]> => {
  try {
    return await db.select().from(clipSchema).where(eq(clipSchema.categoryId, categoryId))
  } catch (error) {
    console.error('Failed to execute getClipsByCategoryId:', error)
    return []
  }
}

export const deleteClipById = async (clipId: ClipSchema['id']): Promise<void> => {
  await db.delete(clipSchema).where(eq(clipSchema.id, clipId))
}

export const insertClip = async (clip: typeof clipSchema.$inferInsert) => {
  const createdClip = await db.insert(clipSchema).values(clip).returning()
  return createdClip[0]
}

export const updateClip = async (clip: Omit<ClipSchema, 'createdAt'>) => {
  const updatedClips = await db.update(clipSchema).set(clip).where(eq(clipSchema.id, clip.id)).returning()
  return updatedClips[0]
}
