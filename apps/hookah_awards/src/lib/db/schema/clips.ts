import { pgTable, text, uuid } from 'drizzle-orm/pg-core'

import { categories } from './categories'

export const clips = pgTable('clips', {
  id: uuid('id').primaryKey(),
  categoryId: uuid('category_id')
    .notNull()
    .references(() => categories.id, { onDelete: 'cascade' }),

  link: text('link').notNull(),
  title: text('title').notNull(),

  description: text('description'),
})
