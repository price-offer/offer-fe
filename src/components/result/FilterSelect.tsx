import styled from '@emotion/styled'
import { SelectBox, useMedia } from '@offer-ui/react'
import type { SelectOnChangeHandler } from '@offer-ui/react'
import { useEffect, useState } from 'react'
import type { ReactElement } from 'react'
import { PriceDialog } from './PriceDialog'

interface Props {
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
  handleChangeSortPrice: SelectOnChangeHandler
  handleChangeCategory: SelectOnChangeHandler
  handleChangeTradePeriod: SelectOnChangeHandler
}

const FilterSelect = ({
  categoryItems,
  sortPriceItems,
  tradePeriodItems,
  selectedCategoryValue,
  handleChangeSortPrice,
  handleChangeCategory,
  handleChangeTradePeriod
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
              onChange={handleChangeCategory}></CategorySelect>
          ) : (
            <></>
          )}
          <TradePeriodSelect
            colorType="light"
            items={tradePeriodItems}
            placeholder="거래방식"
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            onChange={handleChangeTradePeriod}></TradePeriodSelect>
          <PriceDialog></PriceDialog>
        </LeftSelectWrapper>
        <RightSelectWrapper>
          {disDesktop && <ProductCount>전체 999개</ProductCount>}
          <PriceFilterSelect
            colorType="none"
            items={sortPriceItems}
            placeholder="높은 가격순"
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            onChange={handleChangeSortPrice}></PriceFilterSelect>
        </RightSelectWrapper>
      </SelectWrapper>
    </>
  )
}
export { FilterSelect }

const SelectWrapper = styled.div`
  display: flex;
  margin-top: 25px;
  justify-content: space-between;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    margin-top: 25px;
    display: block;
    justify-content: none;
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
