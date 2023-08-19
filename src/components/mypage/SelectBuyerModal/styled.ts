import type { SerializedStyles } from '@emotion/react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Button, Modal } from '@offer-ui/react'

const SelectBuyerModal = styled(Modal)`
  padding: 0;
`

const Header = styled.div`
  padding: 20px 20px 16px;

  p {
    text-align: center;
  }

  p:first-of-type {
    ${({ theme }): SerializedStyles => css`
      margin: 16px 0 4px;

      color: ${theme.colors.black};

      ${theme.fonts.headline02B};
    `}
  }

  p:last-of-type {
    ${({ theme }): SerializedStyles => css`
      color: ${theme.colors.grayScale70};

      ${theme.fonts.body02R};
    `}
  }
`

const CloseIconWrapper = styled.div`
  display: flex;
  justify-content: end;
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: scroll;

  height: 300px;
  max-height: 300px;
  padding: 16px 20px;
`

const BuyerContainer = styled.div`
  display: flex;
  gap: 8px;

  padding: 20px;

  cursor: pointer;

  ${({ theme }): SerializedStyles => css`
    border: 1px solid ${theme.colors.grayScale10};
    border-radius: ${theme.radius.round6};
  `};
`

const AvatarWrapper = styled.div`
  min-width: 46px;
`

const OfferInfo = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  div {
    width: 100%;
  }
`

const BuyerInfo = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;

  span:first-of-type {
    ${({ theme }): string => theme.fonts.body02B}
  }

  span:last-of-type {
    ${({ theme }): SerializedStyles => css`
      color: ${theme.colors.grayScale50};

      ${theme.fonts.caption01M};
    `}
  }
`

const LatestMessage = styled.p`
  ${({ theme }): SerializedStyles => css`
    color: ${theme.colors.grayScale70};

    ${theme.fonts.body02R};
  `}
`

const OfferPrice = styled.p`
  display: flex;
  align-items: center;

  min-width: fit-content;

  ${({ theme }): SerializedStyles => css`
    color: ${theme.colors.grayScale90};

    ${theme.fonts.body01B};

    span {
      ${theme.fonts.body02B};
    }
  `}
`

const Footer = styled.div`
  padding: 20px;
`
const SendReviewButton = styled(Button)`
  :disabled {
    background-color: ${({ theme }): string => theme.colors.grayScale20};
  }
`

export const Styled = {
  SelectBuyerModal,
  Header,
  CloseIconWrapper,
  Body,
  BuyerContainer,
  AvatarWrapper,
  BuyerInfo,
  OfferInfo,
  LatestMessage,
  OfferPrice,
  Footer,
  SendReviewButton
}
