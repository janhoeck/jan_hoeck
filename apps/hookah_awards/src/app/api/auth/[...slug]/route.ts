'use server'

import { toNextJsHandler } from 'better-auth/next-js'

async function getHandlers() {
  const { auth } = await import('../../../../lib/auth')
  return toNextJsHandler(auth)
}

export const GET = async (request: Request) => {
  const handlers = await getHandlers()
  return handlers.GET(request)
}

export const POST = async (request: Request) => {
  const handlers = await getHandlers()
  return handlers.POST(request)
}
