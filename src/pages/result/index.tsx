import styled from '@emotion/styled'
import { useMedia } from '@offer-ui/react'
import type { NextPage } from 'next'

import { useEffect, useState } from 'react'
import { ProductList } from '@components/home/ProductList'
import { ResultHeader } from '@components/result/CategoryHeader'
import { CategorySlideFilter } from '@components/result/CategorySlideFilter'
import { FilterSelect } from '@components/result/FilterSelect'
import useCategoryFilterList from '@hooks/result/useCategoryFilterList'
import useSelectBoxFilter from '@hooks/result/useSelectBoxFilter'

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

  const apiRes = {
    elements: [
      {
        id: 5,
        mainImageUrl: 'string',
        title: 'string',
        price: 8000,
        tradeArea: '서울시 강남구',
        tradeStatus: {
          code: 4,
          name: '판매중'
        },
        createdDate: '2021-12-10T14:23:53',
        modifiedDate: '2021-12-10T14:23:53',
        isLiked: false,
        likeCount: 0,
        isReviewed: false,
        sellerNickName: 'hypeboy'
      },
      {
        id: 4,
        mainImageUrl: 'string',
        title: 'string',
        price: 8000,
        tradeArea: '서울시 강남구',
        tradeStatus: {
          code: 4,
          name: '판매중'
        },
        createdDate: '2021-12-10T14:23:53',
        modifiedDate: '2021-12-10T14:23:53',
        isLiked: false,
        likeCount: 0,
        isReviewed: false,
        sellerNickName: 'hypeboy'
      },
      {
        id: 3,
        mainImageUrl: 'string',
        title: 'string',
        price: 8000,
        tradeArea: '서울시 강남구',
        tradeStatus: {
          code: 4,
          name: '판매중'
        },
        createdDate: '2021-12-10T14:23:53',
        modifiedDate: '2021-12-10T14:23:53',
        isLiked: false,
        likeCount: 0,
        isReviewed: false,
        sellerNickName: 'hypeboy'
      },
      {
        id: 2,
        mainImageUrl: 'string',
        title: 'string',
        price: 36500,
        tradeArea: '서울시 강남구',
        tradeStatus: {
          code: 4,
          name: '판매중'
        },
        createdDate: '2021-12-10T14:25:30',
        modifiedDate: '2021-12-10T14:25:30',
        isLiked: false,
        likeCount: 0,
        isReviewed: false,
        sellerNickName: 'hypeboy'
      },
      {
        id: 1,
        mainImageUrl: 'string',
        title: 'string',
        price: 8000,
        tradeArea: '서울시 강남구',
        tradeStatus: {
          code: 4,
          name: '판매중'
        },
        createdDate: '2021-12-10T14:23:53',
        modifiedDate: '2021-12-10T14:23:53',
        isLiked: false,
        likeCount: 0,
        isReviewed: false,
        sellerNickName: 'hypeboy'
      }
    ],
    pageInfo: {
      currentPageNumber: 1,
      lastPageNumber: 1,
      sizePerPage: 2,
      totalElementCount: 2,
      isFirstPage: true,
      isLastPage: true
    }
  }

  const {
    checkFilterList,
    onCheckItem,
    selectedCategoryValue,
    handleCategorySelectChange
  } = useCategoryFilterList()

  const {
    tradePeriodItems,
    sortPriceItems,
    selectedTradePeriodValue,
    selectedSortPriceValue,
    minPriceValue,
    maxPriceValue,
    handleTradePeriodSelectChange,
    handleSortPriceSelectChange,
    handleMinPriceInputChange,
    handleMaxPriceInputChange,
    handlePriceApplyClick
  } = useSelectBoxFilter()

  return (
    <div>
      <Layout>
        <ResultWrapper>
          <ResultHeader searchResult="###" />
          {isDesktop && (
            <CategorySlideFilter
              cateGoryList={checkFilterList}
              onCategoryClick={onCheckItem}
            />
          )}
          <FilterSelect
            categoryItems={checkFilterList}
            handleCategoryChange={handleCategorySelectChange}
            handleMaxPriceInputChange={handleMaxPriceInputChange}
            handleMinPriceInputChange={handleMinPriceInputChange}
            handlePriceApplyClick={handlePriceApplyClick}
            handleSortPriceChange={handleSortPriceSelectChange}
            handleTradePeriodChange={handleTradePeriodSelectChange}
            maxPriceValue={maxPriceValue}
            minPriceValue={minPriceValue}
            selectedCategoryValue={selectedCategoryValue}
            selectedSortPriceValue={selectedSortPriceValue}
            selectedTradePeriodValue={selectedTradePeriodValue}
            sortPriceItems={sortPriceItems}
            tradePeriodItems={tradePeriodItems}
          />
          <ProductList productList={apiRes.elements} />
        </ResultWrapper>
      </Layout>
    </div>
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
