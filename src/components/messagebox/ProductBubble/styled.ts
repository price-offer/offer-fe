import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Button } from '@offer-ui/react'

const Container = styled.div`
  width: 220px;

  ${({ theme }) => css`
    border: 1px solid ${theme.colors.grayScale10};
    border-radius: ${theme.radius.round16};
    border-top-right-radius: 0;

    ${theme.fonts.caption01M}
  `}
`

const ImageWrapper = styled.div`
  overflow: hidden;

  border-top-left-radius: ${({ theme }) => `${theme.radius.round16}`};
`

const Content = styled.div`
  padding: 12px 16px; ;
`

const ProductName = styled.p`
  margin-top: 4px;

  ${({ theme }) => css`
    color: ${theme.colors.grayScale90};

    ${theme.fonts.body02M}
  `}
`

const PriceItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${({ theme }) => theme.colors.grayScale50};
`
const OfferText = styled.span`
  color: ${({ theme }) => theme.colors.grayScale90};
`

const OfferPrice = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.grayScale90};

    ${theme.fonts.body01B}
  `}
`
const ButtonWrapper = styled.div`
  margin: 0 16px 16px;

  a {
    text-decoration: none;
  }
`
const ShowProductButton = styled(Button)`
  height: 32px;
  border-radius: 0;
`

export const Styled = {
  Container,
  ImageWrapper,
  Content,
  ProductName,
  PriceItem,
  OfferText,
  OfferPrice,
  ButtonWrapper,
  ShowProductButton
}
