import type { ReactElement } from 'react'
import { Styled } from './styled'
import type { FilterSelectProps } from './types'
import { PriceDialog } from '../PriceDialog'
import { useGetSortOptions } from '@apis/post/queries'
const FilterSelect = ({
  categoryItems,
  tradePeriodItems,
  selectedCategoryValue,
  selectedTradePeriodValue,
  minPriceValue,
  maxPriceValue,
  applyPrice,
  postData,
  handleSortPriceChange,
  handleCategoryChange,
  handleTradePeriodChange,
  handleMinPriceInputChange,
  handleMaxPriceInputChange,
  handlePriceApplyClick
}: FilterSelectProps): ReactElement => {
  const { data: priceSortOptions, isLoading } = useGetSortOptions({
    type: 'POST'
  })

  const postCount =
    postData && postData.reduce((acc, cur) => acc + cur.posts.length, 0)

  if (isLoading) {
    // 로딩
    return <></>
  }

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
          <Styled.ProductCount>전체 {postCount}개</Styled.ProductCount>
          <Styled.PriceFilterSelect
            colorType="none"
            items={priceSortOptions}
            placeholder="높은 가격순"
            onChange={handleSortPriceChange}
          />
        </Styled.RightSelectWrapper>
      </Styled.SelectWrapper>
    </>
  )
}
export { FilterSelect, FilterSelectProps }
