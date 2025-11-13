import fs from 'fs'
import { NextRequest } from 'next/server.js'
import path from 'path'

import { Survey } from '../../../../../types'

type Params = Promise<{ categoryId: string }>

const loadSurveys = (categoryId: string) => {
  const filePath = path.join(process.cwd(), 'public/data', `surveys.json`)
  const surveys = JSON.parse(fs.readFileSync(filePath, 'utf-8')) as Survey[]
  return surveys.filter((survey) => survey.categoryId === categoryId)
}

export const GET = async (_request: NextRequest, { params }: { params: Params }) => {
  const categoryId = (await params).categoryId

  try {
    const surveys = loadSurveys(categoryId)
    return Response.json(surveys)
  } catch (error) {
    console.error(error)
  }
  return Response.error()
}
