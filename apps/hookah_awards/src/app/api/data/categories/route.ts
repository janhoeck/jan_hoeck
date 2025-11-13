import fs from 'fs'
import path from 'path'

import { Category } from '../../../../types'

const loadCategories = () => {
  const filePath = path.join(process.cwd(), 'public/data', `categories.json`)
  return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as Category
}

export const GET = () => {
  try {
    const categories = loadCategories()
    return Response.json(categories)
  } catch (error) {
    console.error(error)
  }
  return Response.error()
}
