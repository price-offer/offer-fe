import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Image, Text, Button } from '@offer-ui/react'

export const Container = styled.li`
  ${({ theme }) => css`
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
export const ProductWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    flex: 1;
    grid-template-columns: 90px 1fr;
    gap: 16px;
    align-items: center;

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
export const ProductImg = styled(Image)`
  ${({ theme }) => css`
    width: 90px;
    height: 90px;

    ${theme.mediaQuery.tablet} {
      width: 68px;
      height: 68px;
    }
  `}
`
export const SellerName = styled(Text)`
  ${({ theme }) => css`
    overflow: hidden;

    max-width: 100px;

    color: ${theme.colors.grayScale70};
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-word;

    ${theme.mediaQuery.tablet} {
      ${theme.fonts.caption01M};
    }
  `}
`

export const ProductMetaWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-around;

    ${theme.mediaQuery.tablet} {
      flex-direction: column;
      align-items: flex-start;
    }
  `}
`
export const ProductName = styled(Text)`
  ${({ theme }) => css`
    overflow: hidden;

    width: 150px;

    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-word;

    ${theme.mediaQuery.tablet} {
      max-width: 460px;
      margin-bottom: 6px;

      text-align: left;
    }

    ${theme.mediaQuery.mobile} {
      max-width: 171px;
    }
  `}
`
export const ProductInfoWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: space-around;

    ${theme.mediaQuery.tablet} {
      flex-direction: column;
      gap: 0;
      align-items: flex-start;
    }
  `}
`
export const Price = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.body02R};

    ${theme.mediaQuery.tablet} {
      ${theme.fonts.caption01M};
      color: ${theme.colors.grayScale50};
    }
  `}
`
export const TradeStatusName = styled(Text)`
  ${({ theme }) => css`
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
export const Date = styled(Text)`
  ${({ theme }) => css`
    display: inline-block;

    color: ${theme.colors.grayScale50};

    ${theme.mediaQuery.tablet} {
      display: none;
      ${theme.fonts.caption01M};
      color: ${theme.colors.grayScale30};
    }
  `}
`
export const ReviewButtonWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    min-width: 120px;

    ${theme.mediaQuery.tablet} {
      display: flex;
      align-items: center;
    }
  `}
`
export const ReviewButton = styled(Button)<{ hasReview: boolean }>`
  ${({ theme, hasReview }) => css`
    margin-right: 20px;

    color: ${hasReview ? theme.colors.grayScale70 : theme.colors.brandPrimary};

    ${theme.mediaQuery.tablet} {
      width: 100%;
      margin-right: 0;
      padding: 20px 0;
      border: none;
      border-top: 1px solid ${theme.colors.grayScale10};
      border-radius: 0;
    }
  `}
`
export const ReviewBlankButton = styled(Text)`
  align-self: center;
`
export const LikeButton = styled(Button)`
  ${({ theme }) => css`
    margin-right: 20px;

    color: ${theme.colors.grayScale90};

    ${theme.mediaQuery.tablet} {
      display: none;
    }
  `}
`

export const Styled = {
  Container,
  ProductWrapper,
  ProductImg,
  SellerName,
  ProductMetaWrapper,
  ProductName,
  ProductInfoWrapper,
  Price,
  TradeStatusName,
  Date,
  ReviewButtonWrapper,
  ReviewButton,
  ReviewBlankButton,
  LikeButton
}
