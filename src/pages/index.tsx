import styled from '@emotion/styled'
import type { NextPage } from 'next'
import { ProductList } from '../components/home/ProductList'
import { IMAGE } from '../constants/images'
import { CategorySlider } from '@components/home/CategorySlider'
import { HomeBanner } from '@components/home/HomeBanner'

const Home: NextPage = () => {
  const cateGoryList = [
    {
      imageUrl: `${IMAGE.CATEGORY_MAN_GOODS_PC}`,
      title: '남성패션/잡화',
      url: 'string'
    },
    {
      imageUrl: `${IMAGE.CATEGORY_WOMAN_GOODS_PC}`,
      title: '여성패션/잡화',
      url: 'string'
    },
    {
      imageUrl: `${IMAGE.CATEGORY_GAME_PC}`,
      title: '게임',
      url: 'string'
    },
    {
      imageUrl: `${IMAGE.CATEGORY_SPORTS_PC}`,
      title: '스포츠/레저',
      url: 'string'
    },
    {
      imageUrl: `${IMAGE.CATEGORY_TOY_PC}`,
      title: '장난감/취미',
      url: 'string'
    },
    {
      imageUrl: `${IMAGE.CATEGORY_DIGITAL_DIVICE_PC}`,
      title: '디지털기기',
      url: 'string'
    },
    {
      imageUrl: `${IMAGE.CATEGORY_CAR_PC}`,
      title: '자동차/공구',
      url: 'string'
    },
    {
      imageUrl: `${IMAGE.CATEGORY_APPLIANCE_PC}`,
      title: '생활가전',
      url: 'string'
    },
    {
      imageUrl: `${IMAGE.CATEGORY_DIGITAL_FURNITURE_PC}`,
      title: '가구/인테리어',
      url: 'string'
    },
    {
      imageUrl: `${IMAGE.CATEGORY_BOOK_PC}`,
      title: '도서/티켓/음반',
      url: 'string'
    },
    {
      imageUrl: `${IMAGE.CATEGORY_ECT_PC}`,
      title: '더보기',
      url: 'string'
    }
  ]

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

  return (
    <Layout>
      <HomeWrapper>
        <HomeBanner />
        <CategorySlider imageList={cateGoryList} />
        <ProductList productList={apiRes.elements} />
      </HomeWrapper>
    </Layout>
  )
}

const HomeWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
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
