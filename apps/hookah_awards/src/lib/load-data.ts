import fs from 'fs'
import path from 'path'

import { Categories, CategoriesWithClips, Clips } from '../types'

// Finde das korrekte Datenverzeichnis
const getDataPath = () => {
  // In development: apps/hookah_awards/public/data
  // In production/Vercel: apps/hookah_awards/public/data
  const dataDir = path.join(process.cwd(), 'public/data')

  // Falls wir im Monorepo-Root sind, suche im App-Verzeichnis
  if (!fs.existsSync(dataDir)) {
    return path.join(process.cwd(), 'apps/hookah_awards/public/data')
  }

  return dataDir
}

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
    const filePath = path.join(getDataPath(), 'categories.json')
    console.log('Loading categories from:', filePath) // Debugging
    return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as Categories
  } catch (error) {
    console.error('Error loading categories:', error)
    return []
  }
}

const loadClips = () => {
  try {
    const filePath = path.join(getDataPath(), 'clips.json')
    console.log('Loading clips from:', filePath) // Debugging
    return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as Clips
  } catch (error) {
    console.error('Error loading clips:', error)
    return []
  }
}
