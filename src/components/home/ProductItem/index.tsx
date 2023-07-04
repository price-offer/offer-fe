import styled from '@emotion/styled'
import { Image, ToggleButton } from '@offer-ui/react'

import type { ReactElement } from 'react'

interface ProductItemProps {
  productItem: {
    id: number
    mainImageUrl: string
    title: string
    price: number
    tradeArea: string
    tradeStatus: {
      code: number
      name: string
    }
    createdDate: string
    modifiedDate: string
    isLiked: boolean
    likeCount: number
    isReviewed: boolean
    sellerNickName: string
  }
}

const ProductItem = ({ productItem }: ProductItemProps): ReactElement => {
  return (
    <>
      <ProductItemWrapper>
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
      </ProductItemWrapper>
    </>
  )
}
export { ProductItem }

const ProductImg = styled(Image)`
  width: 100%;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    height: 166px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    height: 200px;
  }
  @media (max-width: 510px) {
    height: 160px;
  }
`

const HeartButton = styled(ToggleButton)`
  position: absolute;
  background-color: ${({ theme }): string => theme.colors.white};
  width: 25px;
  height: 24px;
  border-radius: 100%;
  bottom: 12px;
  right: 12px;
`

const ProductImgWrapper = styled.div`
  max-width: 276px;
  position: relative;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    max-width: 166px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    max-width: 200px;
  }
  @media (max-width: 510px) {
    max-width: 160px;
  }
`
const ProductItemWrapper = styled.div``

const ProductItemTitle = styled.div`
  ${({ theme }): string => theme.fonts.body02R}
  margin-top: 8px;
  margin-bottom: 2px;
`
const ProductItemStartPrice = styled.span`
  ${({ theme }): string => theme.fonts.body02M};
  color: ${({ theme }): string => theme.colors.grayScale70};
`

const ProductItemPrice = styled.span`
  ${({ theme }): string => theme.fonts.body01B}
`

const ProductItemAddress = styled.div`
  ${({ theme }): string => theme.fonts.caption01M}
  color:${({ theme }): string => theme.colors.grayScale50}
`
