import fs from 'fs'
import path from 'path'

import { Categories, CategoriesWithClips, Clips } from '../types'

export const loadData = () => {
  const categories = loadCategories()
  const clips = loadClips()

  return categories.map((category) => ({
    ...category,
    clips: clips.filter((clip) => clip.categoryId === category.id),
  })) as CategoriesWithClips
}

const loadCategories = () => {
  try {
    const filePath = path.join(process.cwd(), 'public/data', `categories.json`)
    return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as Categories
  } catch (error) {
    console.error(error)
    return []
  }
}

const loadClips = () => {
  try {
    const filePath = path.join(process.cwd(), 'public/data', `clips.json`)
    return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as Clips
  } catch (error) {
    console.error(error)
    return []
  }
}
