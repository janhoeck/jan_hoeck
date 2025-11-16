import { getCategories } from '@/lib/db/api/categories'

export const GET = async () => {
  const categories = await getCategories()
  Response.json(categories)
}
