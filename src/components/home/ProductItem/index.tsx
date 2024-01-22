import type { MouseEvent, ReactElement } from 'react'
import { Styled } from './styled'
import type { ProductItemProps } from './types'
import { getTimeDiffText, toLocaleCurrency } from '@utils/format'

const ProductItem = ({
  productItem,
  onClickProduct,
  onClickLike
}: ProductItemProps): ReactElement => {
  const handleClickLike = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    onClickLike?.()
  }

  return (
    <Styled.Container onClick={onClickProduct}>
      <Styled.ProductImgWrapper>
        <Styled.ProductImg
          key={productItem.id}
          alt={`productName-${productItem.title}`}
          src={productItem.thumbnailImageUrl}
        />
        <Styled.HeartButton
          icon="heart"
          isToggle={productItem.liked}
          size={16}
          toggleColor="brandPrimary"
          toggleIcon="heartFill"
          onClick={handleClickLike}
        />
      </Styled.ProductImgWrapper>
      <Styled.ProductItemTitle>{productItem.title}</Styled.ProductItemTitle>
      <Styled.ProductItemStartPrice>시작가</Styled.ProductItemStartPrice>
      <Styled.ProductItemPrice>
        {toLocaleCurrency(productItem.price)}원
      </Styled.ProductItemPrice>
      <Styled.ProductItemAddress>
        {productItem.location} ⋅ {getTimeDiffText(productItem.createdAt)}
      </Styled.ProductItemAddress>
    </Styled.Container>
  )
}
export { ProductItem, ProductItemProps }
