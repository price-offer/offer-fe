import { ProductItem } from './ProductItem'

import type { ReactElement } from 'react'

interface ProductListProps {
  productList: {
    imageUrl: string
    price: string
    title: string
    url: string
  }[]
}

const ProductList = ({ productList }: ProductListProps): ReactElement => {
  return (
    <>
      <div>새로운 상품</div>
      <div>
        {productList.map(item => (
          <ProductItem key={item.title} productItem={item}></ProductItem>
        ))}
      </div>
    </>
  )
}
export { ProductList }
