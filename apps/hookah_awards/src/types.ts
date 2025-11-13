export type CategoryType = 'clip' | 'survey'

export type Category = {
  id: string
  type: CategoryType
  title: string
  description: string
}

export type Clip = {
  id: string
  categoryId: Category['id']
  link: string
  title: string
  description: string | undefined | null
}

export type Survey = {
  id: string
  categoryId: Category['id']
  title: string
  description: string | undefined | null
}

export type CategoryWithClips = Category & {
  clips: Clip[]
}
