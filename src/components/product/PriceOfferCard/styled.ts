import styled from '@emotion/styled'
import { Button, Divider as DividerComponent, Text } from '@offer-ui/react'

const OfferPriceCardWrapper = styled.div`
  ${({ theme }): string => {
    const { colors, radius, mediaQuery } = theme

    return `
        width: 478px;
        min-width: 478px;
        background-color: ${colors.white};
        border: solid 1px ${colors.grayScale10};
        border-radius: ${radius.round6};

        ${mediaQuery.tablet} {
          width: 100%;
          border: none;
          min-width: auto;
         }
         ${mediaQuery.mobile} {
          flex-direction: column;
          min-width: auto;
         }
      `
  }}
`

const OfferListBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: scroll;

  height: 100%;
`

const OfferTitle = styled(Text)`
  ${({ theme }): string => `
    ${theme.mediaQuery.tablet} {
      ${theme.fonts.subtitle02B};
    }
    ${theme.mediaQuery.mobile} {
      ${theme.fonts.subtitle02B};
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
const Offer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px;
  border: ${({ theme }): string => `solid 1px ${theme.colors.grayScale10}`};
  border-radius: ${({ theme }): string => theme.border.radius06};

  ${({ theme }): string => `
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

const CardBody = styled.div`
  height: 564px;
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
const LikeButton = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  width: 96px;
  height: 64px;
  border: ${({ theme }): string => `solid 1px ${theme.colors.grayScale20}`};

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

export const Styled = {
  OfferPriceCardWrapper,
  OfferListBox,
  OfferTitle,
  CardHeader,
  CardTitle,
  Divider,
  BlankCard,
  Offer,
  CardBody,
  CardFooter,
  MessageButton,
  LikeButton
}
