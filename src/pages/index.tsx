import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Button } from '@offer-ui/react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
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
  const router = useRouter()

  // TODO: 포스트 전체 갯수 내려달라고 요청해놓았습니다
  const postsCount = 0

  return (
    <Layout>
      <HomeWrapper>
        <HomeBanner />
        <CategorySlider />
        <ProductTitle>새로운 상품</ProductTitle>
        {postsCount > 0 ? (
          <ProductList
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            postData={postList?.pages}
          />
        ) : (
          <Placeholder>
            <PlaceholderTitle>새로 등록된 상품이 없어요</PlaceholderTitle>
            <Button
              size="medium"
              styleType="outline"
              width="160px"
              onClick={() => router.push('/post')}>
              판매글 올리기
            </Button>
          </Placeholder>
        )}
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

const Placeholder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  width: 100%;
  margin: 60px 0;
`

const PlaceholderTitle = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.grayScale70};

    ${theme.fonts.body01M};
  `}
`

export default Home
