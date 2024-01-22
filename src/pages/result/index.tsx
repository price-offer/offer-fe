import styled from '@emotion/styled'
import type { NextPage } from 'next'
import { useState } from 'react'
import type {
  SearchOptionsState,
  OnChangeSearchOptions
} from '@components/result/SearchOptions/types'
import { useGetCategoriesQuery, useGetInfinitePostsQuery } from '@apis'
import {
  SearchOptions,
  ResultHeader,
  CategorySlideFilter,
  ProductList
} from '@components'

const DEFAULT_POST_PAGE_NUMBER = 8

const ResultPage: NextPage = () => {
  const getCategoriesQuery = useGetCategoriesQuery()
  const categories =
    getCategoriesQuery.data?.map(({ code, name }) => ({ code, name })) || []
  const [searchOptions, setSearchOptions] = useState<SearchOptionsState>({
    sort: 'CREATED_DATE_DESC',
    priceRange: {
      min: 0
    }
  })
  const infinitePosts = useGetInfinitePostsQuery({
    lastId: null,
    limit: DEFAULT_POST_PAGE_NUMBER,
    category: searchOptions?.category,
    minPrice: searchOptions.priceRange?.min,
    maxPrice: searchOptions.priceRange?.max,
    tradeType: searchOptions.tradeType,
    sort: searchOptions.sort
  })
  // TODO: 포스트 전체 갯수 내려달라고 요청해놓았습니다
  const postsCount = 0

  const handleChangeSearchOptions: OnChangeSearchOptions = (name, value) => {
    setSearchOptions(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <Layout>
      <ResultWrapper>
        <ResultHeader postsCount={postsCount} searchResult="###" />
        <CategorySliderWrapper>
          <CategorySlideFilter
            categories={categories}
            selectedCategory={searchOptions.category}
            onClickCategory={code =>
              handleChangeSearchOptions('category', code)
            }
          />
        </CategorySliderWrapper>
        <SearchOptions
          categories={categories}
          postsCount={postsCount}
          searchOptions={searchOptions}
          onChangeSearchOption={handleChangeSearchOptions}
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
  /* TODO: useMedia를 사용한 조건부 렌더링시 hydration 에러가 발생해 스타일로 우선 적용 했습니다. */
  ${({ theme }) => theme.mediaQuery.tablet} {
    display: none;
  }
`

export default ResultPage
