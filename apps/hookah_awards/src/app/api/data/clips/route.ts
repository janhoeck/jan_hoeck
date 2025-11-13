import fs from 'fs'
import path from 'path'

import { Clip } from '../../../../types'

const loadClips = () => {
  const filePath = path.join(process.cwd(), 'public/data', `clips.json`)
  return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as Clip[]
}

export const GET = () => {
  try {
    const clips = loadClips()
    return Response.json(clips)
  } catch (error) {
    console.error(error)
  }
  return Response.error()
}
