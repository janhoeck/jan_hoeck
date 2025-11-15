import { db } from '@/lib/db'
import { categories, clips, surveys } from '@/lib/db/schema'
import fs from 'fs'
import { NextResponse } from 'next/server'
import path from 'path'

import { Category, Clip, Survey } from '../../../types'

const loadCategories = () => {
  const filePath = path.join(process.cwd(), 'public/examples', `categories.json`)
  return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as Category[]
}

const loadClips = () => {
  const filePath = path.join(process.cwd(), 'public/examples', `clips.json`)
  return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as Clip[]
}

const loadSurveys = () => {
  const filePath = path.join(process.cwd(), 'public/examples', `surveys.json`)
  return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as Survey[]
}

export async function POST() {
  try {
    const categoriesData = loadCategories()
    await db.insert(categories).values(categoriesData)

    const clipsData = loadClips()
    await db.insert(clips).values(clipsData)

    const surveysData = loadSurveys()
    await db.insert(surveys).values(surveysData)

    return NextResponse.json({ message: '🌱 Sample data successfully created!' })
  } catch (error) {
    console.error('Error creating data:', error)
    return NextResponse.json({ message: '❌ Error creating data', error }, { status: 500 })
  }
}
