'use client'

import { useState } from 'react'

import CurrencyList from '~/consts/CurrencyList'
import { getCategoryLowList } from '~/helpers/getList'
import type { Option, Options } from '~/models/GlobalModels'
import Button from '~/ui/button/Button'
import Checkbox from '~/ui/form/Checkbox'
import Date from '~/ui/form/Date'
import Form from '~/ui/form/Form'
import Input from '~/ui/form/Input'
import Select from '~/ui/form/Select'
import Textarea from '~/ui/form/Textarea'

import { productSchema } from './config/rules'
import type ProductFormModel from './models/ProductFormModel'

interface ProductFormProps {
  initialFormValue: ProductFormModel
  materials: Options
  categoryHigh: Options
}

const ProductForm = ({
  initialFormValue,
  materials,
  categoryHigh
}: ProductFormProps) => {
  const [categoryLow, setCategoryLow] = useState<Options>([])

  const onLoadCategoryLow = async (highCategory: Option) => {
    const lowCategory = await getCategoryLowList(highCategory)
    setCategoryLow(() => lowCategory)
  }

  const onSubmit = (d: any, s: any) => {
    console.log('onSubmit', d, s)
  }

  return (
    <Form
      onSubmit={onSubmit}
      defaultValues={initialFormValue}
      rules={productSchema}
      className="mt-8"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Input name="titleUa" placeholder="Title UA" />
        <Input name="titleEn" placeholder="Title EN" />
        <Input name="descriptionUa" placeholder="Description UA" />
        <Input name="descriptionEn" placeholder="Description EN" />
        <Textarea name="descriptionFullUa" placeholder="Description Full UA" />
        <Textarea name="descriptionFullEn" placeholder="Description Full EN" />
        <Input name="price" placeholder="Price" type="number" />
        <Select name="currency" options={CurrencyList} placeholder="Currency" />
        <Select
          name="materials"
          options={materials}
          placeholder="Materials"
          multiple
        />
        <Checkbox name="isAvailable" label="Is Available" />
      </div>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        <Select
          name="categoryHigh"
          options={categoryHigh}
          placeholder="Category High"
          onChange={onLoadCategoryLow}
        />
        <Select
          name="categoryLow"
          options={categoryLow}
          placeholder="Category Low"
          disabled={categoryLow.length === 0}
        />
        <Input name="discount" placeholder="Discount" type="number" />
        <Date name="discountExpiresAt" />
      </div>

      <div className="flex justify-center">
        <Button type="submit" label="common.save" className="mx-auto mt-8" />
      </div>
    </Form>
  )
}

export default ProductForm
