import styled from '@emotion/styled'
import { SelectBox, useMedia } from '@offer-ui/react'
import type { SelectOnChangeHandler } from '@offer-ui/react'
import { useEffect, useState } from 'react'
import type { ReactElement, ChangeEventHandler } from 'react'
import { PriceDialog } from '../PriceDialog'

type Props = {
  categoryItems: {
    code: string
    name: string
    selected: boolean
  }[]
  tradePeriodItems: {
    code: string
    name: string
  }[]
  sortPriceItems: {
    code: string
    name: string
  }[]
  selectedCategoryValue: string
  selectedTradePeriodValue: string
  selectedSortPriceValue: string
  minPriceValue: string
  maxPriceValue: string
  handleSortPriceChange: SelectOnChangeHandler
  handleCategoryChange: SelectOnChangeHandler
  handleTradePeriodChange: SelectOnChangeHandler
  handleMinPriceInputChange: ChangeEventHandler
  handleMaxPriceInputChange: ChangeEventHandler
  handlePriceApplyClick(): void
}

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
}: Props): ReactElement => {
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
              onChange={handleCategoryChange}
            ></CategorySelect>
          ) : (
            <></>
          )}
          <TradePeriodSelect
            colorType="light"
            items={tradePeriodItems}
            placeholder="거래방식"
            onChange={handleTradePeriodChange}
          ></TradePeriodSelect>
          <PriceDialog
            handleMaxPriceInputChange={handleMaxPriceInputChange}
            handleMinPriceInputChange={handleMinPriceInputChange}
            handlePriceApplyClick={handlePriceApplyClick}
            maxPriceValue={maxPriceValue}
            minPriceValue={minPriceValue}
          ></PriceDialog>
        </LeftSelectWrapper>
        <RightSelectWrapper>
          {disDesktop && <ProductCount>전체 999개</ProductCount>}
          <PriceFilterSelect
            colorType="none"
            items={sortPriceItems}
            placeholder="높은 가격순"
            onChange={handleSortPriceChange}
          ></PriceFilterSelect>
        </RightSelectWrapper>
      </SelectWrapper>
    </>
  )
}
export { FilterSelect }

const SelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 25px;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    display: block;
    justify-content: none;

    margin-top: 25px;
  }
`

const LeftSelectWrapper = styled.div`
  display: flex;
  gap: 8px;
`
const CategorySelect = styled(SelectBox)`
  div:nth-of-type(1) {
    span {
      ${({ theme }): string => theme.fonts.body02B};
    }
  }
`
const TradePeriodSelect = styled(SelectBox)`
  div:nth-of-type(1) {
    span {
      ${({ theme }): string => theme.fonts.body02B};
    }
  }
`

const RightSelectWrapper = styled.div`
  ${({ theme }): string => theme.mediaQuery.tablet} {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 10px;
  }
`
const PriceFilterSelect = styled(SelectBox)`
  div:nth-of-type(1) {
    span {
      ${({ theme }): string => theme.fonts.body02B};
    }
  }
`

const ProductCount = styled.div`
  margin-right: auto;
  ${({ theme }): string => theme.fonts.body01B}
`
