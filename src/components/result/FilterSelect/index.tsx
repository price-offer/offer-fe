import type { ReactElement } from 'react'
import { Styled } from './styled'
import type { FilterSelectProps } from './types'
import { PriceDialog } from '../PriceDialog'
import { SORT_OPTIONS, TRADE_TYPES } from '@constants'

const FilterSelect = ({
  categories,
  handleChangeFilters,
  filters,
  postCount = 0
}: FilterSelectProps): ReactElement => {
  return (
    <Styled.SelectWrapper>
      <Styled.LeftSelectWrapper>
        <Styled.CategorySelect
          colorType="dark"
          items={categories}
          placeholder="전체"
          value={filters?.category || 'ALL'}
          onChange={({ code }) => handleChangeFilters('category', code)}
        />
        <Styled.TradePeriodSelect
          colorType="light"
          items={TRADE_TYPES}
          placeholder="거래방식"
          value={filters?.tradeType}
          onChange={({ code }) => handleChangeFilters('tradeType', code)}
        />
        <PriceDialog
          priceRange={filters.priceRange}
          onClickApply={priceRange => {
            handleChangeFilters('priceRange', priceRange)
          }}
        />
      </Styled.LeftSelectWrapper>
      <Styled.RightSelectWrapper>
        <Styled.ProductCount>전체 {postCount}개</Styled.ProductCount>
        <Styled.PriceFilterSelect
          colorType="none"
          items={SORT_OPTIONS}
          value={filters.sort}
          onChange={({ code }) => handleChangeFilters('sort', code)}
        />
      </Styled.RightSelectWrapper>
    </Styled.SelectWrapper>
  )
}
export { FilterSelect, FilterSelectProps }
