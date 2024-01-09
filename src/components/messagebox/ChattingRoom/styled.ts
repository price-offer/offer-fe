import { css } from '@emotion/react'
import styled from '@emotion/styled'

const Container = styled.div`
  width: 100%;
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

  ${({ theme }) => css`
    ${theme.mediaQuery.tablet} {
      ${theme.fonts.body01B}
    }

    ${theme.mediaQuery.mobile} {
      ${theme.fonts.body01B}
    }
  `}
`

const IconButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`

const MoreButtonWrapper = styled.div`
  position: relative;
`

const DeleteButton = styled.button`
  border: none;

  background-color: transparent;

  cursor: pointer;
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

const ChattingWrapper = styled.div`
  overflow: scroll;

  height: calc(100% - 241px);
  padding: 20px;

  background-color: ${({ theme }) => theme.colors.bgGray03};
`

const InputWrapper = styled.div`
  padding: 14px 24px;
  ${({ theme }) =>
    css`
      border-top: 1px solid ${theme.colors.grayScale10};

      background-color: ${theme.colors.white};
    `};
`

export const Styled = {
  Container,
  Header,
  Nickname,
  IconButtonContainer,
  MoreButtonWrapper,
  DeleteButton,
  ProductInfo,
  ProductTextContainer,
  ProductName,
  ProductItem,
  OfferPrice,
  ChattingWrapper,
  InputWrapper
}
