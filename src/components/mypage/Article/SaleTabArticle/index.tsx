import styled from '@emotion/styled'
import type { SelectOnChangeHandler } from '@offer-ui/react'
import { Image, SelectBox, Icon, Text, Button } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { TRADE_STATUS } from '@constants'
import type { ArticlesElement, TradeStatus } from '@types'
import { toLocaleCurrency } from '@utils'

// NOTE: ArticlesElement 타입에 없어서 임시로 추가한 부분 : likeCount, review, sellerName
export type SaleTabArticleProps = {
  // 내 사용자 프로필, 타 사용자 프로필 구분
  hasToken: boolean
  className?: string
  // tradeStatus 변경 시, 이벤트
  onChangeTradeStatus(productId: number, status: TradeStatus): void
} & ArticlesElement

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

const StyledContainer = styled.li`
  ${({ theme }): string => `
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${theme.mediaQuery.tablet} {
      flex-direction: column;
      align-items: unset;
      justify-content: unset;
    }
  `}
`
const StyledProductWrapper = styled.div<{ hasToken: boolean }>`
  ${({ theme, hasToken }): string => `
    display: grid;
    flex: 1;
    grid-template-columns: ${hasToken ? '90px 90px 1fr' : '90px 1fr'};
    align-items: center;
    gap: 16px;
    padding: 20px 0 20px 20px;

    ${theme.mediaQuery.tablet} {
      grid-template-columns: 68px 1fr 90px;
      gap: 8px;
      padding: 16px 24px;
    }

    ${theme.mediaQuery.mobile} {
      min-width: 390px;
      padding: 16px;
    }
  `}
`
const StyledProductImg = styled(Image)`
  ${({ theme }): string => `
    width: 90px;
    height: 90px;
    order:1;

    ${theme.mediaQuery.tablet} {
      width: 68px;
      height: 68px;
    }
  `}
`
const StyledSelectBox = styled(SelectBox)`
  ${({ theme }): string => `
    order: 2;

    ${theme.mediaQuery.tablet} {
      order: 3;
    }
  `}
`

const StyledProductMetaWrapper = styled.div`
  ${({ theme }): string => `
    display: flex;
    align-items: center;
    justify-content: space-around;
    order: 3;

    ${theme.mediaQuery.tablet} {
      align-items: flex-start;
      flex-direction: column;
      order: 2;
      gap: 4px;
    }
  `}
`
const StyledProductName = styled(Text)`
  ${({ theme }): string => `
    text-align: center;
    width: 150px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    word-break: break-word;

    ${theme.mediaQuery.tablet} {
      text-align: left;
      width: 460px;
    }

    ${theme.mediaQuery.mobile} {
      width: 171px;
    }
  `}
`
const StyledProductInfoWrapper = styled.div`
  ${({ theme }): string => `
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 12px;

    ${theme.mediaQuery.tablet} {
      align-items: flex-start;
      flex-direction: column;
      gap: 0;
    }
`}
`
const StyledPrice = styled.span`
  ${({ theme }): string => `
    ${theme.fonts.body02R};

    ${theme.mediaQuery.tablet} {
      ${theme.fonts.caption01M};
      color: ${theme.colors.grayScale50};
    }
  `}
`
const StyledFavoriteWrapper = styled.div<{ isOnlyOther: boolean }>`
  ${({ theme, isOnlyOther }): string => `
    display: ${isOnlyOther ? 'none' : 'flex'};
    align-items: center;
    justify-content: center;
    gap: 2px;
    width: 100px;
    color: ${theme.colors.grayScale50};

    ${theme.mediaQuery.tablet} {
      display: ${isOnlyOther ? 'flex' : 'none'};
      order: 3;
    }
  `}
`
const StyledDate = styled(Text)<{ hasToken: boolean }>`
  ${({ theme, hasToken }): string => `
    display: inline-block;
    color: ${theme.colors.grayScale50};

    ${theme.mediaQuery.tablet} {
      display: ${hasToken ? 'none' : 'inline-block'};
      ${theme.fonts.caption01M};
      color: ${theme.colors.grayScale30};
    }
  `}
`
const StyledReviewButtonWrapper = styled.div`
  ${({ theme }): string => `
    display: flex;
    flex-direction: column;
    min-width: 120px;
    align-items: flex-end;

    ${theme.mediaQuery.tablet} {
      display: flex;
      align-items: center;
    }
  `}
`
const StyledReviewButton = styled(Button)<{ isReviewed: boolean }>`
  ${({ theme, isReviewed }): string => `
    color: ${isReviewed ? theme.colors.grayScale70 : theme.colors.brandPrimary};
    margin-right: 20px;

    ${theme.mediaQuery.tablet} {
      width: 100%;
      border: none;
      border-top: 1px solid ${theme.colors.grayScale10};
      border-radius: 0;
      padding: 20px 0;
      margin-right: 0;
    }
  `}
`
