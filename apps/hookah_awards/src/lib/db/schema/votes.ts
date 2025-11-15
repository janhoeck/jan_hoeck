import { pgTable, primaryKey, text, timestamp, uuid } from 'drizzle-orm/pg-core'

import { categories, categoryType } from './categories'
import { user } from './users'

export const votes = pgTable(
  'votes',
  {
    userId: text('user_id')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade' }),

    categoryId: uuid('category_id')
      .notNull()
      .references(() => categories.id, { onDelete: 'cascade' }),

    referenceId: uuid('reference_id').notNull(), // Clip oder Survey ID
    referenceType: categoryType('reference_type').notNull(), // 'clip' | 'survey'

    createdAt: timestamp('created_at').notNull().defaultNow(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.userId, table.categoryId] }),
  })
)
