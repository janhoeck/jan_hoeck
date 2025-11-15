import { db } from '@/lib/db'
import { clips } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'
import { NextRequest } from 'next/server.js'

import { Clip } from '../../../../types'

type Params = Promise<{ categoryId: string }>

export const GET = async (_request: NextRequest, { params }: { params: Params }) => {
  const categoryId = (await params).categoryId

  try {
    const result = await db.select().from(clips).where(eq(clips.categoryId, categoryId))
    return Response.json(result as Clip[])
  } catch (error) {
    console.error(error)
  }
  return Response.error()
}
