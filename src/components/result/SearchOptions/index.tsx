import type { ReactElement } from 'react'
import { Styled } from './styled'
import type { SearchOptionsProps } from './types'
import { PriceDialog } from '../PriceDialog'
import { SORT_OPTIONS, TRADE_TYPES } from '@constants'

const SearchOptions = ({
  categories,
  searchOptions,
  postsCount = 0,
  onChangeSearchOption
}: SearchOptionsProps): ReactElement => {
  return (
    <Styled.SelectWrapper>
      <Styled.LeftSelectWrapper>
        <Styled.CategorySelect
          colorType="dark"
          items={categories}
          placeholder="전체"
          value={searchOptions?.category || 'ALL'}
          onChange={({ code }) => onChangeSearchOption('category', code)}
        />
        <Styled.TradePeriodSelect
          colorType="light"
          items={TRADE_TYPES}
          placeholder="거래방식"
          value={searchOptions?.tradeType}
          onChange={({ code }) => onChangeSearchOption('tradeType', code)}
        />
        <PriceDialog
          priceRange={searchOptions.priceRange}
          onClickApply={code => onChangeSearchOption('priceRange', code)}
        />
      </Styled.LeftSelectWrapper>
      <Styled.RightSelectWrapper>
        <Styled.ProductCount>전체 {postsCount}개</Styled.ProductCount>
        <Styled.PriceFilterSelect
          colorType="none"
          items={SORT_OPTIONS}
          value={searchOptions.sort}
          onChange={({ code }) => onChangeSearchOption('sort', code)}
        />
      </Styled.RightSelectWrapper>
    </Styled.SelectWrapper>
  )
}
export { SearchOptions, SearchOptionsProps }
