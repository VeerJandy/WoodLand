import RouterEnum from '~/enums/RouterEnum'
import { getCategoryHighList, getMaterialList } from '~/helpers/getList'
import AppLink from '~/ui/app-link/AppLink'
import IconArrowLeft from '~/ui/icons/IconArrowLeft'
import Text from '~/ui/text/Text'

import DefaultProductForm from './config/defaultValues'
import CreateName from './consts/CreateName'
import type ProductFormModel from './models/ProductFormModel'
import ProductForm from './ProductForm'

interface ProductProps {
  params: {
    id: string
  }
}

const getProduct = async (id: string): Promise<ProductFormModel> => {
  if (id === CreateName) return DefaultProductForm
  return DefaultProductForm
}

const Product = async ({ params: { id } }: ProductProps) => {
  const initialFormValue = await getProduct(id)
  const materials = await getMaterialList()
  const categoryHigh = await getCategoryHighList()

  return (
    <section className="my-4">
      <div className="flex items-center justify-between">
        <Text
          as="h4"
          className="h4"
          label={
            id === CreateName ? 'admin.products.create' : 'admin.products.edit'
          }
        />
        <AppLink
          label="common.back"
          href={RouterEnum.AdminProducts}
          button
          buttonProps={{ icon: <IconArrowLeft /> }}
        />
      </div>
      <ProductForm
        initialFormValue={initialFormValue}
        materials={materials}
        categoryHigh={categoryHigh}
      />
    </section>
  )
}

export default Product
