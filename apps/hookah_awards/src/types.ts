export type Category = {
  id: string
  title: string
  description: string
}

export type Categories = Category[]

export type Clip = {
  id: string
  categoryId: Category['id']
  link: string
  title: string
  description: string | undefined | null
}

export type Clips = Clip[]

export type CategoryWithClips = Category & {
  clips: Clips
}

export type CategoriesWithClips = CategoryWithClips[]
