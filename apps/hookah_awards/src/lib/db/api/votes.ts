import { db } from '@/lib/db'
import { votes } from '@/lib/db/schema'

export const getVotes = async () => {
  try {
    return await db.select().from(votes)
  } catch (error) {
    console.error('Failed to execute getVotes:', error)
    return []
  }
}
