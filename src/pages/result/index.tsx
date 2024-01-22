import styled from '@emotion/styled'
import type { NextPage } from 'next'
import { useState } from 'react'
import type {
  Filters,
  HandleChangeFilter
} from '@components/result/FilterSelect/types'
import { useGetCategoriesQuery, useGetInfinitePostsQuery } from '@apis'
import {
  ResultHeader,
  CategorySlideFilter,
  FilterSelect,
  ProductList
} from '@components'

const DEFAULT_POST_PAGE_NUMBER = 8

const ResultPage: NextPage = () => {
  const getCategoriesQuery = useGetCategoriesQuery()
  const categories =
    getCategoriesQuery.data?.map(({ code, name }) => ({ code, name })) || []
  const [filters, setFilters] = useState<Filters>({
    sort: 'CREATED_DATE_DESC',
    priceRange: {
      min: 0
    }
  })
  const infinitePosts = useGetInfinitePostsQuery({
    lastId: null,
    limit: DEFAULT_POST_PAGE_NUMBER,
    category: filters?.category,
    minPrice: filters.priceRange?.min,
    maxPrice: filters.priceRange?.max,
    tradeType: filters.tradeType,
    sort: filters.sort
  })
  // TODO: 포스트 전체 갯수 내려달라고 요청해놓았습니다
  const postCount = 0

  const handleChangeFilters: HandleChangeFilter = (name, value) => {
    setFilters(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <Layout>
      <ResultWrapper>
        <ResultHeader postCount={postCount} searchResult="###" />
        <CategorySliderWrapper>
          <CategorySlideFilter
            categories={categories}
            selectedCategory={filters.category}
            onClickCategory={code => handleChangeFilters('category', code)}
          />
        </CategorySliderWrapper>
        <FilterSelect
          categories={categories}
          filters={filters}
          handleChangeFilters={handleChangeFilters}
          postCount={postCount}
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

const CategorySliderWrapper = styled.div`
  /* TODO: useMedia를 사용한 조건부 런데링시 hydration 에러가 발생해 스타일로 우선 적용 했습니다. */
  ${({ theme }) => theme.mediaQuery.tablet} {
    display: none;
  }
`

export default ResultPage
