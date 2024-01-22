import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Image, ToggleButton } from '@offer-ui/react'

const Container = styled.div`
  flex: 1 0 22%;

  cursor: pointer;

  ${({ theme }) => theme.mediaQuery.mobile} {
    flex: 1 0 44%;
  }
`

const ProductImg = styled(Image)`
  width: 100%;
  max-width: none;

  ${({ theme }): string => theme.mediaQuery.tablet} {
    height: 166px;
  }

  ${({ theme }): string => theme.mediaQuery.mobile} {
    height: 200px;
  }
`

const HeartButton = styled(ToggleButton)`
  position: absolute;
  right: 12px;
  bottom: 12px;

  width: 25px;
  height: 24px;
  border-radius: 100%;

  ${({ theme }) => css`
    z-index: ${theme.zIndex.common};

    background-color: ${theme.colors.white};
  `};
`

const ProductImgWrapper = styled.div`
  position: relative;
`

const ProductItemTitle = styled.div`
  ${({ theme }): string => theme.fonts.body02R}
  margin-top: 8px;
  margin-bottom: 2px;
`
const ProductItemStartPrice = styled.span`
  ${({ theme }): string => theme.fonts.body02M};
  margin-right: 4px;

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
  Container,
  ProductImg,
  HeartButton,
  ProductImgWrapper,
  ProductItemTitle,
  ProductItemStartPrice,
  ProductItemPrice,
  ProductItemAddress
}
