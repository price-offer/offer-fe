import { css } from '@emotion/react'
import styled from '@emotion/styled'
import {
  Image,
  SelectBox as SelectBoxComponent,
  Text,
  Button
} from '@offer-ui/react'

const Container = styled.li`
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
const ProductWrapper = styled.div<{ isLogin: boolean }>`
  ${({ theme, isLogin }) => css`
    display: grid;
    flex: 1;
    grid-template-columns: ${isLogin ? '90px 90px 1fr' : '90px 1fr'};
    gap: 16px;
    align-items: center;

    padding: 20px 0 20px 20px;

    ${theme.mediaQuery.tablet} {
      grid-template-columns: 68px 1fr 90px;
      gap: 8px;

      padding: 16px 24px;
    }

    ${theme.mediaQuery.mobile} {
      min-width: 390px;
      padding: 16px;
    }
  `}
`
const ProductImg = styled(Image)`
  ${({ theme }) => css`
    order: 1;

    width: 90px;
    height: 90px;

    ${theme.mediaQuery.tablet} {
      width: 68px;
      height: 68px;
    }
  `}
`
const SelectBox = styled(SelectBoxComponent)`
  ${({ theme }) => css`
    order: 2;

    ${theme.mediaQuery.tablet} {
      order: 3;
    }
  `}
`

const ProductMetaWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-around;
    order: 3;

    ${theme.mediaQuery.tablet} {
      flex-direction: column;
      gap: 4px;
      align-items: flex-start;
      order: 2;
    }
  `}
`
const ProductName = styled(Text)`
  ${({ theme }) => css`
    overflow: hidden;

    width: 150px;

    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-word;

    ${theme.mediaQuery.tablet} {
      width: 460px;

      text-align: left;
    }

    ${theme.mediaQuery.mobile} {
      width: 171px;
    }
  `}
`
const ProductInfoWrapper = styled.div`
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
const Price = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.body02R};

    ${theme.mediaQuery.tablet} {
      ${theme.fonts.caption01M};
      color: ${theme.colors.grayScale50};
    }
  `}
`
const FavoriteWrapper = styled.div<{ isOnlyOther: boolean }>`
  ${({ theme, isOnlyOther }) => css`
    display: ${isOnlyOther ? 'none' : 'flex'};
    gap: 2px;
    align-items: center;
    justify-content: center;

    width: 100px;

    color: ${theme.colors.grayScale50};

    ${theme.mediaQuery.tablet} {
      display: ${isOnlyOther ? 'flex' : 'none'};
      order: 3;
    }
  `}
`
const Date = styled(Text)<{ isLogin: boolean }>`
  ${({ theme, isLogin }) => css`
    display: inline-block;

    color: ${theme.colors.grayScale50};

    ${theme.mediaQuery.tablet} {
      display: ${isLogin ? 'none' : 'inline-block'};
      ${theme.fonts.caption01M};
      color: ${theme.colors.grayScale30};
    }
  `}
`
const ReviewButtonWrapper = styled.div`
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
const ReviewButton = styled(Button)<{ hasReview: boolean }>`
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

export const Styled = {
  Container,
  ProductWrapper,
  ProductImg,
  SelectBox,
  ProductMetaWrapper,
  ProductName,
  ProductInfoWrapper,
  Price,
  FavoriteWrapper,
  Date,
  ReviewButtonWrapper,
  ReviewButton
}
