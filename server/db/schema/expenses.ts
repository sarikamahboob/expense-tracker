import { integer,text, numeric, pgEnum, pgTable, serial, uniqueIndex, varchar, index, timestamp, date } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';


export const expenses = pgTable(
  'expenses',
  {
    id: serial('id').primaryKey(),
    userId: text('user_id').notNull(),
    title: text('title').notNull(),
    amount: numeric('amount',{precision: 12, scale: 2}).notNull(),
    date: date("date").notNull(),
    createdAt: timestamp('created_at').defaultNow(),
  }, (expenses) => {
  return {
    userIdIndex: index('name_idx').on(expenses.userId),
  }
});

export const insertExpensesSchema = createInsertSchema(expenses, {
  title: z.string().min(3, 'Title must be at lest 3 characters'),
  amount: z.string().regex(/^\d+(\.\d{1,2})?$/, {message: 'amount must be a valid monetary value'})
});
// Schema for selecting a user - can be used to validate API responses
export const selectExpensesSchema = createSelectSchema(expenses);

