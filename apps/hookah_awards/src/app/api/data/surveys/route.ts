import fs from 'fs'
import path from 'path'

import { Survey } from '../../../../types'

const loadSurveys = () => {
  const filePath = path.join(process.cwd(), 'public/data', `surveys.json`)
  return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as Survey[]
}

export const GET = () => {
  try {
    const surveys = loadSurveys()
    return Response.json(surveys)
  } catch (error) {
    console.error(error)
  }
  return Response.error()
}
