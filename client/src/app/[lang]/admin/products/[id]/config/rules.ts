import type { ZodType } from 'zod'
import { array, boolean, custom, number, object, optional, string } from 'zod'

import { optionRule } from '~/consts/Rules'

import type ProductFormModel from '../models/ProductFormModel'

const TitleRule = string()
  .trim()
  .min(1, 'field_required')
  .max(20, 'field_max_length_20')
const DescriptionFullRule = string()
  .trim()
  .min(1, 'field_required')
  .max(200, 'field_max_length_200')

// eslint-disable-next-line
// @ts-ignore
export const productSchema: ZodType<ProductFormModel> = object({
  isAvailable: boolean(),
  titleUa: TitleRule,
  titleEn: TitleRule,
  descriptionUa: TitleRule,
  descriptionEn: TitleRule,
  descriptionFullUa: DescriptionFullRule,
  descriptionFullEn: DescriptionFullRule,
  price: number({
    invalid_type_error: 'field_must_be_a_number'
  }).min(0, 'min_value_0'),
  currency: optionRule,
  materials: optionRule.array().nonempty('field_required'),
  characteristics: array(
    object({
      title: TitleRule,
      description: DescriptionFullRule
    })
  ),
  images: array(
    custom(v => typeof v === 'string' || v instanceof File)
  ).nonempty(),
  categoryHigh: optionRule,
  categoryLow: optionRule,
  discount: optional(
    string().or(number().min(1, 'min_value_1').max(100, 'max_value_100'))
  ),
  discountExpiresAt: optional(string())
})
