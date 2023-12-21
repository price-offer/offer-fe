import type { ReactElement } from 'react'
import type { OfferTabPanelProps } from './types'
import { Styled } from '../styled'
import { TRADE_STATUS } from '@constants/app'
import { find, toLocaleCurrency } from '@utils'

const OfferTabPanel = (props: OfferTabPanelProps): ReactElement => {
  const {
    className,
    // sellerNickName,
    postId,
    thumbnailImageUrl,
    // title = '',
    offerPrice,
    tradeStatus,
    createdAt
    // isReviewed
  } = props
  const tradeStatusOption = find(TRADE_STATUS, { code: tradeStatus })

  // TODO: API Scheme 변경 필요
  const sellerNickName = ''
  const title = ''
  const isReviewed = false

  return (
    <Styled.Container className={className}>
      <Styled.ProductWrapper>
        <Styled.ProductImg
          alt={`product${postId}-img`}
          src={thumbnailImageUrl}
        />
        <Styled.ProductMetaWrapper>
          <Styled.SellerName styleType="body02R">
            {sellerNickName}
          </Styled.SellerName>
          <Styled.ProductName styleType="body02M">{title}</Styled.ProductName>
          <Styled.ProductInfoWrapper>
            <Styled.Price>
              제안가: {offerPrice ? toLocaleCurrency(offerPrice) : ''}원
            </Styled.Price>
            <Styled.TradeStatusName styleType="body02R">
              {tradeStatusOption.name}
            </Styled.TradeStatusName>
            <Styled.Date styleType="body02R">{createdAt}</Styled.Date>
          </Styled.ProductInfoWrapper>
        </Styled.ProductMetaWrapper>
      </Styled.ProductWrapper>
      <Styled.ReviewButtonWrapper>
        <Styled.ReviewButton
          isReviewed={isReviewed}
          size="small"
          styleType="outline">
          {isReviewed ? '보낸 후기 보기' : '후기 보내기'}
        </Styled.ReviewButton>
      </Styled.ReviewButtonWrapper>
    </Styled.Container>
  )
}

export { OfferTabPanel, OfferTabPanelProps }
