import { useMedia } from '@offer-ui/react'
import { useEffect, useState } from 'react'
import type { ReactElement } from 'react'
import { Styled } from './styled'
import type { FilterSelectProps } from './types'
import { PriceDialog } from '../PriceDialog'

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
    if (tablet || mobile) {
      setDIsDesktop(true)
    } else {
      setDIsDesktop(false)
    }
  }, [tablet, mobile])

  return (
    <>
      <Styled.SelectWrapper>
        <Styled.LeftSelectWrapper>
          {disDesktop ? (
            <Styled.CategorySelect
              colorType="dark"
              items={categoryItems}
              placeholder="전체"
              value={selectedCategoryValue}
              onChange={handleCategoryChange}
            />
          ) : (
            <></>
          )}
          <Styled.TradePeriodSelect
            colorType="light"
            items={tradePeriodItems}
            placeholder="거래방식"
            onChange={handleTradePeriodChange}
          />
          <PriceDialog
            handleMaxPriceInputChange={handleMaxPriceInputChange}
            handleMinPriceInputChange={handleMinPriceInputChange}
            handlePriceApplyClick={handlePriceApplyClick}
            maxPriceValue={maxPriceValue}
            minPriceValue={minPriceValue}
          />
        </Styled.LeftSelectWrapper>
        <Styled.RightSelectWrapper>
          {disDesktop && <Styled.ProductCount>전체 999개</Styled.ProductCount>}
          <Styled.PriceFilterSelect
            colorType="none"
            items={sortPriceItems}
            placeholder="높은 가격순"
            onChange={handleSortPriceChange}
          />
        </Styled.RightSelectWrapper>
      </Styled.SelectWrapper>
    </>
  )
}
export { FilterSelect, FilterSelectProps }
