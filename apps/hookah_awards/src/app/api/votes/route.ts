import { getCurrentUser } from '@/lib/auth-server'
import { getVotesByUserId } from '@/lib/db/api/votes'

export const GET = async () => {
  const user = await getCurrentUser()
  if (!user) {
    return Response.json({ error: 'Not authenticated' }, { status: 401 })
  }

  try {
    const result = await getVotesByUserId(user.id)
    if (!result) {
      return new Response(null, { status: 204 })
    }

    return Response.json(result)
  } catch (error) {
    console.error(error)
  }
  return Response.error()
}
