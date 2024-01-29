import { css } from '@emotion/react'
import styled from '@emotion/styled'
import {
  Button,
  Divider as DividerComponent,
  Radio,
  Text
} from '@offer-ui/react'

const OfferPriceCardWrapper = styled.div`
  ${({ theme }) => {
    const { colors, radius, mediaQuery } = theme

    return css`
      width: 100%;
      max-width: 478px;
      height: fit-content;
      border: solid 1px ${colors.grayScale10};
      border-radius: ${radius.round6};

      background-color: ${colors.white};

      ${mediaQuery.tablet} {
        width: 100%;
        max-width: none;
        border: none;
      }
      ${mediaQuery.mobile} {
        flex-direction: column;

        min-width: auto;
      }
    `
  }}
`

const OfferListBox = styled(Radio)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: scroll;

  height: 100%;
`

const OfferTitle = styled(Text)`
  ${({ theme }): string => `
    ${theme.mediaQuery.tablet} {
      ${theme.fonts.subtitle01B};
    }
    ${theme.mediaQuery.mobile} {
      ${theme.fonts.subtitle01B};
    }`}
`

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 20px;

  ${({ theme }): string => `
    ${theme.mediaQuery.tablet} {
      padding: 0 23px;
    }
    ${theme.mediaQuery.mobile} {
      padding: 0 16px;
    }
  `}
`

const CardTitle = styled.div`
  display: flex;
  gap: 8px;
`

const Divider = styled(DividerComponent)`
  ${({ theme }): string => `
    ${theme.mediaQuery.tablet} {
      display: none;
    }
    ${theme.mediaQuery.mobile} {
      display: none;
    }
  `}
`

const BlankCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 120px;
  padding: 20px 0;
`
const Offer = styled(Radio.Label)<{ isSeller: boolean; isSelected: boolean }>`
  display: flex;
  align-items: center;

  padding: 20px;
  ${({ theme, isSeller }) =>
    css`
      border-radius: ${theme.radius.round6};

      cursor: ${isSeller ? 'cursor' : 'default'};
    `};

  ${({ theme, isSelected }) => css`
    border: solid 1px
      ${isSelected ? theme.colors.brandPrimary : theme.colors.grayScale10};

    ${theme.mediaQuery.tablet} {
      padding: 16px;
      border: none;
      border-bottom: solid 1px ${theme.colors.grayScale10};
    }
    ${theme.mediaQuery.mobile} {
      border: none;
      border-bottom: solid 1px ${theme.colors.grayScale10};
    }
  `}
`

const OfferContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`

const CardBody = styled.div`
  max-height: 564px;
  padding: 20px 16px;

  ${({ theme }): string => `
    ${theme.mediaQuery.tablet} {
      padding: 3px 16px;
      max-height: 276px;
    }
    ${theme.mediaQuery.mobile} {
      padding: 16px;
      max-height: 368px;
    }
  `}
`
const CardFooter = styled.div`
  display: flex;
  gap: 8px;

  padding: 20px;

  ${({ theme }): string => `
    ${theme.mediaQuery.tablet} {
      justify-content: space-between;
      gap: 100px;
      padding: 12px 24px;
    }
    ${theme.mediaQuery.mobile} {
      justify-content: space-between;
      gap: 100px;
      padding: 12px 16px;
    }
  `}
`

const MessageButton = styled(Button)`
  ${({ theme }): string => `
    ${theme.mediaQuery.tablet} {
      width: 100%;
      ${theme.ctaButton.medium}
    }
    ${theme.mediaQuery.mobile} {
      ${theme.ctaButton.medium}
    }
  `}
`
const LikeButton = styled.button`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  width: 96px;
  height: 64px;
  ${({ theme }) =>
    css`
      border: solid 1px ${theme.colors.grayScale20};

      background-color: ${theme.colors.white};
    `};

  cursor: pointer;

  ${({ theme }): string => `
    ${theme.mediaQuery.tablet} {
      width: 84px;
      height: 48px;
      border-radius: ${theme.radius.round100};
    }
    ${theme.mediaQuery.mobile} {
      width: 84px;
      height: 48px;
      border-radius: ${theme.radius.round100};
    }
  `}
`

const LikeText = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.body01B}
  `}
`

export const Styled = {
  OfferPriceCardWrapper,
  OfferListBox,
  OfferTitle,
  CardHeader,
  CardTitle,
  Divider,
  BlankCard,
  Offer,
  OfferContent,
  CardBody,
  CardFooter,
  MessageButton,
  LikeButton,
  LikeText
}
