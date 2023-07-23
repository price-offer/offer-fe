import styled from '@emotion/styled'
import {
  Image,
  SelectBox as SelectBoxComponent,
  Text,
  Button
} from '@offer-ui/react'

const Container = styled.li`
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
const ProductWrapper = styled.div<{ hasToken: boolean }>`
  ${({ theme, hasToken }): string => `
    display: grid;
    flex: 1;
    grid-template-columns: ${hasToken ? '90px 90px 1fr' : '90px 1fr'};
    align-items: center;
    gap: 16px;
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
  ${({ theme }): string => `
    width: 90px;
    height: 90px;
    order:1;

    ${theme.mediaQuery.tablet} {
      width: 68px;
      height: 68px;
    }
  `}
`
const SelectBox = styled(SelectBoxComponent)`
  ${({ theme }): string => `
    order: 2;

    ${theme.mediaQuery.tablet} {
      order: 3;
    }
  `}
`

const ProductMetaWrapper = styled.div`
  ${({ theme }): string => `
    display: flex;
    align-items: center;
    justify-content: space-around;
    order: 3;

    ${theme.mediaQuery.tablet} {
      align-items: flex-start;
      flex-direction: column;
      order: 2;
      gap: 4px;
    }
  `}
`
const ProductName = styled(Text)`
  ${({ theme }): string => `
    text-align: center;
    width: 150px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    word-break: break-word;

    ${theme.mediaQuery.tablet} {
      text-align: left;
      width: 460px;
    }

    ${theme.mediaQuery.mobile} {
      width: 171px;
    }
  `}
`
const ProductInfoWrapper = styled.div`
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
const Price = styled.span`
  ${({ theme }): string => `
    ${theme.fonts.body02R};

    ${theme.mediaQuery.tablet} {
      ${theme.fonts.caption01M};
      color: ${theme.colors.grayScale50};
    }
  `}
`
const FavoriteWrapper = styled.div<{ isOnlyOther: boolean }>`
  ${({ theme, isOnlyOther }): string => `
    display: ${isOnlyOther ? 'none' : 'flex'};
    align-items: center;
    justify-content: center;
    gap: 2px;
    width: 100px;
    color: ${theme.colors.grayScale50};

    ${theme.mediaQuery.tablet} {
      display: ${isOnlyOther ? 'flex' : 'none'};
      order: 3;
    }
  `}
`
const Date = styled(Text)<{ hasToken: boolean }>`
  ${({ theme, hasToken }): string => `
    display: inline-block;
    color: ${theme.colors.grayScale50};

    ${theme.mediaQuery.tablet} {
      display: ${hasToken ? 'none' : 'inline-block'};
      ${theme.fonts.caption01M};
      color: ${theme.colors.grayScale30};
    }
  `}
`
const ReviewButtonWrapper = styled.div`
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
const ReviewButton = styled(Button)<{ isReviewed: boolean }>`
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
