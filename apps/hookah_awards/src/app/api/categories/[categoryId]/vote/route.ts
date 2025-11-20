import { getCurrentUser } from '@/lib/auth-server'
import { db } from '@/lib/db'
import { votes } from '@/lib/db/schema'
import { and, eq } from 'drizzle-orm'
import { NextRequest } from 'next/server'
import { z } from 'zod'

type Params = Promise<{ categoryId: string }>

export const GET = async (_request: NextRequest, { params }: { params: Params }) => {
  const user = await getCurrentUser()
  if (!user) {
    return Response.json({ error: 'Not authenticated' }, { status: 401 })
  }

  const { categoryId } = await params

  try {
    const result = await db.query.votes.findFirst({
      where: and(eq(votes.userId, user.id), eq(votes.categoryId, categoryId)),
    })

    if (!result) {
      return new Response(null, { status: 204 })
    }

    return Response.json(result)
  } catch (error) {
    console.error(error)
  }
  return Response.error()
}

const bodySchema = z.object({
  referenceId: z.string(),
  referenceType: z.enum(['clip', 'survey']),
})

export const POST = async (request: NextRequest, { params }: { params: Params }) => {
  const user = await getCurrentUser()
  if (!user) {
    return Response.json({ error: 'Not authenticated' }, { status: 401 })
  }

  const userId = user.id
  const { categoryId } = await params

  const body = await request.json()
  if (!body) {
    return Response.json('', { status: 400 })
  }

  const { success, data, error } = bodySchema.safeParse(body)
  if (!success) {
    return Response.json(error, { status: 400 })
  }

  try {
    await db
      .insert(votes)
      .values({
        userId,
        categoryId,
        referenceId: data.referenceId,
        referenceType: data.referenceType,
      })
      .onConflictDoUpdate({
        target: [votes.userId, votes.categoryId],
        set: {
          referenceId: data.referenceId,
          referenceType: data.referenceType,
        },
      })
    return Response.json('', { status: 200 })
  } catch (error) {
    console.error(error)
  }
  return Response.error()
}
