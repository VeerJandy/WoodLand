import type { ZodObject } from 'zod'
import { object, string } from 'zod'

export const optionRule: ZodObject<any> = object({
  value: string(),
  title: string()
})
