import { Image, ToggleButton } from '@offer-ui/react'

import type { ReactElement } from 'react'
import styled from '@emotion/styled'

interface ProductItemProps {
  productItem: {
    title: string
    url: string
    imageUrl: string
    price: string
    address: string
  }
}

const ProductItem = ({ productItem }: ProductItemProps): ReactElement => {
  return (
    <>
      <ProductItemWrapper>
        <ProductImgWrapper>
          <ProductImg
            key={productItem.title}
            alt={`productName-${productItem.title}`}
            src={productItem.imageUrl}
            style={{ maxWidth: '276px' }}
          />
          <ToggleButton
            colorType="gray30"
            icon="heart"
            shape="rounded"
            size="medium"
            style={{ bottom: '20px', position: 'absolute', right: '10px' }}
            styleType="fill"
            toggleColorType="primary"></ToggleButton>
        </ProductImgWrapper>
        <ProductItemTitle>{productItem.title}</ProductItemTitle>
        <ProductItemStartPrice>시작가</ProductItemStartPrice>
        &nbsp;
        <ProductItemPrice>{productItem.price}원</ProductItemPrice>
        <ProductItemAddress>동작구 사당동 방금전</ProductItemAddress>
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
    height: 160px;
  }
`

const ProductImgWrapper = styled.div`
  max-width: 276px;
  position: relative;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    max-width: 166px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
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
  color: ${({ theme }): string => theme.colors.grayScale.gray70};
`

const ProductItemPrice = styled.span`
  ${({ theme }): string => theme.fonts.body01B}
`

const ProductItemAddress = styled.div`
  ${({ theme }): string => theme.fonts.caption01M}
  color:${({ theme }): string => theme.colors.grayScale.gray50}
`
