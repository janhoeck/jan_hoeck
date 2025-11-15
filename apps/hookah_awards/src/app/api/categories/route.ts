import { db } from '@/lib/db'
import { categories } from '@/lib/db/schema'

import { Category } from '../../../types'

export const GET = async () => {
  try {
    const result = await db.select().from(categories)
    return Response.json(result as Category[])
  } catch (error) {
    console.error(error)
  }
  return Response.error()
}
