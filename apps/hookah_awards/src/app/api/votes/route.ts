import { getVotes } from '@/lib/db/api/votes'

export const GET = async () => {
  const result = await getVotes()
  return Response.json(result)
}
