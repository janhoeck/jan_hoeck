import { ExposeConfiguration } from '@/types/ExposeConfiguration'
import { isDefined } from '@jan_hoeck/utils'
import fs from 'fs'
import path from 'path'

export const loadExposeConfigs = (): ExposeConfiguration[] => {
  try {
    const filePath = path.join(process.cwd(), 'public/exposes')
    const dictionaryFileNames = fs.readdirSync(filePath)
    return dictionaryFileNames.map((fileName) => loadExposeConfig(fileName.split('.')[0]!)).filter(isDefined)
  } catch (error) {
    console.error(error)
  }
  return []
}

export const loadExposeConfig = (id: string): ExposeConfiguration | undefined => {
  try {
    const filePath = path.join(process.cwd(), 'public/exposes', `${id}.json`)
    const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    return jsonData as ExposeConfiguration
  } catch (error) {
    console.error(error)
    return undefined
  }
}
