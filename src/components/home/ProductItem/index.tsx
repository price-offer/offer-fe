import type { ReactElement } from 'react'
import { Styled } from './styled'
import type { ProductItemProps } from './types'

const ProductItem = ({ productItem }: ProductItemProps): ReactElement => {
  return (
    <>
      <div>
        <Styled.ProductImgWrapper>
          <Styled.ProductImg
            key={productItem.id}
            alt={`productName-${productItem.title}`}
            maxWidth="276px"
            src={productItem.mainImageUrl}
          />
          <Styled.HeartButton
            icon="heart"
            size={16}
            toggleColor="brandPrimary"
            toggleIcon="heartFill"
          />
        </Styled.ProductImgWrapper>
        <Styled.ProductItemTitle>{productItem.title}</Styled.ProductItemTitle>
        <Styled.ProductItemStartPrice>시작가</Styled.ProductItemStartPrice>
        &nbsp;
        <Styled.ProductItemPrice>
          {productItem.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
        </Styled.ProductItemPrice>
        <Styled.ProductItemAddress>
          {productItem.tradeArea} 방금전
        </Styled.ProductItemAddress>
      </div>
    </>
  )
}
export { ProductItem, ProductItemProps }
