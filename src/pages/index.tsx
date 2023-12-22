import styled from '@emotion/styled'
import type { NextPage } from 'next'
import { ProductList } from '../components/home/ProductList'
import { useGetPostListQuery } from '@apis/post'
import { CategorySlider, HomeBanner } from '@components'

const Home: NextPage = () => {
  const {
    data: postList,
    fetchNextPage,
    hasNextPage
  } = useGetPostListQuery({
    lastId: null,
    limit: 8
  })

  return (
    <Layout>
      <HomeWrapper>
        <HomeBanner />
        <CategorySlider />
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

export default Home
