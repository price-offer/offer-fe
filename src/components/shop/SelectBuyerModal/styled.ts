import type { SerializedStyles } from '@emotion/react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Button, Modal, Radio } from '@offer-ui/react'

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

const Body = styled(Radio)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: scroll;

  height: 412px;
  max-height: 412px;
  padding: 16px 20px;
`

const BuyerContainer = styled(Radio.Label)<{ isSelected: boolean }>`
  display: flex;
  gap: 8px;

  padding: 20px;

  cursor: pointer;

  ${({ theme, isSelected }): SerializedStyles => css`
    border: 1px solid
      ${isSelected ? theme.colors.brandPrimary : theme.colors.grayScale10};
    border-radius: ${theme.radius.round6};
  `};

  input + span {
    min-width: 20px;
  }
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
`

const Nickname = styled.span`
  ${({ theme }) => theme.fonts.body02B}
`

const OfferTime = styled.span`
  ${({ theme }): SerializedStyles => css`
    color: ${theme.colors.grayScale50};

    ${theme.fonts.caption01M};
  `}
`

const LatestMessage = styled.p`
  display: block;
  overflow: hidden;

  max-width: 153px;

  text-overflow: ellipsis;
  white-space: nowrap;

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
    background-color: ${({ theme }) => theme.colors.grayScale20};
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
  Nickname,
  OfferTime,
  OfferInfo,
  LatestMessage,
  OfferPrice,
  Footer,
  SendReviewButton
}
