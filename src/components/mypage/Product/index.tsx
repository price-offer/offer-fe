import styled from '@emotion/styled'
import type { SelectOnChangeHandler } from '@offer-ui/react'
import { Image, SelectBox, Icon, Text } from '@offer-ui/react'
import type { ReactElement } from 'react'
import type { ProductStatusKeys } from '@constants'
import { toLocaleCurrency } from '@utils'

export interface ProductProps {
  imgUrl: string
  status: ProductStatusKeys
  id: number
  name: string
  price: number
  favorite: number
  date: string
  onChangeStatus(id: number, status: ProductStatusKeys): void
}

const STATUS_OPTIONS = [
  {
    text: '판매중',
    value: 'sell'
  },
  {
    text: '거래 완료',
    value: 'soldOut'
  }
]

export const Product = ({
  imgUrl,
  status,
  id,
  name,
  price = 0,
  favorite,
  date,
  onChangeStatus
}: ProductProps): ReactElement => {
  const handleChangeStatus: SelectOnChangeHandler = item => {
    onChangeStatus?.(id, item.value as ProductStatusKeys)
  }

  return (
    <StyledProductWrapper>
      <StyledProductImg alt={`product${id}-img`} src={imgUrl} />
      <StyledSelectBox
        items={STATUS_OPTIONS}
        value={status}
        onChange={handleChangeStatus}
      />
      <StyledProductMetaWrapper>
        <StyledProductName styleType="body02M">{name}</StyledProductName>
        <StyledProductInfoWrapper>
          <StyledPrice>시작가: {toLocaleCurrency(price)}원</StyledPrice>
          <StyledFavoriteWrapper>
            <Icon color="grayScale50" size={14} type="heart" />
            <Text styleType="body02R">{favorite}</Text>
          </StyledFavoriteWrapper>
          <StyledDate styleType="body02R">{date}</StyledDate>
        </StyledProductInfoWrapper>
      </StyledProductMetaWrapper>
    </StyledProductWrapper>
  )
}

const StyledProductWrapper = styled.li`
  ${({ theme }): string => `
    display: grid;
    grid-template-columns: 90px 90px 1fr;
    align-items: center;
    gap: 16px;
    padding: 20px;

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
    justify-content: space-between;
    order: 3;

    ${theme.mediaQuery.tablet} {
      flex-direction: column;
      order: 2;
      gap: 4px;
    }
  `}
`
const StyledProductName = styled(Text)`
  ${({ theme }): string => `
    text-align: center;
    width: 314px;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
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
const StyledFavoriteWrapper = styled.div`
  ${({ theme }): string => `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
    width: 100px;
    color: ${theme.colors.grayScale50};

    ${theme.mediaQuery.tablet} {
      display: none;
    }
  `}
`
const StyledDate = styled(Text)`
  ${({ theme }): string => `
    display: inline-block;
    color: ${theme.colors.grayScale50};

    ${theme.mediaQuery.tablet} {
      display: none;
    }
  `}
`
