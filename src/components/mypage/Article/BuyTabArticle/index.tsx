import styled from '@emotion/styled'
import { Image, Text, Button } from '@offer-ui/react'
import type { ReactElement } from 'react'
import type { TradeBuyActivityType } from '@constants'
import type { ArticlesElement } from '@types'
import { toLocaleCurrency } from '@utils'

export interface BuyTabArticleProps extends ArticlesElement {
  // 구매 활동 타입
  activityType: TradeBuyActivityType
  className?: string
}

export const BuyTabArticle = (props: BuyTabArticleProps): ReactElement => {
  const {
    activityType,
    className,
    sellerNickName,
    id,
    mainImageUrl,
    title,
    price,
    tradeStatus,
    modifiedDate,
    likeCount,
    isReviewed
  } = props
  const isOfferType = activityType === 'offer'

  return (
    <StyledContainer className={className}>
      <StyledProductWrapper>
        <StyledProductImg alt={`product${id}-img`} src={mainImageUrl} />
        <StyledProductMetaWrapper>
          <StyledSellerName styleType="body02R">
            {sellerNickName}
          </StyledSellerName>
          <StyledProductName styleType="body02M">{title}</StyledProductName>
          <StyledProductInfoWrapper>
            <StyledPrice>시작가: {toLocaleCurrency(price)}원</StyledPrice>
            <StyledTradeStatusName styleType="body02R">
              {tradeStatus.name}
            </StyledTradeStatusName>
            <StyledDate styleType="body02R">{modifiedDate}</StyledDate>
          </StyledProductInfoWrapper>
        </StyledProductMetaWrapper>
      </StyledProductWrapper>
      {isOfferType ? (
        <StyledReviewButtonWrapper>
          <StyledReviewButton
            isReviewed={isReviewed}
            size="small"
            styleType="outline">
            {isReviewed ? '보낸 후기 보기' : '후기 보내기'}
          </StyledReviewButton>
        </StyledReviewButtonWrapper>
      ) : (
        <StyledLikeButton color="grayScale90" size="small" styleType="outline">
          관심 {likeCount}
        </StyledLikeButton>
      )}
    </StyledContainer>
  )
}

const StyledContainer = styled.li`
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
const StyledProductWrapper = styled.div`
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
const StyledProductImg = styled(Image)`
  ${({ theme }): string => `
    width: 90px;
    height: 90px;

    ${theme.mediaQuery.tablet} {
      width: 68px;
      height: 68px;
    }
  `}
`
const StyledSellerName = styled(Text)`
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

const StyledProductMetaWrapper = styled.div`
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
const StyledProductName = styled(Text)`
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
const StyledProductInfoWrapper = styled.div`
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
const StyledPrice = styled.span`
  ${({ theme }): string => `
    ${theme.fonts.body02R};

    ${theme.mediaQuery.tablet} {
      ${theme.fonts.caption01M};
      color: ${theme.colors.grayScale50};
    }
  `}
`
const StyledTradeStatusName = styled(Text)`
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
const StyledDate = styled(Text)`
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
const StyledReviewButtonWrapper = styled.div`
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
const StyledReviewButton = styled(Button)<{ isReviewed: boolean }>`
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
const StyledLikeButton = styled(Button)`
  ${({ theme }): string => `
    color: ${theme.colors.grayScale90};
    margin-right: 20px;

    ${theme.mediaQuery.tablet} {
      display: none;
    }
  `}
`
