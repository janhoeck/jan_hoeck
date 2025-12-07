import { db } from '@/lib/db'
import { CategorySchema, VoteSchema, voteSchema } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'

export const getVotes = async (): Promise<VoteSchema[]> => {
  try {
    return await db.select().from(voteSchema)
  } catch (error) {
    console.error('Failed to execute getVotes:', error)
    return []
  }
}

export const getVotesByUserId = async (userId: string): Promise<VoteSchema[]> => {
  try {
    return await db.select().from(voteSchema).where(eq(voteSchema.userId, userId))
  } catch (error) {
    console.error('Failed to execute getVotesByUserId:', error)
    return []
  }
}

export const getVoteByCategoryId = async (categoryId: CategorySchema['id']): Promise<VoteSchema | undefined> => {
  try {
    const response = await db.select().from(voteSchema).where(eq(voteSchema.categoryId, categoryId))
    return response[0]
  } catch (error) {
    console.error('Failed to execute getVoteByCategoryId:', error)
  }
}

export const insertVote = async (vote: Omit<VoteSchema, 'id' | 'createdAt'>) => {
  await db
    .insert(voteSchema)
    .values({
      userId: vote.userId,
      categoryId: vote.categoryId,
      referenceId: vote.referenceId,
      referenceType: vote.referenceType,
    })
    .onConflictDoUpdate({
      target: [voteSchema.userId, voteSchema.categoryId],
      set: {
        referenceId: vote.referenceId,
        referenceType: vote.referenceType,
      },
    })
}
