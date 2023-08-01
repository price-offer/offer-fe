import styled from '@emotion/styled'
import { Image, ToggleButton } from '@offer-ui/react'

const ProductImg = styled(Image)`
  width: 100%;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    height: 166px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    height: 200px;
  }

  @media (width < 510px) {
    height: 160px;
  }
`

const HeartButton = styled(ToggleButton)`
  position: absolute;
  right: 12px;
  bottom: 12px;

  width: 25px;
  height: 24px;
  border-radius: 100%;

  background-color: ${({ theme }): string => theme.colors.white};
`

const ProductImgWrapper = styled.div`
  position: relative;

  max-width: 276px;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    max-width: 166px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    max-width: 200px;
  }

  @media (width < 510px) {
    max-width: 160px;
  }
`

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

export const Styled = {
  ProductImg,
  HeartButton,
  ProductImgWrapper,
  ProductItemTitle,
  ProductItemStartPrice,
  ProductItemPrice,
  ProductItemAddress
}
