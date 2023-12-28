import type { ReactElement } from 'react'
import type { LikeTabPanelProps } from './types'
import { Styled } from '../styled'
import { toLocaleCurrency, getTimeDiffText } from '@utils'

const LikeTabPanel = ({
  className,
  seller,
  id: postId,
  thumbnailImageUrl,
  title = '',
  price,
  tradeStatus,
  createdAt,
  likeCount
}: LikeTabPanelProps): ReactElement => {
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
            <Styled.Price>시작가: {toLocaleCurrency(price)}원</Styled.Price>
            <Styled.TradeStatusName styleType="body02R">
              {tradeStatus.name}
            </Styled.TradeStatusName>
            <Styled.Date styleType="body02R">
              {getTimeDiffText(createdAt)}
            </Styled.Date>
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
