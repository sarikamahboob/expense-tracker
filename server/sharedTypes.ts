import { z } from "zod"

export const expenseSchema = z.object({
  id: z.number().int().positive().min(1),
  title: z.string().min(3, 'Title must be at lest 3 characters').max(100, 'Title must be at most 100 characters'),
  // amount: z.number().int().positive()
  amount: z.string().regex(/^\d+(\.\d{1,2})?$/, {message: 'amount must be positive'})
})

export const createExpenseSchema = expenseSchema.omit({id: true})