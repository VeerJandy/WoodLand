import Image from 'next/image'
import { memo } from 'react'

import { ProductModel } from '~/models/ProductModel'

import styles from './ProductCard.module.scss'

interface ProductCardProps {
  product: ProductModel
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className={styles.card}>
      <Image
        src={product.images[0] as string}
        alt="Product"
        quality={100}
        fill
        sizes="33vw"
        className="skeleton"
      />
    </div>
  )
}

export default memo(ProductCard)
