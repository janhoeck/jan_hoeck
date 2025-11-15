import { db } from '@/lib/db'
import { surveys } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'
import { NextRequest } from 'next/server.js'

import { Survey } from '../../../../types'

type Params = Promise<{ categoryId: string }>

export const GET = async (_request: NextRequest, { params }: { params: Params }) => {
  const categoryId = (await params).categoryId

  try {
    const result = await db.select().from(surveys).where(eq(surveys.categoryId, categoryId))
    return Response.json(result as Survey[])
  } catch (error) {
    console.error(error)
  }
  return Response.error()
}
