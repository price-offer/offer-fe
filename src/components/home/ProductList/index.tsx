import type { ReactElement } from 'react'
import { Styled } from './styled'
import type { ProductListProps } from './types'
import { ProductItem } from '../ProductItem'

const ProductList = ({ productList }: ProductListProps): ReactElement => {
  return (
    <>
      <Styled.NewProductTitle>새로운 상품</Styled.NewProductTitle>
      <Styled.ProductListWrapper>
        {productList.map(item => (
          <ProductItem key={item.id} productItem={item}></ProductItem>
        ))}
      </Styled.ProductListWrapper>
    </>
  )
}
export { ProductList, ProductListProps }
