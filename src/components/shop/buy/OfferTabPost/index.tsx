import type { ReactElement } from 'react'
import { Styled } from './styled'
import type { OfferTabPostProps } from './types'
import { toLocaleCurrency, getTimeDiffText } from '@utils'

const OfferTabPost = ({
  className,
  postId,
  thumbnailImageUrl,
  title,
  seller,
  offerPrice,
  tradeStatus,
  createdAt,
  hasReview,
  onClickReadReview,
  onClickWriteReview,
  reviewAvailable
}: OfferTabPostProps): ReactElement => {
  const handleClickReviewButton = () => {
    hasReview ? onClickReadReview() : onClickWriteReview()
  }
  const isShowReviewButton = hasReview || reviewAvailable

  return (
    <Styled.Container className={className}>
      <Styled.ProductWrapper>
        <Styled.ProductImg
          alt={`product${postId}-img`}
          src={thumbnailImageUrl}
        />
        <Styled.ProductMetaWrapper>
          <Styled.SellerName styleType="body02R">
            {seller.nickname}
          </Styled.SellerName>
          <Styled.ProductName styleType="body02M">{title}</Styled.ProductName>
          <Styled.ProductInfoWrapper>
            <Styled.Price>
              제안가: {offerPrice ? toLocaleCurrency(offerPrice) : ''}원
            </Styled.Price>
            <Styled.TradeStatusName styleType="body02R">
              {tradeStatus.name}
            </Styled.TradeStatusName>
            <Styled.Date styleType="body02R">
              {getTimeDiffText(createdAt)}
            </Styled.Date>
          </Styled.ProductInfoWrapper>
        </Styled.ProductMetaWrapper>
      </Styled.ProductWrapper>
      <Styled.ReviewButtonWrapper>
        {isShowReviewButton ? (
          <Styled.ReviewButton
            hasReview={hasReview}
            size="small"
            styleType="outline"
            onClick={handleClickReviewButton}>
            {hasReview ? '보낸 후기 보기' : '후기 보내기'}
          </Styled.ReviewButton>
        ) : (
          <Styled.ReviewBlankButton color="grayScale50" styleType="body02R">
            -
          </Styled.ReviewBlankButton>
        )}
      </Styled.ReviewButtonWrapper>
    </Styled.Container>
  )
}

export { OfferTabPost, OfferTabPostProps }
