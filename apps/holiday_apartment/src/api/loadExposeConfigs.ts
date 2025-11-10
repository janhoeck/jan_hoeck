import { PropertyConfiguration } from '@/types/PropertyConfiguration'
import { isDefined } from '@jan_hoeck/utils'
import fs from 'fs'
import path from 'path'

export const loadExposeConfigs = (): PropertyConfiguration[] => {
  try {
    const filePath = path.join(process.cwd(), 'public/exposes')
    const dictionaryFileNames = fs.readdirSync(filePath)
    return dictionaryFileNames.map((fileName) => loadExposeConfig(fileName.split('.')[0]!)).filter(isDefined)
  } catch (error) {
    console.error(error)
  }
  return []
}

export const loadExposeConfig = (id: string): PropertyConfiguration | undefined => {
  try {
    const filePath = path.join(process.cwd(), 'public/exposes', `${id}.json`)
    const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    return jsonData as PropertyConfiguration
  } catch (error) {
    console.error(error)
    return undefined
  }
}
