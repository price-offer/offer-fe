import type { ReactElement } from 'react'
import { ProductItem } from '../ProductItem'
import { NewProductTitle, ProductListWrapper } from './styled'
import type { ProductListProps } from './types'

const ProductList = ({ productList }: ProductListProps): ReactElement => {
  return (
    <>
      <NewProductTitle>새로운 상품</NewProductTitle>
      <ProductListWrapper>
        {productList.map(item => (
          <ProductItem key={item.id} productItem={item}></ProductItem>
        ))}
      </ProductListWrapper>
    </>
  )
}
export { ProductList }
