import { useMedia } from '@offer-ui/react'
import { useEffect, useState } from 'react'
import type { ReactElement } from 'react'
import { Styled } from './styled'
import type { FilterSelectProps } from './types'
import { PriceDialog } from '../PriceDialog'
import { useGetSortOptions } from '@apis/post/queries'

const FilterSelect = ({
  categoryItems,
  tradePeriodItems,
  selectedCategoryValue,
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
  const { tablet, mobile } = useMedia()
  const { data: priceSortOptions, isLoading } = useGetSortOptions({
    type: 'POST'
  })
  const [disDesktop, setDIsDesktop] = useState(false)

  const postCount =
    postData && postData.reduce((acc, cur) => acc + cur.posts.length, 0)

  useEffect(() => {
    if (priceSortOptions === undefined) {
      return
    }
  }, [priceSortOptions])

  useEffect(() => {
    if (tablet || mobile) {
      setDIsDesktop(true)
    } else {
      setDIsDesktop(false)
    }
  }, [tablet, mobile])

  if (isLoading) {
    return <></>
  }

  return (
    <>
      <Styled.SelectWrapper>
        <Styled.LeftSelectWrapper>
          <Styled.LeftSelectSlider>
            {disDesktop ? (
              <Styled.CategorySelect
                colorType="dark"
                items={categoryItems}
                placeholder={selectedCategoryValue}
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
              applyPrice={applyPrice}
              handleMaxPriceInputChange={handleMaxPriceInputChange}
              handleMinPriceInputChange={handleMinPriceInputChange}
              handlePriceApplyClick={handlePriceApplyClick}
              maxPriceValue={maxPriceValue}
              minPriceValue={minPriceValue}
            />
          </Styled.LeftSelectSlider>
        </Styled.LeftSelectWrapper>
        <Styled.RightSelectWrapper>
          {disDesktop && (
            <Styled.ProductCount>전체 {postCount}개</Styled.ProductCount>
          )}
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
