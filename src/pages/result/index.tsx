import styled from '@emotion/styled'
import { useMedia } from '@offer-ui/react'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useGetInfinitePostsQuery } from '@apis'
import {
  ResultHeader,
  ProductList,
  CategorySlideFilter,
  FilterSelect
} from '@components'
import { useCategoryFilterList, useSelectBoxFilter } from '@hooks'

const DEFAULT_POST_PAGE_NUMBER = 8

const Result: NextPage = () => {
  const { desktop } = useMedia()
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    if (desktop) {
      setIsDesktop(true)
    } else {
      setIsDesktop(false)
    }
  }, [desktop])

  const {
    checkFilterList,
    onCheckItem,
    selectedCategoryValue,
    handleCategorySelectChange
  } = useCategoryFilterList()

  const {
    tradePeriodItems,
    selectedTradePeriodValue,
    selectedSortPriceValue,
    inputPrice,
    applyPrice,
    handleTradePeriodSelectChange,
    handleSortPriceSelectChange,
    handlePriceInputChange,
    handlePriceApplyClick
  } = useSelectBoxFilter()

  const categoryFilterOption =
    selectedCategoryValue === 'ALL' ? undefined : selectedCategoryValue

  const infinitePosts = useGetInfinitePostsQuery({
    lastId: null,
    limit: DEFAULT_POST_PAGE_NUMBER,
    category: categoryFilterOption,
    minPrice: applyPrice && applyPrice?.minPrice,
    maxPrice: applyPrice && applyPrice?.maxPrice,
    tradeType: selectedTradePeriodValue,
    sort: selectedSortPriceValue
  })

  const postSummaries = Number(
    infinitePosts?.data?.pages?.reduce(
      (acc, cur) => acc + cur?.posts?.length,
      0
    )
  )

  useEffect(() => {
    infinitePosts?.refetch()
  }, [
    applyPrice,
    selectedCategoryValue,
    selectedTradePeriodValue,
    selectedSortPriceValue,
    infinitePosts?.refetch
  ])

  return (
    <Layout>
      <ResultWrapper>
        <ResultHeader
          postSummariesLength={postSummaries && postSummaries}
          searchResult="###"
        />
        {isDesktop && (
          <CategorySlideFilter
            cateGoryList={checkFilterList}
            onCategoryClick={onCheckItem}
          />
        )}
        <FilterSelect
          applyPrice={applyPrice}
          categoryItems={checkFilterList}
          handleCategoryChange={handleCategorySelectChange}
          handlePriceApplyClick={handlePriceApplyClick}
          handlePriceInputChange={handlePriceInputChange}
          handleSortPriceChange={handleSortPriceSelectChange}
          handleTradePeriodChange={handleTradePeriodSelectChange}
          inputPrice={inputPrice}
          postSummariesLength={postSummaries && postSummaries}
          selectedCategoryValue={selectedCategoryValue}
          selectedSortPriceValue={selectedSortPriceValue}
          selectedTradePeriodValue={selectedTradePeriodValue}
          tradePeriodItems={tradePeriodItems}
        />
        <ProductList
          fetchNextPage={infinitePosts?.fetchNextPage}
          hasNextPage={infinitePosts?.hasNextPage}
          postData={infinitePosts?.data?.pages}
        />
      </ResultWrapper>
    </Layout>
  )
}

const ResultWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    padding-right: 24px;
    padding-left: 24px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    padding-right: 16px;
    padding-left: 16px;
  }
`

const Layout = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  margin-top: 68px;
`

export default Result
