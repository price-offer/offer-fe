import type { ReactElement } from 'react'
import { Styled } from './styled'

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
    <Styled.Container className={className}>
      <Styled.ProductWrapper>
        <Styled.ProductImg alt={`product${id}-img`} src={mainImageUrl} />
        <Styled.ProductMetaWrapper>
          <Styled.SellerName styleType="body02R">
            {sellerNickName}
          </Styled.SellerName>
          <Styled.ProductName styleType="body02M">{title}</Styled.ProductName>
          <Styled.ProductInfoWrapper>
            <Styled.Price>시작가: {toLocaleCurrency(price)}원</Styled.Price>
            <Styled.TradeStatusName styleType="body02R">
              {tradeStatus.name}
            </Styled.TradeStatusName>
            <Styled.Date styleType="body02R">{modifiedDate}</Styled.Date>
          </Styled.ProductInfoWrapper>
        </Styled.ProductMetaWrapper>
      </Styled.ProductWrapper>
      {isOfferType ? (
        <Styled.ReviewButtonWrapper>
          <Styled.ReviewButton
            isReviewed={isReviewed}
            size="small"
            styleType="outline">
            {isReviewed ? '보낸 후기 보기' : '후기 보내기'}
          </Styled.ReviewButton>
        </Styled.ReviewButtonWrapper>
      ) : (
        <Styled.LikeButton color="grayScale90" size="small" styleType="outline">
          관심 {likeCount}
        </Styled.LikeButton>
      )}
    </Styled.Container>
  )
}
