import ProductCard from '~/components/product-card/ProductCard'
import { requestServer } from '~/helpers/requestServer'
import { ProductModel } from '~/models/ProductModel'
import Slider from '~/ui/silder/Slider'

const getPopular = async () => {
  try {
    const { data } = await requestServer('/products/popular')
    return data
  } catch (e) {
    return []
  }
}

const Popular = async () => {
  const list = await getPopular()

  return (
    <section className="container py-4">
      <Slider
        title="Popular"
        items={list}
        render={(product: ProductModel) => <ProductCard product={product} />}
      />
    </section>
  )
}

export default Popular
