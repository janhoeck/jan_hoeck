import { db } from '@/lib/db'
import { votes } from '@/lib/db/schema'

export const GET = async () => {
  try {
    const result = await db.select().from(votes)
    return Response.json(result ?? [])
  } catch (error) {
    console.error(error)
  }
  return Response.error()
}
