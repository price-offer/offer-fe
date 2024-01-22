import type { ReactElement } from 'react'
import { Styled } from './styled'
import type { SearchOptionsProps } from './types'
import { PriceDialog } from '../PriceDialog'
import { SORT_OPTIONS, TRADE_TYPES } from '@constants'

const SearchOptions = ({
  categories,
  handleChangeSearchOptions,
  searchOptions,
  postsCount = 0
}: SearchOptionsProps): ReactElement => {
  return (
    <Styled.SelectWrapper>
      <Styled.LeftSelectWrapper>
        <Styled.CategorySelect
          colorType="dark"
          items={categories}
          placeholder="전체"
          value={searchOptions?.category || 'ALL'}
          onChange={({ code }) => handleChangeSearchOptions('category', code)}
        />
        <Styled.TradePeriodSelect
          colorType="light"
          items={TRADE_TYPES}
          placeholder="거래방식"
          value={searchOptions?.tradeType}
          onChange={({ code }) => handleChangeSearchOptions('tradeType', code)}
        />
        <PriceDialog
          priceRange={searchOptions.priceRange}
          onClickApply={priceRange => {
            handleChangeSearchOptions('priceRange', priceRange)
          }}
        />
      </Styled.LeftSelectWrapper>
      <Styled.RightSelectWrapper>
        <Styled.ProductCount>전체 {postsCount}개</Styled.ProductCount>
        <Styled.PriceFilterSelect
          colorType="none"
          items={SORT_OPTIONS}
          value={searchOptions.sort}
          onChange={({ code }) => handleChangeSearchOptions('sort', code)}
        />
      </Styled.RightSelectWrapper>
    </Styled.SelectWrapper>
  )
}
export { SearchOptions, SearchOptionsProps }
