/* eslint-disable no-console */
import styled from '@emotion/styled'
import type { ColorKeys } from '@offer-ui/react'
import { Divider, SelectBox } from '@offer-ui/react'
import { useState, useCallback } from 'react'
import type { ReactElement } from 'react'
import type { ProductItem } from '@components'
import { ProfileBox, ProductList } from '@components'
import type { ProductStatusKeys } from '@constants'
import { useIsomorphicLayoutEffect } from '@hooks'
import { myProfile } from '@mocks/fixture'

/** API Fixture */
const sortItems = [
  {
    text: '최신순',
    value: 'recently'
  },
  {
    text: '높은 가격 순',
    value: 'highPrice'
  },
  {
    text: '낮은 가격 순',
    value: 'lowPrice'
  }
]
let productsFixture = Array.from({ length: 15 }, () => 0).map((_, index) => {
  return {
    date: '2023.01.17',
    favorite: 3,
    id: index + 1,
    imgUrl: 'https://picsum.photos/400',
    name: `상품 이름${index + 1}`,
    price: 155000,
    status: index % 2 === 0 ? 'sell' : 'soldOut'
  }
}) as ProductItem[]

/** Mock API */
const getProducts = ({ status }: SearchOptions): typeof productsFixture => {
  return productsFixture.filter(item => item.status === status)
}
const updateProduct = (id: number, status: 'sell' | 'soldOut'): void => {
  productsFixture = productsFixture.map(item =>
    item.id === id ? { ...item, status } : item
  )
}

type SortType = 'recently' | 'highPrice' | 'lowPrice'
interface SearchOptions {
  status: ProductStatusKeys
  sortType: SortType
}

const MyPage = (): ReactElement => {
  const [products, setProducts] = useState<ProductItem[]>([])
  const [searchOptions, setSearchOptions] = useState<SearchOptions>({
    status: 'sell',
    sortType: 'recently'
  })
  const isSellStatus = searchOptions.status === 'sell'
  const isSoldOutStatus = searchOptions.status === 'soldOut'

  const getProductsLength = (status: ProductStatusKeys): number => {
    return status === searchOptions.status
      ? products.length
      : productsFixture.length - products.length
  }

  const fetchProducts = useCallback(() => {
    const products = getProducts(searchOptions)
    setProducts(products)
  }, [searchOptions])

  const handleOnChangeProductStatus = (
    id: number,
    status: ProductStatusKeys
  ): void => {
    updateProduct(id, status)
    fetchProducts()
  }

  const handleOnChangeSearchOptions = (
    option: keyof SearchOptions,
    value: SearchOptions[keyof SearchOptions]
  ): void => {
    setSearchOptions({
      ...searchOptions,
      [option]: value
    })
  }

  useIsomorphicLayoutEffect(() => {
    fetchProducts()
  }, [searchOptions, fetchProducts])

  return (
    <StyledContentWrapper>
      <ProfileBox {...myProfile} />
      <StyledDivider size="bold" />
      <StyledUserProductsWrapper>
        <StyledSearchOptionsWrapper>
          <StyledStatusButtonListWrapper>
            <StyledStatusButtonLabel>
              <StyledCircle isCurrent={isSellStatus} />
              <StyledStatusButton
                isCurrent={isSellStatus}
                type="button"
                onClick={(): void =>
                  handleOnChangeSearchOptions('status', 'sell')
                }>
                <StyledText isCurrent={isSellStatus}>판매중</StyledText>
              </StyledStatusButton>
              <StyledText color="grayScale50">
                {getProductsLength('sell')}
              </StyledText>
            </StyledStatusButtonLabel>
            <StyledStatusButtonLabel>
              <StyledCircle isCurrent={isSoldOutStatus} />
              <StyledStatusButton
                isCurrent={isSoldOutStatus}
                type="button"
                onClick={(): void =>
                  handleOnChangeSearchOptions('status', 'soldOut')
                }>
                <StyledText isCurrent={isSoldOutStatus}>거래완료</StyledText>
              </StyledStatusButton>
              <StyledText>{getProductsLength('soldOut')}</StyledText>
            </StyledStatusButtonLabel>
          </StyledStatusButtonListWrapper>
          <SelectBox
            colorType="none"
            items={sortItems}
            value={searchOptions.sortType}
            onChange={(item): void => {
              handleOnChangeSearchOptions('sortType', item.value as SortType)
            }}
          />
        </StyledSearchOptionsWrapper>
        <StyledProductListWrapper>
          <ProductList
            products={products}
            status={searchOptions.status}
            onChangeProductStatus={handleOnChangeProductStatus}
          />
        </StyledProductListWrapper>
      </StyledUserProductsWrapper>
    </StyledContentWrapper>
  )
}

export default MyPage

const StyledContentWrapper = styled.div`
  ${({ theme }): string => `
    display: flex;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    gap: 32px;

    ${theme.mediaQuery.tablet} {
      position: relative;
      flex-direction: column;
      gap: 0;
    }
  `}
`
const StyledSearchOptionsWrapper = styled.div`
  ${({ theme }): string => `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid ${theme.colors.grayScale10};

    ${theme.mediaQuery.tablet} {
      padding: 16px;
    }
  `}
`
const StyledStatusButtonListWrapper = styled.div`
  display: flex;
  gap: 22px;
`
const StyledStatusButtonLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`
const StyledCircle = styled.span<{ isCurrent: boolean }>`
  ${({ theme, isCurrent }): string => `
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 100%;
    background-color: ${
      isCurrent ? theme.colors.brandPrimary : theme.colors.grayScale50
    };
  `}
`
const StyledStatusButton = styled.button<{ isCurrent: boolean }>`
  ${({ theme }): string => `
    border: none;
    background: transparent;
    padding: 0;
    margin: 0 4px 0 8px;
    cursor: pointer;

    ${theme.mediaQuery.tablet} {
      margin: 0 4px;
    }
  `}
`
const StyledText = styled.span<{ isCurrent?: boolean; color?: ColorKeys }>`
  ${({ theme, isCurrent, color }): string => `
    ${theme.fonts.subtitle01B};
    color: ${
      color
        ? theme.colors[color]
        : isCurrent
        ? theme.colors.black
        : theme.colors.grayScale50
    };

    ${theme.mediaQuery.tablet} {
      ${theme.fonts.body02B};
    }
  `}
`
const StyledUserProductsWrapper = styled.div`
  ${({ theme }): string => `
    width: 892px;
    height: 855px;
    border: 1px solid ${theme.colors.grayScale10};
    border-bottom: none;

    ${theme.mediaQuery.tablet} {
      width: auto;
      border: none;
    }
  `}
`
const StyledProductListWrapper = styled.div`
  ${({ theme }): string => `
    height: 780px;
    overflow-y: scroll;

    ${theme.mediaQuery.tablet} {
      height: auto;
      overflow-y: unset;
    }
  `}
`
const StyledDivider = styled(Divider)`
  ${({ theme }): string => `
    display: none;

    ${theme.mediaQuery.tablet} {
      display: block;
    }
  `}
`
