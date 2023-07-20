import styled from '@emotion/styled'
import { Image, Text, Button } from '@offer-ui/react'

export const StyledContainer = styled.li`
  ${({ theme }): string => `
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${theme.mediaQuery.tablet} {
      flex-direction: column;
      align-items: unset;
      justify-content: unset;
    }
  `}
`
export const StyledProductWrapper = styled.div`
  ${({ theme }): string => `
    display: grid;
    flex: 1;
    grid-template-columns: 90px 1fr;
    align-items: center;
    gap: 16px;
    padding: 20px 0 20px 20px;

    ${theme.mediaQuery.tablet} {
      grid-template-columns: 68px 1fr;
      gap: 8px;
      padding: 16px 24px;
    }

    ${theme.mediaQuery.mobile} {
      min-width: 390px;
      padding: 16px;
    }
  `}
`
export const StyledProductImg = styled(Image)`
  ${({ theme }): string => `
    width: 90px;
    height: 90px;

    ${theme.mediaQuery.tablet} {
      width: 68px;
      height: 68px;
    }
  `}
`
export const StyledSellerName = styled(Text)`
  ${({ theme }): string => `
    text-align: center;
    color: ${theme.colors.grayScale70};
    max-width: 100px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    word-break: break-word;

  ${theme.mediaQuery.tablet} {
    ${theme.fonts.caption01M};
  }
`}
`

export const StyledProductMetaWrapper = styled.div`
  ${({ theme }): string => `
    display: flex;
    align-items: center;
    justify-content: space-around;

    ${theme.mediaQuery.tablet} {
      align-items: flex-start;
      flex-direction: column;
    }
  `}
`
export const StyledProductName = styled(Text)`
  ${({ theme }): string => `
    text-align: center;
    width: 150px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    word-break: break-word;

    ${theme.mediaQuery.tablet} {
      text-align: left;
      max-width: 460px;
      margin-bottom: 6px;
    }

    ${theme.mediaQuery.mobile} {
      max-width: 171px;
    }
  `}
`
export const StyledProductInfoWrapper = styled.div`
  ${({ theme }): string => `
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 12px;

    ${theme.mediaQuery.tablet} {
      align-items: flex-start;
      flex-direction: column;
      gap: 0;
    }
`}
`
export const StyledPrice = styled.span`
  ${({ theme }): string => `
    ${theme.fonts.body02R};

    ${theme.mediaQuery.tablet} {
      ${theme.fonts.caption01M};
      color: ${theme.colors.grayScale50};
    }
  `}
`
export const StyledTradeStatusName = styled(Text)`
  ${({ theme }): string => `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    color: ${theme.colors.grayScale50};

    ${theme.mediaQuery.tablet} {
      display: none;
    }
  `}
`
export const StyledDate = styled(Text)`
  ${({ theme }): string => `
    display: inline-block;
    color: ${theme.colors.grayScale50};

    ${theme.mediaQuery.tablet} {
      display: none;
      ${theme.fonts.caption01M};
      color: ${theme.colors.grayScale30};
    }
  `}
`
export const StyledReviewButtonWrapper = styled.div`
  ${({ theme }): string => `
    display: flex;
    flex-direction: column;
    min-width: 120px;
    align-items: flex-end;

    ${theme.mediaQuery.tablet} {
      display: flex;
      align-items: center;
    }
  `}
`
export const StyledReviewButton = styled(Button)<{ isReviewed: boolean }>`
  ${({ theme, isReviewed }): string => `
    color: ${isReviewed ? theme.colors.grayScale70 : theme.colors.brandPrimary};
    margin-right: 20px;

    ${theme.mediaQuery.tablet} {
      width: 100%;
      border: none;
      border-top: 1px solid ${theme.colors.grayScale10};
      border-radius: 0;
      padding: 20px 0;
      margin-right: 0;
    }
  `}
`
export const StyledLikeButton = styled(Button)`
  ${({ theme }): string => `
    color: ${theme.colors.grayScale90};
    margin-right: 20px;

    ${theme.mediaQuery.tablet} {
      display: none;
    }
  `}
`
