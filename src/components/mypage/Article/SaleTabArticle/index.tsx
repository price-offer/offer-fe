import type { SelectOnChangeHandler } from '@offer-ui/react'
import { Icon, Text } from '@offer-ui/react'
import type { ReactElement } from 'react'
import {
  StyledContainer,
  StyledProductWrapper,
  StyledProductImg,
  StyledSelectBox,
  StyledProductMetaWrapper,
  StyledProductName,
  StyledProductInfoWrapper,
  StyledPrice,
  StyledFavoriteWrapper,
  StyledDate,
  StyledReviewButtonWrapper,
  StyledReviewButton
} from './styled'
import type { SaleTabArticleProps } from './types'
import { TRADE_STATUS } from '@constants'
import type { TradeStatus } from '@types'
import { toLocaleCurrency } from '@utils'

export const SaleTabArticle = (props: SaleTabArticleProps): ReactElement => {
  const {
    className,
    id,
    mainImageUrl,
    title,
    price,
    tradeStatus,
    modifiedDate,
    likeCount,
    hasToken,
    isReviewed,
    onChangeTradeStatus
  } = props
  const isSoldOut = tradeStatus.code === 8

  const handleChangeTradeStatus: SelectOnChangeHandler<TradeStatus> = item => {
    onChangeTradeStatus?.(id, item)
  }

  return (
    <StyledContainer className={className}>
      <StyledProductWrapper hasToken={hasToken}>
        <StyledProductImg alt={`product${id}-img`} src={mainImageUrl} />
        {hasToken ? (
          <StyledSelectBox
            items={TRADE_STATUS}
            value={tradeStatus.code}
            onChange={handleChangeTradeStatus}
          />
        ) : (
          <StyledFavoriteWrapper isOnlyOther>
            <Icon color="grayScale50" size={14} type="heart" />
            <Text styleType="body02R">{likeCount}</Text>
          </StyledFavoriteWrapper>
        )}
        <StyledProductMetaWrapper>
          <StyledProductName styleType="body02M">{title}</StyledProductName>
          <StyledProductInfoWrapper>
            <StyledPrice>시작가: {toLocaleCurrency(price)}원</StyledPrice>
            <StyledFavoriteWrapper isOnlyOther={false}>
              <Icon color="grayScale50" size={14} type="heart" />
              <Text styleType="body02R">{likeCount}</Text>
            </StyledFavoriteWrapper>
            <StyledDate hasToken={hasToken} styleType="body02R">
              {modifiedDate}
            </StyledDate>
          </StyledProductInfoWrapper>
        </StyledProductMetaWrapper>
      </StyledProductWrapper>
      {hasToken && isSoldOut && (
        <StyledReviewButtonWrapper>
          <StyledReviewButton
            isReviewed={isReviewed}
            size="small"
            styleType="outline">
            {isReviewed ? '보낸 후기 보기' : '후기 보내기'}
          </StyledReviewButton>
        </StyledReviewButtonWrapper>
      )}
    </StyledContainer>
  )
}
