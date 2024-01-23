import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { useAtomValue } from 'jotai'
import type { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import type {
  SearchOptionsState,
  OnChangeSearchOptions
} from '@components/result/SearchOptions/types'
import { useGetCategoriesQuery, useGetInfinitePostsQuery } from '@apis'
import { searchKeywordAtom } from '@atoms'
import {
  SearchOptions,
  ResultHeader,
  CategorySlideFilter,
  ProductList
} from '@components'
import type { SortOptionCodes, TradeTypeCodes } from '@types'
import { toQueryString, removeNullish } from '@utils'

const DEFAULT_POST_PAGE_NUMBER = 8

type ResultPageProps = {
  keyword?: string
  category?: string | null
  sort?: SortOptionCodes
  minPrice?: number
  maxPrice?: number
  tradeType?: TradeTypeCodes
}
export const getServerSideProps: GetServerSideProps<ResultPageProps> = async ({
  query
}) => ({
  props: {
    keyword: (query.keyword as string) || '',
    category: (query.category as string) || null,
    sort: (query.sort as SortOptionCodes) || 'CREATED_DATE_DESC',
    minPrice: Number(query.min_price),
    maxPrice: Number(query.max_price),
    tradeType: (query.tradeType as TradeTypeCodes) || null
  }
})

const ResultPage: NextPage = ({
  keyword,
  category,
  sort,
  minPrice,
  maxPrice,
  tradeType
}: ResultPageProps) => {
  const getCategoriesQuery = useGetCategoriesQuery()
  const router = useRouter()
  const searchKeyword = useAtomValue(searchKeywordAtom)
  const [searchOptions, setSearchOptions] = useState<SearchOptionsState>({
    sort: 'CREATED_DATE_DESC',
    priceRange: {}
  })
  const currentKeyword = searchKeyword ?? keyword
  const searchParams = removeNullish({
    category: searchOptions?.category ?? category,
    minPrice: searchOptions.priceRange?.min ?? minPrice,
    maxPrice: searchOptions.priceRange?.max ?? maxPrice,
    tradeType: searchOptions.tradeType ?? tradeType,
    sort: searchOptions.sort ?? sort,
    searchKeyword: currentKeyword
  })

  const categories =
    getCategoriesQuery.data?.map(({ code, name }) => ({ code, name })) || []

  const infinitePosts = useGetInfinitePostsQuery({
    lastId: null,
    limit: DEFAULT_POST_PAGE_NUMBER,
    ...searchParams
  })

  // TODO: 포스트 전체 갯수 내려달라고 요청해놓았습니다
  const postsCount = 0

  const handleChangeSearchOptions: OnChangeSearchOptions = (name, value) => {
    const nextSearchOptions = {
      ...searchOptions,
      [name]: value
    }
    setSearchOptions(nextSearchOptions)

    router.push(`/result?${toQueryString(searchParams)}`)
  }

  return (
    <Layout>
      <ResultWrapper>
        <ResultHeader
          postsCount={postsCount}
          searchResult={currentKeyword || ''}
        />
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
        {postsCount > 0 ? (
          <ProductList
            fetchNextPage={infinitePosts?.fetchNextPage}
            hasNextPage={infinitePosts?.hasNextPage}
            postData={infinitePosts?.data?.pages}
          />
        ) : (
          <Placeholder>
            <PlaceholderTitle>검색 결과 없음</PlaceholderTitle>
            <PlaceholderDescription>
              찾으시는 검색 결과가 없어요
            </PlaceholderDescription>
          </Placeholder>
        )}
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

const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  margin: 120px 0;

  text-align: center;
`

const PlaceholderTitle = styled.p`
  margin-bottom: 8px;

  ${({ theme }) => theme.fonts.subtitle01B}
`

const PlaceholderDescription = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.grayScale70};

    ${theme.fonts.body01M};
  `}
`

export default ResultPage
