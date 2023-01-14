import { ProductItem } from './ProductItem'

import type { ReactElement } from 'react'
import styled from '@emotion/styled'

interface ProductListProps {
  productList: {
    imageUrl: string
    price: string
    title: string
    url: string
    address: string
  }[]
}

const ProductList = ({ productList }: ProductListProps): ReactElement => {
  return (
    <>
      <NewProductTitle>새로운 상품</NewProductTitle>
      <ProductListWrapper>
        {productList.map(item => (
          <ProductItem key={item.title} productItem={item}></ProductItem>
        ))}
      </ProductListWrapper>
    </>
  )
}
export { ProductList }

const NewProductTitle = styled.div`
  ${({ theme }): string => theme.fonts.headline02B}
  margin-top: 52px;
  margin-bottom: 22px;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    ${({ theme }): string => theme.fonts.subtitle01B}
    margin-top: 40px;
    margin-bottom: 20px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    margin-bottom: 16px;
  }
`

const ProductListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 31px;
  column-gap: 28px;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    justify-content: center;
    grid-template-columns: repeat(4, minmax(10%, 166px));
    padding-left: 24px;
    padding-right: 24px;
    row-gap: 18px;
    column-gap: 20px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    justify-content: center;
    grid-template-columns: repeat(2, minmax(10%, 160px));
    padding-left: 16px;
    padding-right: 16px;
    row-gap: 8px;
    column-gap: 20px;
  }
`
