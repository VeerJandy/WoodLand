import CurrencyEnum from '~/enums/CurrencyEnum'
import type { Option, Options } from '~/models/GlobalModels'
import type { ProductModel } from '~/models/ProductModel'
import type { Characteristic } from '~/models/ProductModel'
import { Images } from '~/models/ProductModel'

type ProductFormModel = Omit<
  ProductModel,
  | 'id'
  | 'rating'
  | 'price'
  | 'category'
  | 'discount'
  | 'materials'
  | 'characteristics'
  | 'images'
> & {
  // Price
  currency: Option<CurrencyEnum> | null
  price: number | ''
  // Category
  categoryHigh: Option | null
  categoryLow: Option | null
  // Discount
  discount: number | ''
  discountExpiresAt: Date | string
  // Other
  materials: Options | null
  characteristics: Characteristic | null
  images: Images | null
}

export default ProductFormModel
