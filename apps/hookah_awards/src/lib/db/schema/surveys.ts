import { pgTable, text, uuid } from 'drizzle-orm/pg-core'

import { categories } from './categories'

export const surveys = pgTable('surveys', {
  id: uuid('id').primaryKey().defaultRandom(),

  categoryId: uuid('category_id')
    .notNull()
    .references(() => categories.id, { onDelete: 'cascade' }),

  title: text('title').notNull(),

  description: text('description'),
})
