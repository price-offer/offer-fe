import styled from '@emotion/styled'
import { useAtomValue } from 'jotai'
import type { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import type {
  SearchOptionsState,
  OnChangeSearchOptions
} from '@components/result/SearchOptions/types'
import { useGetInfinitePostsQuery } from '@apis'
import { searchKeywordAtom } from '@atoms'
import { ResultHeader, PostSection } from '@components'
import type { SortOptionCodes, TradeTypeCodes } from '@types'
import { toQueryString, removeNullish } from '@utils'

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
  const router = useRouter()
  const [searchOptions, setSearchOptions] = useState<SearchOptionsState>({
    sort: 'CREATED_DATE_DESC',
    priceRange: {}
  })

  const searchKeyword = useAtomValue(searchKeywordAtom)

  const currentKeyword = searchKeyword ?? keyword
  const searchParams = removeNullish({
    category: searchOptions?.category ?? category,
    minPrice: searchOptions.priceRange?.min ?? minPrice,
    maxPrice: searchOptions.priceRange?.max ?? maxPrice,
    tradeType: searchOptions.tradeType ?? tradeType,
    sort: searchOptions.sort ?? sort,
    searchKeyword: currentKeyword
  })

  const getInfinitePostsQuery = useGetInfinitePostsQuery({
    lastId: null,
    ...searchParams
  })

  const postCount = getInfinitePostsQuery.data?.totalPage || 0

  const searchByResult = ({ priceRange, ...params }: SearchOptionsState) => {
    router.push(
      `/result?${toQueryString({
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
    searchByResult(newSearchOptions)
  }

  return (
    <Layout>
      <ResultWrapper>
        <ResultHeader
          postsCount={postCount}
          resultMessage={`"${currentKeyword}"의 검색결과`}
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

export default ResultPage
