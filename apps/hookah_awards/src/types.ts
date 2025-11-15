export type CategoryType = 'clip' | 'survey'

export type Category = {
  id: string
  type: CategoryType
  title: string
  description: string
}

export type BaseCategoryItem = {
  id: string
  categoryId: Category['id']
  title: string
  description: string | undefined | null
}

export type Clip = BaseCategoryItem & {
  link: string
}

export type Survey = BaseCategoryItem
