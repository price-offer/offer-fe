import type { ReactElement } from 'react'
import type { LikeTabPanelProps } from './types'
import { Styled } from '../styled'

import { TRADE_STATUS } from '@constants/app'
import { find, toLocaleCurrency } from '@utils'

const LikeTabPanel = (props: LikeTabPanelProps): ReactElement => {
  const {
    className,
    // sellerNickName,
    id: postId,
    thumbnailImageUrl,
    title = '',
    // startPrice,
    tradeStatus,
    createdAt,
    likeCount
  } = props
  const tradeStatusOption = find(TRADE_STATUS, { code: tradeStatus })

  // TODO: API Scheme 변경 필요
  const sellerNickName = ''
  const startPrice = 0

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
              시작가: {startPrice ? toLocaleCurrency(startPrice) : ''}원
            </Styled.Price>
            <Styled.TradeStatusName styleType="body02R">
              {tradeStatusOption.name}
            </Styled.TradeStatusName>
            <Styled.Date styleType="body02R">{createdAt}</Styled.Date>
          </Styled.ProductInfoWrapper>
        </Styled.ProductMetaWrapper>
      </Styled.ProductWrapper>
      <Styled.LikeButton color="grayScale90" size="small" styleType="outline">
        관심 {likeCount}
      </Styled.LikeButton>
    </Styled.Container>
  )
}

export { LikeTabPanel, LikeTabPanelProps }
