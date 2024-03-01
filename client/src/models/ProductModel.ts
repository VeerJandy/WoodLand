import CurrencyEnum from '~/enums/CurrencyEnum'
import type { ID, Option, Options } from '~/models/GlobalModels'

export interface Characteristic {
  title: string
  description: string
}

export interface Price {
  currency: CurrencyEnum
  value: number
}

export interface Discount {
  value: number
  expiresAt: Date | string
}

export interface Rating {
  number: number
  rating: number
}

export interface Category {
  high: Option
  low: Option
}

export type Images = string[] | File[]

export interface ProductModel {
  id: ID
  isAvailable: boolean
  titleUa: string
  titleEn: string
  descriptionUa: string
  descriptionEn: string
  descriptionFullUa: string
  descriptionFullEn: string
  price: Price
  discount: Discount
  materials: Options
  characteristics: Characteristic[]
  rating: Rating
  category: Category
  images: Images
}
