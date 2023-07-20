import { useMedia } from '@offer-ui/react'
import { useEffect, useState } from 'react'
import type { ReactElement } from 'react'
import { PriceDialog } from '../PriceDialog'
import {
  SelectWrapper,
  LeftSelectWrapper,
  CategorySelect,
  TradePeriodSelect,
  RightSelectWrapper,
  PriceFilterSelect,
  ProductCount
} from './styled'
import type { FilterSelectProps } from './types'

const FilterSelect = ({
  categoryItems,
  sortPriceItems,
  tradePeriodItems,
  selectedCategoryValue,
  minPriceValue,
  maxPriceValue,
  handleSortPriceChange,
  handleCategoryChange,
  handleTradePeriodChange,
  handleMinPriceInputChange,
  handleMaxPriceInputChange,
  handlePriceApplyClick
}: FilterSelectProps): ReactElement => {
  const { tablet, mobile } = useMedia()

  const [disDesktop, setDIsDesktop] = useState(false)

  useEffect(() => {
    if (tablet || mobile) setDIsDesktop(true)
    else {
      setDIsDesktop(false)
    }
  }, [tablet, mobile])

  return (
    <>
      <SelectWrapper>
        <LeftSelectWrapper>
          {disDesktop ? (
            <CategorySelect
              colorType="dark"
              items={categoryItems}
              placeholder="전체"
              value={selectedCategoryValue}
              onChange={handleCategoryChange}></CategorySelect>
          ) : (
            <></>
          )}
          <TradePeriodSelect
            colorType="light"
            items={tradePeriodItems}
            placeholder="거래방식"
            onChange={handleTradePeriodChange}></TradePeriodSelect>
          <PriceDialog
            handleMaxPriceInputChange={handleMaxPriceInputChange}
            handleMinPriceInputChange={handleMinPriceInputChange}
            handlePriceApplyClick={handlePriceApplyClick}
            maxPriceValue={maxPriceValue}
            minPriceValue={minPriceValue}></PriceDialog>
        </LeftSelectWrapper>
        <RightSelectWrapper>
          {disDesktop && <ProductCount>전체 999개</ProductCount>}
          <PriceFilterSelect
            colorType="none"
            items={sortPriceItems}
            placeholder="높은 가격순"
            onChange={handleSortPriceChange}></PriceFilterSelect>
        </RightSelectWrapper>
      </SelectWrapper>
    </>
  )
}
export { FilterSelect }
