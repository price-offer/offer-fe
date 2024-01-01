import type { ReactElement } from 'react'
import { Styled } from './styled'
import type { FilterSelectProps } from './types'
import { PriceDialog } from '../PriceDialog'
import { SORT_OPTIONS } from '@constants/app'
const FilterSelect = ({
  categoryItems,
  tradePeriodItems,
  selectedCategoryValue,
  selectedTradePeriodValue,
  minPriceValue,
  maxPriceValue,
  applyPrice,
  postSummaries,
  handleSortPriceChange,
  handleCategoryChange,
  handleTradePeriodChange,
  handleMinPriceInputChange,
  handleMaxPriceInputChange,
  handlePriceApplyClick
}: FilterSelectProps): ReactElement => {
  return (
    <>
      <Styled.SelectWrapper>
        <Styled.LeftSelectWrapper>
          <Styled.CategorySelect
            colorType="dark"
            items={categoryItems}
            placeholder={selectedCategoryValue}
            value={selectedCategoryValue}
            onChange={handleCategoryChange}
          />
          <Styled.TradePeriodSelect
            colorType="light"
            items={tradePeriodItems}
            placeholder="거래방식"
            value={selectedTradePeriodValue}
            onChange={handleTradePeriodChange}
          />
          <PriceDialog
            applyPrice={applyPrice}
            handleMaxPriceInputChange={handleMaxPriceInputChange}
            handleMinPriceInputChange={handleMinPriceInputChange}
            handlePriceApplyClick={handlePriceApplyClick}
            maxPriceValue={maxPriceValue}
            minPriceValue={minPriceValue}
          />
        </Styled.LeftSelectWrapper>
        <Styled.RightSelectWrapper>
          <Styled.ProductCount>
            전체 {postSummaries && postSummaries}개
          </Styled.ProductCount>
          <Styled.PriceFilterSelect
            colorType="none"
            items={SORT_OPTIONS}
            placeholder="높은 가격순"
            onChange={handleSortPriceChange}
          />
        </Styled.RightSelectWrapper>
      </Styled.SelectWrapper>
    </>
  )
}
export { FilterSelect, FilterSelectProps }
