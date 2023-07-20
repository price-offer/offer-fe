import type { ReactElement } from 'react'
import {
  ProductImg,
  HeartButton,
  ProductImgWrapper,
  ProductItemTitle,
  ProductItemStartPrice,
  ProductItemPrice,
  ProductItemAddress
} from './styled'
import type { ProductItemProps } from './types'

const ProductItem = ({ productItem }: ProductItemProps): ReactElement => {
  return (
    <div>
      <ProductImgWrapper>
        <ProductImg
          key={productItem.id}
          alt={`productName-${productItem.title}`}
          src={productItem.mainImageUrl}
          style={{ maxWidth: '276px' }}
        />
        <HeartButton
          icon="heart"
          size={16}
          toggleColor="brandPrimary"
          toggleIcon="heartFill"></HeartButton>
      </ProductImgWrapper>
      <ProductItemTitle>{productItem.title}</ProductItemTitle>
      <ProductItemStartPrice>시작가</ProductItemStartPrice>
      &nbsp;
      <ProductItemPrice>
        {productItem.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
      </ProductItemPrice>
      <ProductItemAddress>{productItem.tradeArea} 방금전</ProductItemAddress>
    </div>
  )
}
export { ProductItem }
