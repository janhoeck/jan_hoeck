import fs from 'fs'
import { NextRequest } from 'next/server.js'
import path from 'path'

import { Clip } from '../../../../../types'

type Params = Promise<{ categoryId: string }>

const loadClips = (categoryId: string) => {
  const filePath = path.join(process.cwd(), 'public/data', `clips.json`)
  const clips = JSON.parse(fs.readFileSync(filePath, 'utf-8')) as Clip[]
  return clips.filter((clip) => clip.categoryId === categoryId)
}

export const GET = async (_request: NextRequest, { params }: { params: Params }) => {
  const categoryId = (await params).categoryId

  try {
    const clips = loadClips(categoryId)
    return Response.json(clips)
  } catch (error) {
    console.error(error)
  }
  return Response.error()
}
