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
  selectedSortPriceValue,
  inputPrice,
  applyPrice,
  postSummariesLength,
  handleSortPriceChange,
  handleCategoryChange,
  handleTradePeriodChange,
  handlePriceInputChange,
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
            handlePriceApplyClick={handlePriceApplyClick}
            handlePriceInputChange={handlePriceInputChange}
            inputPrice={inputPrice}
          />
        </Styled.LeftSelectWrapper>
        <Styled.RightSelectWrapper>
          <Styled.ProductCount>
            전체 {postSummariesLength && postSummariesLength}개
          </Styled.ProductCount>
          <Styled.PriceFilterSelect
            colorType="none"
            items={SORT_OPTIONS}
            value={selectedSortPriceValue}
            onChange={handleSortPriceChange}
          />
        </Styled.RightSelectWrapper>
      </Styled.SelectWrapper>
    </>
  )
}
export { FilterSelect, FilterSelectProps }
