import type { ReactElement } from 'react'
import {
  StyledContainer,
  StyledProductWrapper,
  StyledProductImg,
  StyledSellerName,
  StyledProductMetaWrapper,
  StyledProductName,
  StyledProductInfoWrapper,
  StyledPrice,
  StyledTradeStatusName,
  StyledDate,
  StyledReviewButtonWrapper,
  StyledReviewButton,
  StyledLikeButton
} from './styled'

import type { BuyTabArticleProps } from './types'
import { toLocaleCurrency } from '@utils'

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
