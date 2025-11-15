import { pgEnum, pgTable, text, uuid } from 'drizzle-orm/pg-core'

export const categoryType = pgEnum('category_type', ['clip', 'survey'])

export const categories = pgTable('categories', {
  id: uuid('id').primaryKey(),
  type: categoryType('type').notNull(),
  title: text('title').notNull(),
  description: text('description').notNull(),
})
