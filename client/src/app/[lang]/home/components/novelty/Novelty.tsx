import ProductCard from '~/components/product-card/ProductCard'
import { requestServer } from '~/helpers/requestServer'
import { ProductModel } from '~/models/ProductModel'
import Slider from '~/ui/silder/Slider'

const getNovelty = async () => {
  try {
    const { data } = await requestServer('/products/novelty')
    return data
  } catch (e) {
    return []
  }
}

const Novelty = async () => {
  const list = await getNovelty()

  return (
    <section className="container py-4">
      <Slider
        title="Novelty"
        items={list}
        render={(product: ProductModel) => <ProductCard product={product} />}
      />
    </section>
  )
}

export default Novelty
