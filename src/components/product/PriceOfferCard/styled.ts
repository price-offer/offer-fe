import styled from '@emotion/styled'
import { Button, Divider, Text } from '@offer-ui/react'

export const StyledOfferPriceCardWrapper = styled.div`
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

export const StyledOfferListBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
  overflow: scroll;
`

export const StyledOfferTitle = styled(Text)`
  ${({ theme }): string => `
    ${theme.mediaQuery.tablet} {
      ${theme.fonts.subtitle02B};
    }
    ${theme.mediaQuery.mobile} {
      ${theme.fonts.subtitle02B};
    }`}
`

export const StyledCardHeader = styled.div`
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

export const StyledCardTitle = styled.div`
  display: flex;
  gap: 8px;
`

export const StyledDivider = styled(Divider)`
  ${({ theme }): string => `
    ${theme.mediaQuery.tablet} {
      display: none;
    }
    ${theme.mediaQuery.mobile} {
      display: none;
    }
  `}
`

export const StyledBlankCard = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  align-items: center;
  height: 120px;
`
export const StyledOffer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const StyledCardBody = styled.div`
  padding: 20px 16px;
  height: 564px;

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
export const StyledCardFooter = styled.div`
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

export const StyledMessageButton = styled(Button)`
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
export const StyledLikeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
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
