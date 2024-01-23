import styled from '@emotion/styled'
import type { NextPage } from 'next'
import { ProductList } from '../components/home/ProductList'
import { useGetInfinitePostsQuery } from '@apis/post'
import { CategorySlider, HomeBanner } from '@components'

const Home: NextPage = () => {
  const {
    data: postList,
    fetchNextPage,
    hasNextPage
  } = useGetInfinitePostsQuery({
    lastId: null,
    limit: 8
  })

  return (
    <Layout>
      <HomeWrapper>
        <HomeBanner />
        <CategorySlider />
        <ProductTitle>새로운 상품</ProductTitle>
        <ProductList
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          postData={postList?.pages}
        />
      </HomeWrapper>
    </Layout>
  )
}

const HomeWrapper = styled.div`
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

const ProductTitle = styled.div`
  ${({ theme }): string => theme.fonts.headline02B}
  margin-top: 52px;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    ${({ theme }): string => theme.fonts.subtitle01B}
    margin-top: 40px;
  }
`

export default Home
