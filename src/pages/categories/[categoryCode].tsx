import styled from '@emotion/styled'
import type { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import type {
  SearchOptionsState,
  OnChangeSearchOptions
} from '@components/result/SearchOptions/types'
import { useGetCategoriesQuery, useGetInfinitePostsQuery } from '@apis'
import { PostSection, ResultHeader } from '@components'
import type { SortOptionCodes, TradeTypeCodes } from '@types'
import { find, removeNullish, toQueryString } from '@utils'

type CategoriesProps = {
  category?: string
  sort?: SortOptionCodes
  minPrice?: number
  maxPrice?: number
  tradeType?: TradeTypeCodes
}

export const getServerSideProps: GetServerSideProps<CategoriesProps> = async ({
  query
}) => ({
  props: {
    category: query.categoryCode as string,
    sort: (query.sort as SortOptionCodes) || 'CREATED_DATE_DESC',
    minPrice: Number(query.min_price),
    maxPrice: Number(query.max_price),
    tradeType: (query.tradeType as TradeTypeCodes) || null
  }
})

const Categories: NextPage = ({
  category,
  sort,
  minPrice,
  maxPrice,
  tradeType
}: CategoriesProps) => {
  const [searchOptions, setSearchOptions] = useState<SearchOptionsState>({
    category,
    sort: 'CREATED_DATE_DESC',
    priceRange: {}
  })
  const router = useRouter()

  const getCategoriesQuery = useGetCategoriesQuery()

  const searchParams = removeNullish({
    minPrice: searchOptions.priceRange?.min ?? minPrice,
    maxPrice: searchOptions.priceRange?.max ?? maxPrice,
    tradeType: searchOptions.tradeType ?? tradeType,
    sort: searchOptions.sort ?? sort
  })

  const categories =
    getCategoriesQuery.data?.map(({ code, name }) => ({ code, name })) || []
  const currentCategory = find(categories, { code: searchOptions.category })

  const getInfinitePostsQuery = useGetInfinitePostsQuery({
    lastId: null,
    ...searchParams
  })

  const postCount = getInfinitePostsQuery.data?.totalPage || 0

  const searchByCategory = ({
    category,
    priceRange,
    ...params
  }: SearchOptionsState) => {
    router.push(
      `/categories/${category}?${toQueryString({
        ...params,
        minPrice: priceRange.min,
        maxPrice: priceRange.max
      })}`
    )
  }

  const handleChangeSearchOptions: OnChangeSearchOptions = (name, value) => {
    const newSearchOptions = {
      ...searchOptions,
      [name]: value
    }

    setSearchOptions(newSearchOptions)
    searchByCategory(newSearchOptions)
  }

  return (
    <Layout>
      <ResultWrapper>
        <ResultHeader
          postsCount={postCount}
          resultMessage={currentCategory?.name || '전체'}
        />
        <PostSection
          infinitePosts={{
            fetchNextPage: getInfinitePostsQuery?.fetchNextPage,
            hasNextPage: getInfinitePostsQuery?.hasNextPage,
            postList: getInfinitePostsQuery.data?.pages
          }}
          postsCount={postCount}
          searchOptions={searchOptions}
          onChangeSearchOption={handleChangeSearchOptions}
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

export default Categories
