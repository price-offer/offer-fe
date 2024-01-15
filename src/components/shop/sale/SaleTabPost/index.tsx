import { Icon, Text } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { Styled } from './styled'
import type { SaleTabPostProps } from './types'
import { TRADE_STATUS } from '@constants'
import type { TradeStatusType } from '@types'
import { toLocaleCurrency, getTimeDiffText } from '@utils'

const SaleTabPost = ({
  className,
  id,
  title,
  price,
  thumbnailImageUrl,
  tradeStatus,
  likeCount,
  createdAt,
  isLogin,
  onChangeTradeStatus,
  hasReview
}: SaleTabPostProps): ReactElement => {
  const isSoldOut = tradeStatus.code === 'SOLD'

  const handleChangeTradeStatus = (item: TradeStatusType) => {
    onChangeTradeStatus?.(id, item)
  }

  return (
    <Styled.Container className={className}>
      <Styled.ProductWrapper isLogin={isLogin}>
        <Styled.ProductImg alt={`product${id}-img`} src={thumbnailImageUrl} />
        {isLogin ? (
          <Styled.SelectBox
            items={TRADE_STATUS}
            value={tradeStatus.code}
            onChange={handleChangeTradeStatus}
          />
        ) : (
          <Styled.FavoriteWrapper isOnlyOther>
            <Icon color="grayScale50" size={14} type="heart" />
            <Text styleType="body02R">{likeCount}</Text>
          </Styled.FavoriteWrapper>
        )}
        <Styled.ProductMetaWrapper>
          <Styled.ProductName styleType="body02M">{title}</Styled.ProductName>
          <Styled.ProductInfoWrapper>
            <Styled.Price>시작가: {toLocaleCurrency(price)}원</Styled.Price>
            <Styled.FavoriteWrapper isOnlyOther={false}>
              <Icon color="grayScale50" size={14} type="heart" />
              <Text styleType="body02R">{likeCount}</Text>
            </Styled.FavoriteWrapper>
            <Styled.Date isLogin={isLogin} styleType="body02R">
              {getTimeDiffText(createdAt)}
            </Styled.Date>
          </Styled.ProductInfoWrapper>
        </Styled.ProductMetaWrapper>
      </Styled.ProductWrapper>
      {isLogin && isSoldOut && (
        <Styled.ReviewButtonWrapper>
          <Styled.ReviewButton
            hasReview={hasReview}
            size="small"
            styleType="outline">
            {hasReview ? '보낸 후기 보기' : '후기 보내기'}
          </Styled.ReviewButton>
        </Styled.ReviewButtonWrapper>
      )}
    </Styled.Container>
  )
}

export { SaleTabPost }
export type { SaleTabPostProps }
