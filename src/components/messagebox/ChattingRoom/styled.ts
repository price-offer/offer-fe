import { css } from '@emotion/react'
import styled from '@emotion/styled'

const Container = styled.div`
  height: 100%;
`

const Header = styled.div`
  display: flex;
  align-items: center;

  padding: 18px 20px;

  ${({ theme }) => theme.fonts.headline02B}
`
const Nickname = styled.p`
  width: 100%;
  margin-left: 12px;
`

const IconButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`

const ProductInfo = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  padding: 16px 20px;

  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.grayScale10};
    border-bottom: 1px solid ${theme.colors.grayScale10};
  `}
`

const ProductTextContainer = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.grayScale50};

    ${theme.fonts.caption01M}
  `}
`

const ProductName = styled.p`
  margin-bottom: 4px;

  ${({ theme }) => css`
    color: ${theme.colors.grayScale90};

    ${theme.fonts.body02B}
  `}
`

const ProductItem = styled.div<{ isOfferPrice?: boolean }>`
  display: flex;
  gap: 8px;

  ${({ theme, isOfferPrice }) =>
    isOfferPrice &&
    css`
      align-items: center;

      color: ${theme.colors.grayScale90};
    `}
`

const OfferPrice = styled.span`
  ${({ theme }) => theme.fonts.body02B};
`

const InputWrapper = styled.div`
  padding: 14px 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.grayScale10};
`

export const Styled = {
  Container,
  Header,
  Nickname,
  IconButtonContainer,
  ProductInfo,
  ProductTextContainer,
  ProductName,
  ProductItem,
  OfferPrice,
  InputWrapper
}
