import type { ReactElement } from 'react'
import type { OfferTabPanelProps } from './types'
import { Styled } from '../styled'
import { toLocaleCurrency, getTimeDiffText } from '@utils'

const OfferTabPanel = (props: OfferTabPanelProps): ReactElement => {
  const {
    className,
    postId,
    thumbnailImageUrl,
    // title = '',
    offerPrice,
    tradeStatus,
    createdAt,
    hasReview
  } = props

  // TODO: API Scheme 변경 필요
  const seller = {
    nickName: ''
  }
  const title = ''

  return (
    <Styled.Container className={className}>
      <Styled.ProductWrapper>
        <Styled.ProductImg
          alt={`product${postId}-img`}
          src={thumbnailImageUrl}
        />
        <Styled.ProductMetaWrapper>
          <Styled.SellerName styleType="body02R">
            {seller.nickName}
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
        <Styled.ReviewButton
          hasReview={hasReview}
          size="small"
          styleType="outline">
          {hasReview ? '보낸 후기 보기' : '후기 보내기'}
        </Styled.ReviewButton>
      </Styled.ReviewButtonWrapper>
    </Styled.Container>
  )
}

export { OfferTabPanel, OfferTabPanelProps }
