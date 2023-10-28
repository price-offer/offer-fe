import styled from '@emotion/styled'
import type { NextPage } from 'next'
import { ProductList } from '../components/home/ProductList'
import { CategorySlider, HomeBanner } from '@components'

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

const Home: NextPage = () => {
  return (
    <Layout>
      <HomeWrapper>
        <HomeBanner />
        <CategorySlider />
        <ProductList productList={apiRes.elements} />
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
