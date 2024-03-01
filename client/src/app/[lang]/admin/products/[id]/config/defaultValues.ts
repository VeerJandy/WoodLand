import CurrencyEnum from '~/enums/CurrencyEnum'

import type ProductFormModel from '../models/ProductFormModel'

const DefaultProductForm: ProductFormModel = {
  isAvailable: true,
  titleUa: '',
  titleEn: '',
  descriptionUa: '',
  descriptionEn: '',
  descriptionFullUa: '',
  descriptionFullEn: '',
  price: '',
  currency: {
    title: 'currency.uah',
    value: CurrencyEnum.Uah
  },
  materials: null,
  characteristics: null,
  images: null,
  categoryHigh: null,
  categoryLow: null,
  discount: '',
  discountExpiresAt: ''
}

export default DefaultProductForm
