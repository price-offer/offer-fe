import type { ReactElement } from 'react'
import { Styled } from './styled'
import type { LikeTabPostProps } from './types'
import { toLocaleCurrency, getTimeDiffText } from '@utils'

const LikeTabPost = ({
  className,
  seller,
  id: postId,
  thumbnailImageUrl,
  title = '',
  price,
  tradeStatus,
  createdAt,
  likeCount,
  onChangeLikeStatus
}: LikeTabPostProps): ReactElement => {
  const handleChangeLikeStatus = () => {
    onChangeLikeStatus(postId)
  }

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
      <Styled.LikeButton
        color="grayScale90"
        size="small"
        styleType="outline"
        onClick={handleChangeLikeStatus}>
        관심 {likeCount}
      </Styled.LikeButton>
    </Styled.Container>
  )
}

export { LikeTabPost, LikeTabPostProps }
